import assert from 'node:assert/strict'
import test from 'node:test'
import {
  isNarrowEmojiCharacter,
  isNarrowEmojiCodePoint,
  narrowEmojiCharacters,
  narrowEmojiCodePoints,
  narrowEmojiRegexp,
  narrowEmojiString,
} from './index.js'

test('main', () => {
  assert.ok(
    Array.isArray(narrowEmojiCharacters) &&
      narrowEmojiCharacters.length !== 0 &&
      narrowEmojiCharacters.every((character) => typeof character === 'string'),
  )
  assert.ok(
    Array.isArray(narrowEmojiCodePoints) && narrowEmojiCodePoints.length !== 0,
  )
  assert.equal(narrowEmojiCharacters.join(''), narrowEmojiString)
  assert.equal([...narrowEmojiString].join(''), narrowEmojiString)
  assert.equal(narrowEmojiRegexp.test('✖'), true)
  assert.equal(isNarrowEmojiCharacter('n'), false)
  assert.equal(isNarrowEmojiCharacter('✖'), true)
  assert.equal(isNarrowEmojiCharacter('✖✖'), false)
  assert.equal(isNarrowEmojiCharacter('😀'), false)
  assert.equal(isNarrowEmojiCodePoint('✖'.codePointAt(0)), true)
})

// https://github.com/prettier/prettier/pull/17813
const narrowEmojis = [
  '\u{263A}', // ☺
  '\u{2639}', // ☹
  '\u{2620}', // ☠
  '\u{2763}', // ❣
  '\u{2764}', // ❤
  '\u{270C}', // ✌
  '\u{261D}', // ☝
  '\u{270D}', // ✍
  '\u{26F7}', // ⛷
  '\u{26F9}', // ⛹
  '\u{2618}', // ☘
  '\u{26E9}', // ⛩
  '\u{2668}', // ♨
  '\u{2708}', // ✈
  '\u{23F1}', // ⏱
  '\u{23F2}', // ⏲
  '\u{2600}', // ☀
  '\u{2601}', // ☁
  '\u{26C8}', // ⛈
  '\u{2602}', // ☂
  '\u{26F1}', // ⛱
  '\u{2744}', // ❄
  '\u{2603}', // ☃
  '\u{2604}', // ☄
  '\u{26F8}', // ⛸
  '\u{2660}', // ♠
  '\u{2665}', // ♥
  '\u{2666}', // ♦
  '\u{2663}', // ♣
  '\u{265F}', // ♟
  '\u{26D1}', // ⛑
  '\u{260E}', // ☎
  '\u{2328}', // ⌨
  '\u{2709}', // ✉
  '\u{270F}', // ✏
  '\u{2712}', // ✒
  '\u{2702}', // ✂
  '\u{26CF}', // ⛏
  '\u{2692}', // ⚒
  '\u{2694}', // ⚔
  '\u{2699}', // ⚙
  '\u{2696}', // ⚖
  '\u{26D3}', // ⛓
  '\u{2697}', // ⚗
  '\u{26B0}', // ⚰
  '\u{26B1}', // ⚱
  '\u{26A0}', // ⚠
  '\u{2622}', // ☢
  '\u{2623}', // ☣
  '\u{2B06}', // ⬆
  '\u{2197}', // ↗
  '\u{27A1}', // ➡
  '\u{2198}', // ↘
  '\u{2B07}', // ⬇
  '\u{2199}', // ↙
  '\u{2B05}', // ⬅
  '\u{2196}', // ↖
  '\u{2195}', // ↕
  '\u{2194}', // ↔
  '\u{21A9}', // ↩
  '\u{21AA}', // ↪
  '\u{2934}', // ⤴
  '\u{2935}', // ⤵
  '\u{269B}', // ⚛
  '\u{2721}', // ✡
  '\u{2638}', // ☸
  '\u{262F}', // ☯
  '\u{271D}', // ✝
  '\u{2626}', // ☦
  '\u{262A}', // ☪
  '\u{262E}', // ☮
  '\u{25B6}', // ▶
  '\u{25C0}', // ◀
  '\u{23F8}', // ⏸
  '\u{23F9}', // ⏹
  '\u{23FA}', // ⏺
  '\u{23CF}', // ⏏
  '\u{2640}', // ♀
  '\u{2642}', // ♂
  '\u{26A7}', // ⚧
  '\u{2716}', // ✖
  '\u{267E}', // ♾
  '\u{203C}', // ‼
  '\u{2049}', // ⁉
  '\u{2695}', // ⚕
  '\u{267B}', // ♻
  '\u{269C}', // ⚜
  '\u{2611}', // ☑
  '\u{2714}', // ✔
  '\u{2733}', // ✳
  '\u{2734}', // ✴
  '\u{2747}', // ❇
  '\u{00A9}', // ©
  '\u{00AE}', // ®
  '\u{2122}', // ™
  '\u{2139}', // ℹ
  '\u{25FC}', // ◼
  '\u{25FB}', // ◻
  '\u{25AA}', // ▪
  '\u{25AB}', // ▫
]
test('Prettier narrow emojis', () => {
  for (const character of narrowEmojis) {
    assert.ok(isNarrowEmojiCharacter(character))
  }
})
