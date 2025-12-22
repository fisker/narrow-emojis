import {expectType} from 'tsd'
import {
  narrowEmojiCharacters,
  narrowEmojiCodePoints,
  narrowEmojiString,
  narrowEmojiRegexp,
  isNarrowEmojiCharacter,
  isNarrowEmojiCodePoint,
} from './index.js'

expectType<string>(narrowEmojiCharacters[0])
expectType<number>(narrowEmojiCodePoints[0])
expectType<string>(narrowEmojiString)
expectType<boolean>(narrowEmojiRegexp.test('x'))
expectType<boolean>(isNarrowEmojiCharacter('x'))
expectType<boolean>(isNarrowEmojiCodePoint(11))
