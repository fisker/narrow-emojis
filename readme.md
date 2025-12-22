# narrow-emojis

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/narrow-emojis.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/narrow-emojis
[license_badge]: https://img.shields.io/npm/l/narrow-emojis.svg?style=flat-square
[license_link]: https://github.com/fisker/narrow-emojis/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/narrow-emojis.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/narrow-emojis

> Emojis with narrow width.

## Install

```bash
yarn add narrow-emojis
```

## Usage

<!-- Usage start -->

```js
import {
  narrowEmojiCharacters,
  narrowEmojiCodePoints,
  narrowEmojiString,
  narrowEmojiRegexp,
  isNarrowEmojiCharacter,
  isNarrowEmojiCodePoint,
} from 'narrow-emojis'

console.log(narrowEmojiCharacters)
// -> [ '©', '®', '‼', ... 198 more items ]

console.log(narrowEmojiCodePoints)
// -> [ 169, 174, 8252, ... 198 more items ]

console.log(new Set(narrowEmojiString))
// -> Set(201) { '©', '®', '‼', ... 198 more items }

console.log(narrowEmojiRegexp.test('©'))
// -> true

console.log(isNarrowEmojiCharacter('©'))
// -> true

console.log(isNarrowEmojiCodePoint(169))
// -> true
```

<!-- Usage end -->
