export const narrowEmojiCharacters = [
  /*  00A9 */ '©', // © E0.6 copyright
  /*  00AE */ '®', // ® E0.6 registered
  /*  203C */ '‼', // ‼ E0.6 double exclamation mark
  /*  2049 */ '⁉', // ⁉ E0.6 exclamation question mark
  /*  2122 */ '™', // ™ E0.6 trade mark
  /*  2139 */ 'ℹ', // ℹ E0.6 information
  /*  2194 */ '↔', // ↔ E0.6 left-right arrow
  /*  2195 */ '↕', // ↕ E0.6 up-down arrow
  /*  2196 */ '↖', // ↖ E0.6 up-left arrow
  /*  2197 */ '↗', // ↗ E0.6 up-right arrow
  /*  2198 */ '↘', // ↘ E0.6 down-right arrow
  /*  2199 */ '↙', // ↙ E0.6 down-left arrow
  /*  21A9 */ '↩', // ↩ E0.6 right arrow curving left
  /*  21AA */ '↪', // ↪ E0.6 left arrow curving right
  /*  2328 */ '⌨', // ⌨ E1.0 keyboard
  /*  23CF */ '⏏', // ⏏ E1.0 eject button
  /*  23ED */ '⏭', // ⏭ E0.7 next track button
  /*  23EE */ '⏮', // ⏮ E0.7 last track button
  /*  23EF */ '⏯', // ⏯ E1.0 play or pause button
  /*  23F1 */ '⏱', // ⏱ E1.0 stopwatch
  /*  23F2 */ '⏲', // ⏲ E1.0 timer clock
  /*  23F8 */ '⏸', // ⏸ E0.7 pause button
  /*  23F9 */ '⏹', // ⏹ E0.7 stop button
  /*  23FA */ '⏺', // ⏺ E0.7 record button
  /*  24C2 */ 'Ⓜ', // Ⓜ E0.6 circled M
  /*  25AA */ '▪', // ▪ E0.6 black small square
  /*  25AB */ '▫', // ▫ E0.6 white small square
  /*  25B6 */ '▶', // ▶ E0.6 play button
  /*  25C0 */ '◀', // ◀ E0.6 reverse button
  /*  25FB */ '◻', // ◻ E0.6 white medium square
  /*  25FC */ '◼', // ◼ E0.6 black medium square
  /*  2600 */ '☀', // ☀ E0.6 sun
  /*  2601 */ '☁', // ☁ E0.6 cloud
  /*  2602 */ '☂', // ☂ E0.7 umbrella
  /*  2603 */ '☃', // ☃ E0.7 snowman
  /*  2604 */ '☄', // ☄ E1.0 comet
  /*  260E */ '☎', // ☎ E0.6 telephone
  /*  2611 */ '☑', // ☑ E0.6 check box with check
  /*  2618 */ '☘', // ☘ E1.0 shamrock
  /*  261D */ '☝', // ☝ E0.6 index pointing up
  /*  2620 */ '☠', // ☠ E1.0 skull and crossbones
  /*  2622 */ '☢', // ☢ E1.0 radioactive
  /*  2623 */ '☣', // ☣ E1.0 biohazard
  /*  2626 */ '☦', // ☦ E1.0 orthodox cross
  /*  262A */ '☪', // ☪ E0.7 star and crescent
  /*  262E */ '☮', // ☮ E1.0 peace symbol
  /*  262F */ '☯', // ☯ E0.7 yin yang
  /*  2638 */ '☸', // ☸ E0.7 wheel of dharma
  /*  2639 */ '☹', // ☹ E0.7 frowning face
  /*  263A */ '☺', // ☺ E0.6 smiling face
  /*  2640 */ '♀', // ♀ E4.0 female sign
  /*  2642 */ '♂', // ♂ E4.0 male sign
  /*  265F */ '♟', // ♟ E11.0 chess pawn
  /*  2660 */ '♠', // ♠ E0.6 spade suit
  /*  2663 */ '♣', // ♣ E0.6 club suit
  /*  2665 */ '♥', // ♥ E0.6 heart suit
  /*  2666 */ '♦', // ♦ E0.6 diamond suit
  /*  2668 */ '♨', // ♨ E0.6 hot springs
  /*  267B */ '♻', // ♻ E0.6 recycling symbol
  /*  267E */ '♾', // ♾ E11.0 infinity
  /*  2692 */ '⚒', // ⚒ E1.0 hammer and pick
  /*  2694 */ '⚔', // ⚔ E1.0 crossed swords
  /*  2695 */ '⚕', // ⚕ E4.0 medical symbol
  /*  2696 */ '⚖', // ⚖ E1.0 balance scale
  /*  2697 */ '⚗', // ⚗ E1.0 alembic
  /*  2699 */ '⚙', // ⚙ E1.0 gear
  /*  269B */ '⚛', // ⚛ E1.0 atom symbol
  /*  269C */ '⚜', // ⚜ E1.0 fleur-de-lis
  /*  26A0 */ '⚠', // ⚠ E0.6 warning
  /*  26A7 */ '⚧', // ⚧ E13.0 transgender symbol
  /*  26B0 */ '⚰', // ⚰ E1.0 coffin
  /*  26B1 */ '⚱', // ⚱ E1.0 funeral urn
  /*  26C8 */ '⛈', // ⛈ E0.7 cloud with lightning and rain
  /*  26CF */ '⛏', // ⛏ E0.7 pick
  /*  26D1 */ '⛑', // ⛑ E0.7 rescue worker’s helmet
  /*  26D3 */ '⛓', // ⛓ E0.7 chains
  /*  26E9 */ '⛩', // ⛩ E0.7 shinto shrine
  /*  26F0 */ '⛰', // ⛰ E0.7 mountain
  /*  26F1 */ '⛱', // ⛱ E0.7 umbrella on ground
  /*  26F4 */ '⛴', // ⛴ E0.7 ferry
  /*  26F7 */ '⛷', // ⛷ E0.7 skier
  /*  26F8 */ '⛸', // ⛸ E0.7 ice skate
  /*  26F9 */ '⛹', // ⛹ E0.7 person bouncing ball
  /*  2702 */ '✂', // ✂ E0.6 scissors
  /*  2708 */ '✈', // ✈ E0.6 airplane
  /*  2709 */ '✉', // ✉ E0.6 envelope
  /*  270C */ '✌', // ✌ E0.6 victory hand
  /*  270D */ '✍', // ✍ E0.7 writing hand
  /*  270F */ '✏', // ✏ E0.6 pencil
  /*  2712 */ '✒', // ✒ E0.6 black nib
  /*  2714 */ '✔', // ✔ E0.6 check mark
  /*  2716 */ '✖', // ✖ E0.6 multiply
  /*  271D */ '✝', // ✝ E0.7 latin cross
  /*  2721 */ '✡', // ✡ E0.7 star of David
  /*  2733 */ '✳', // ✳ E0.6 eight-spoked asterisk
  /*  2734 */ '✴', // ✴ E0.6 eight-pointed star
  /*  2744 */ '❄', // ❄ E0.6 snowflake
  /*  2747 */ '❇', // ❇ E0.6 sparkle
  /*  2763 */ '❣', // ❣ E1.0 heart exclamation
  /*  2764 */ '❤', // ❤ E0.6 red heart
  /*  27A1 */ '➡', // ➡ E0.6 right arrow
  /*  2934 */ '⤴', // ⤴ E0.6 right arrow curving up
  /*  2935 */ '⤵', // ⤵ E0.6 right arrow curving down
  /*  2B05 */ '⬅', // ⬅ E0.6 left arrow
  /*  2B06 */ '⬆', // ⬆ E0.6 up arrow
  /*  2B07 */ '⬇', // ⬇ E0.6 down arrow
  /* 1F170 */ '🅰', // 🅰 E0.6 A button (blood type)
  /* 1F171 */ '🅱', // 🅱 E0.6 B button (blood type)
  /* 1F17E */ '🅾', // 🅾 E0.6 O button (blood type)
  /* 1F17F */ '🅿', // 🅿 E0.6 P button
  /* 1F321 */ '🌡', // 🌡 E0.7 thermometer
  /* 1F324 */ '🌤', // 🌤 E0.7 sun behind small cloud
  /* 1F325 */ '🌥', // 🌥 E0.7 sun behind large cloud
  /* 1F326 */ '🌦', // 🌦 E0.7 sun behind rain cloud
  /* 1F327 */ '🌧', // 🌧 E0.7 cloud with rain
  /* 1F328 */ '🌨', // 🌨 E0.7 cloud with snow
  /* 1F329 */ '🌩', // 🌩 E0.7 cloud with lightning
  /* 1F32A */ '🌪', // 🌪 E0.7 tornado
  /* 1F32B */ '🌫', // 🌫 E0.7 fog
  /* 1F32C */ '🌬', // 🌬 E0.7 wind face
  /* 1F336 */ '🌶', // 🌶 E0.7 hot pepper
  /* 1F37D */ '🍽', // 🍽 E0.7 fork and knife with plate
  /* 1F396 */ '🎖', // 🎖 E0.7 military medal
  /* 1F397 */ '🎗', // 🎗 E0.7 reminder ribbon
  /* 1F399 */ '🎙', // 🎙 E0.7 studio microphone
  /* 1F39A */ '🎚', // 🎚 E0.7 level slider
  /* 1F39B */ '🎛', // 🎛 E0.7 control knobs
  /* 1F39E */ '🎞', // 🎞 E0.7 film frames
  /* 1F39F */ '🎟', // 🎟 E0.7 admission tickets
  /* 1F3CB */ '🏋', // 🏋 E0.7 person lifting weights
  /* 1F3CC */ '🏌', // 🏌 E0.7 person golfing
  /* 1F3CD */ '🏍', // 🏍 E0.7 motorcycle
  /* 1F3CE */ '🏎', // 🏎 E0.7 racing car
  /* 1F3D4 */ '🏔', // 🏔 E0.7 snow-capped mountain
  /* 1F3D5 */ '🏕', // 🏕 E0.7 camping
  /* 1F3D6 */ '🏖', // 🏖 E0.7 beach with umbrella
  /* 1F3D7 */ '🏗', // 🏗 E0.7 building construction
  /* 1F3D8 */ '🏘', // 🏘 E0.7 houses
  /* 1F3D9 */ '🏙', // 🏙 E0.7 cityscape
  /* 1F3DA */ '🏚', // 🏚 E0.7 derelict house
  /* 1F3DB */ '🏛', // 🏛 E0.7 classical building
  /* 1F3DC */ '🏜', // 🏜 E0.7 desert
  /* 1F3DD */ '🏝', // 🏝 E0.7 desert island
  /* 1F3DE */ '🏞', // 🏞 E0.7 national park
  /* 1F3DF */ '🏟', // 🏟 E0.7 stadium
  /* 1F3F3 */ '🏳', // 🏳 E0.7 white flag
  /* 1F3F5 */ '🏵', // 🏵 E0.7 rosette
  /* 1F3F7 */ '🏷', // 🏷 E0.7 label
  /* 1F43F */ '🐿', // 🐿 E0.7 chipmunk
  /* 1F441 */ '👁', // 👁 E0.7 eye
  /* 1F4FD */ '📽', // 📽 E0.7 film projector
  /* 1F549 */ '🕉', // 🕉 E0.7 om
  /* 1F54A */ '🕊', // 🕊 E0.7 dove
  /* 1F56F */ '🕯', // 🕯 E0.7 candle
  /* 1F570 */ '🕰', // 🕰 E0.7 mantelpiece clock
  /* 1F573 */ '🕳', // 🕳 E0.7 hole
  /* 1F574 */ '🕴', // 🕴 E0.7 person in suit levitating
  /* 1F575 */ '🕵', // 🕵 E0.7 detective
  /* 1F576 */ '🕶', // 🕶 E0.7 sunglasses
  /* 1F577 */ '🕷', // 🕷 E0.7 spider
  /* 1F578 */ '🕸', // 🕸 E0.7 spider web
  /* 1F579 */ '🕹', // 🕹 E0.7 joystick
  /* 1F587 */ '🖇', // 🖇 E0.7 linked paperclips
  /* 1F58A */ '🖊', // 🖊 E0.7 pen
  /* 1F58B */ '🖋', // 🖋 E0.7 fountain pen
  /* 1F58C */ '🖌', // 🖌 E0.7 paintbrush
  /* 1F58D */ '🖍', // 🖍 E0.7 crayon
  /* 1F590 */ '🖐', // 🖐 E0.7 hand with fingers splayed
  /* 1F5A5 */ '🖥', // 🖥 E0.7 desktop computer
  /* 1F5A8 */ '🖨', // 🖨 E0.7 printer
  /* 1F5B1 */ '🖱', // 🖱 E0.7 computer mouse
  /* 1F5B2 */ '🖲', // 🖲 E0.7 trackball
  /* 1F5BC */ '🖼', // 🖼 E0.7 framed picture
  /* 1F5C2 */ '🗂', // 🗂 E0.7 card index dividers
  /* 1F5C3 */ '🗃', // 🗃 E0.7 card file box
  /* 1F5C4 */ '🗄', // 🗄 E0.7 file cabinet
  /* 1F5D1 */ '🗑', // 🗑 E0.7 wastebasket
  /* 1F5D2 */ '🗒', // 🗒 E0.7 spiral notepad
  /* 1F5D3 */ '🗓', // 🗓 E0.7 spiral calendar
  /* 1F5DC */ '🗜', // 🗜 E0.7 clamp
  /* 1F5DD */ '🗝', // 🗝 E0.7 old key
  /* 1F5DE */ '🗞', // 🗞 E0.7 rolled-up newspaper
  /* 1F5E1 */ '🗡', // 🗡 E0.7 dagger
  /* 1F5E3 */ '🗣', // 🗣 E0.7 speaking head
  /* 1F5E8 */ '🗨', // 🗨 E2.0 left speech bubble
  /* 1F5EF */ '🗯', // 🗯 E0.7 right anger bubble
  /* 1F5F3 */ '🗳', // 🗳 E0.7 ballot box with ballot
  /* 1F5FA */ '🗺', // 🗺 E0.7 world map
  /* 1F6CB */ '🛋', // 🛋 E0.7 couch and lamp
  /* 1F6CD */ '🛍', // 🛍 E0.7 shopping bags
  /* 1F6CE */ '🛎', // 🛎 E0.7 bellhop bell
  /* 1F6CF */ '🛏', // 🛏 E0.7 bed
  /* 1F6E0 */ '🛠', // 🛠 E0.7 hammer and wrench
  /* 1F6E1 */ '🛡', // 🛡 E0.7 shield
  /* 1F6E2 */ '🛢', // 🛢 E0.7 oil drum
  /* 1F6E3 */ '🛣', // 🛣 E0.7 motorway
  /* 1F6E4 */ '🛤', // 🛤 E0.7 railway track
  /* 1F6E5 */ '🛥', // 🛥 E0.7 motor boat
  /* 1F6E9 */ '🛩', // 🛩 E0.7 small airplane
  /* 1F6F0 */ '🛰', // 🛰 E0.7 satellite
  /* 1F6F3 */ '🛳', // 🛳 E0.7 passenger ship
]

export const narrowEmojiCodePoints = [
  169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617,
  8618, 9000, 9167, 9197, 9198, 9199, 9201, 9202, 9208, 9209, 9210, 9410, 9642,
  9643, 9654, 9664, 9723, 9724, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9752,
  9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794,
  9823, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9874, 9876, 9877, 9878, 9879,
  9881, 9883, 9884, 9888, 9895, 9904, 9905, 9928, 9935, 9937, 9939, 9961, 9968,
  9969, 9972, 9975, 9976, 9977, 9986, 9992, 9993, 9996, 9997, 9999, 10002,
  10004, 10006, 10013, 10017, 10035, 10036, 10052, 10055, 10083, 10084, 10145,
  10548, 10549, 11013, 11014, 11015, 127344, 127345, 127358, 127359, 127777,
  127780, 127781, 127782, 127783, 127784, 127785, 127786, 127787, 127788,
  127798, 127869, 127894, 127895, 127897, 127898, 127899, 127902, 127903,
  127947, 127948, 127949, 127950, 127956, 127957, 127958, 127959, 127960,
  127961, 127962, 127963, 127964, 127965, 127966, 127967, 127987, 127989,
  127991, 128063, 128065, 128253, 128329, 128330, 128367, 128368, 128371,
  128372, 128373, 128374, 128375, 128376, 128377, 128391, 128394, 128395,
  128396, 128397, 128400, 128421, 128424, 128433, 128434, 128444, 128450,
  128451, 128452, 128465, 128466, 128467, 128476, 128477, 128478, 128481,
  128483, 128488, 128495, 128499, 128506, 128715, 128717, 128718, 128719,
  128736, 128737, 128738, 128739, 128740, 128741, 128745, 128752, 128755,
]

export const narrowEmojiString =
  '©®‼⁉™ℹ↔↕↖↗↘↙↩↪⌨⏏⏭⏮⏯⏱⏲⏸⏹⏺Ⓜ▪▫▶◀◻◼☀☁☂☃☄☎☑☘☝☠☢☣☦☪☮☯☸☹☺♀♂♟♠♣♥♦♨♻♾⚒⚔⚕⚖⚗⚙⚛⚜⚠⚧⚰⚱⛈⛏⛑⛓⛩⛰⛱⛴⛷⛸⛹✂✈✉✌✍✏✒✔✖✝✡✳✴❄❇❣❤➡⤴⤵⬅⬆⬇🅰🅱🅾🅿🌡🌤🌥🌦🌧🌨🌩🌪🌫🌬🌶🍽🎖🎗🎙🎚🎛🎞🎟🏋🏌🏍🏎🏔🏕🏖🏗🏘🏙🏚🏛🏜🏝🏞🏟🏳🏵🏷🐿👁📽🕉🕊🕯🕰🕳🕴🕵🕶🕷🕸🕹🖇🖊🖋🖌🖍🖐🖥🖨🖱🖲🖼🗂🗃🗄🗑🗒🗓🗜🗝🗞🗡🗣🗨🗯🗳🗺🛋🛍🛎🛏🛠🛡🛢🛣🛤🛥🛩🛰🛳'

export const narrowEmojiRegexp =
  /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7-\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCB-\uDFCE\uDFD4-\uDFDF\uDFF3\uDFF5\uDFF7]|\uD83D[\uDC3F\uDC41\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])$/

export const isNarrowEmojiCharacter = (character) =>
  narrowEmojiRegexp.test(character)
const narrowEmojiCodePointsSet = new Set(narrowEmojiCodePoints)
export const isNarrowEmojiCodePoint = (codePoint) =>
  narrowEmojiCodePointsSet.has(codePoint)
