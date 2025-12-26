import assert from 'node:assert'
import {inspect} from 'node:util'
import emojiRegex from 'emoji-regex'
import {eastAsianWidth} from 'get-east-asian-width'
import {outdent} from 'outdent'
import regenerate from 'regenerate'
import writePrettierFile from 'write-prettier-file'
import {downloadText, updateFile} from './utilities.js'

const DATA_URL = new URL(
  'https://unicode.org/Public/latest/ucd/emoji/emoji-variation-sequences.txt',
)
const CACHE_DIRECTORY = new URL('../.cache/', import.meta.url)

function* parse(text) {
  const lines = text.split('\n')

  for (const line of lines) {
    if (!line || line.startsWith('#')) {
      continue
    }

    const [codePoints, , description] = line
      .split(';')
      .map((part) => part.trim())

    assert.ok(description.startsWith('# '))

    if (codePoints.endsWith(' FE0E')) {
      const codePoint = codePoints.slice(0, -5)
      const character = String.fromCodePoint(Number.parseInt(codePoint, 16))
      yield {character, codePoint, description: description.slice(2)}
      continue
    }

    assert.ok(codePoints.endsWith(' FE0F'))
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
  new URL('./emoji-variation-sequences.txt', CACHE_DIRECTORY),
)

const array = parse(text)
  .filter(
    ({character}) =>
      // These characters requires `U+FE0F`(VS16) to be Emoji
      isSingleEmoji(character) &&
      // ... unless they have `Emoji_Presentation = yes`
      // https://github.com/mathiasbynens/emoji-regex/issues/61#issuecomment-714500889
      /^\P{Emoji_Presentation}$/v.test(character) &&
      eastAsianWidth(character.codePointAt(0), {ambiguousAsWide: false}) === 1,
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
  ...array.map(({codePoint}) => codePoint.length),
)

await writePrettierFile(
  new URL('../index.js', import.meta.url),
  outdent`
    export const narrowEmojiCharacters = [
      ${array
        .map(({character, codePoint, description}) =>
          [
            `/* ${codePoint.padStart(maxCodePointsLength)} */`,
            `${JSON.stringify(character)},`,
            `// ${description}`,
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
