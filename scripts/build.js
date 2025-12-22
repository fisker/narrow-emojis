import assert from 'node:assert'
import {inspect} from 'node:util'
import emojiRegex from 'emoji-regex'
import {outdent} from 'outdent'
import regenerate from 'regenerate'
import stringWidth from 'string-width'
import writePrettierFile from 'write-prettier-file'
import {downloadText, updateFile} from './utilities.js'

const DATA_URL = new URL(
  'https://www.unicode.org/Public/latest/emoji/emoji-test.txt',
)
const CACHE_DIRECTORY = new URL('../.cache/', import.meta.url)

function* parse(text) {
  const lines = text.split('\n')
  for (const line of lines) {
    if (!line || line.startsWith('#')) {
      continue
    }

    const codePointsEndIndex = line.indexOf('; ')
    assert.ok(codePointsEndIndex !== -1)
    const codePoints = line.slice(0, codePointsEndIndex).trim().split(' ')
    const character = String.fromCodePoint(
      ...codePoints.map((hex) => Number.parseInt(hex, 16)),
    )

    const statusEndIndex = line.indexOf('# ', codePointsEndIndex)
    assert.ok(statusEndIndex !== -1)

    const status = line.slice(codePointsEndIndex + 2, statusEndIndex).trim()
    const explanation = line.slice(statusEndIndex + 2)

    yield {codePoints, character, status, explanation}
  }
}

const isSingleEmoji = (character) => {
  let count = 0

  const replaced = character.replace(emojiRegex(), () => {
    count++
    return ''
  })

  return count === 1 && replaced === ''
}

const text = await downloadText(
  DATA_URL,
  new URL('./emoji-test.txt', CACHE_DIRECTORY),
)

const array = parse(text)
  .filter(
    ({character, codePoints}) =>
      codePoints.length === 1 &&
      isSingleEmoji(character) &&
      stringWidth(character) === 1,
  )
  .toArray()
  .toSorted(
    ({character: characterA}, {character: characterB}) =>
      characterA.codePointAt(0) - characterB.codePointAt(0),
  )
const codePoints = array.map(({character}) => character.codePointAt(0))
const string = array.map(({character}) => character).join('')

assert.equal(new Set(string).size, array.length)
assert.equal([...string].length, array.length)

const maxCodePointsLength = Math.max(
  ...array.map(({codePoints}) => codePoints.join(' ').length),
)

await writePrettierFile(
  new URL('../index.js', import.meta.url),
  outdent`
    export const narrowEmojiCharacters = [
      ${array
        .map(({character, codePoints, explanation}) =>
          [
            `/* ${codePoints.join(' ').padStart(maxCodePointsLength)} */`,
            `${JSON.stringify(character)},`,
            `// ${explanation}`,
          ].join(' '),
        )
        .join('\n')}
    ];

    export const narrowEmojiCodePoints = ${JSON.stringify(codePoints)};

    export const narrowEmojiString = ${JSON.stringify(string)};

    export const narrowEmojiRegexp = /^(?:${regenerate()
      .add(...string)
      .toString()})$/;

    export const isNarrowEmojiCharacter = character => narrowEmojiRegexp.test(character);
    const narrowEmojiCodePointsSet = new Set(narrowEmojiCodePoints)
    export const isNarrowEmojiCodePoint = codePoint => narrowEmojiCodePointsSet.has(codePoint);
  `,
)

const readmeFile = new URL('../readme.md', import.meta.url)
const startMark = '<!-- Usage start -->\n'
const endMark = '\n<!-- Usage end -->'
const usageContent = outdent`
  \`\`\`js
  import {
    narrowEmojiCharacters,
    narrowEmojiCodePoints,
    narrowEmojiString,
    narrowEmojiRegexp,
    isNarrowEmojiCharacter,
    isNarrowEmojiCodePoint,
  } from 'narrow-emojis'

  console.log(narrowEmojiCharacters)
  // -> ${inspect([...string], {maxArrayLength: 3})}

  console.log(narrowEmojiCodePoints)
  // -> ${inspect(codePoints, {maxArrayLength: 3})}

  console.log(new Set(narrowEmojiString))
  // -> ${inspect(new Set(string), {maxArrayLength: 3})}

  console.log(narrowEmojiRegexp.test(${JSON.stringify(array[0].character)}))
  // -> true

  console.log(isNarrowEmojiCharacter(${JSON.stringify(array[0].character)}))
  // -> true

  console.log(isNarrowEmojiCodePoint(${JSON.stringify(codePoints[0])}))
  // -> true
  \`\`\`
`

await updateFile(readmeFile, (content) => {
  assert.ok(content.includes(startMark))
  assert.ok(content.includes(endMark))
  return (
    content.slice(0, content.indexOf(startMark)) +
    startMark +
    usageContent +
    content.slice(content.indexOf(endMark))
  )
})
