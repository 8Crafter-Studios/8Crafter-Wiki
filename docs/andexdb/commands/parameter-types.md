---
title: Parameter Types
page_title: Parameter Types
description: The list of the command parameter types in this add-on.
nav_order: 3
mentions:
    - Andexter8
    - stormstqr
---

### int

An integer. (Same support range as "int32")

### int32

A 32-bit integer. (Supports -2^31 to 2^31-1)

### int64

A 64-bit integer. (Supports -2^63 to 2^63-1)

### decimal

A decimal. (128 bit numbers in the form of `12.34`{lang=js}, stored internally in base 10)

### float

A float. (32 bit numbers in the form of `12.34`{lang=js}, stored internally in base 2)

### number

A float, decimal, integer, `Infinity`{lang=js}, `-Infinity`{lang=js}, or `NaN`{lang=js}.

### extendedNumber

A BigInt, float, decimal, integer, `Infinity`{lang=js}, `-Infinity`{lang=js}, or `NaN`{lang=js}.

### nonNaNNumber

A float, decimal, integer, `Infinity`{lang=js}, or `-Infinity`{lang=js}.

### nonNaNExtendedNumber

A BigInt float, decimal, integer, `Infinity`{lang=js}, or `-Infinity`{lang=js}.

### BigInt

A BigInt. (Supports large numbers and is specified by appending `n` to the value, like `5n`{lang=js} or `19284892917n`{lang=js})

### boolean

A boolean. (true or false, usually required to be lowercase)

### string

A string. Can be either a string of text with no spaces, or a JSON formatted string. (ex. `"some text\nanother line of text \uE359 and the unicode character U+E359"`{lang=json} or `myStringOfText_With-0-Spaces`)

### JSON

Stringified JSON.

Some examples include:

1\. `{"a": 1, "b": "something", "c": true, "d": {"p": 95, "e": -99}, "e": [{"a": 54, "b": true}, [1, "a", true, false], 4, -9, true, false, null], "f": null, "g": -72}`{lang=json}

2\. `true`{lang=json}

3\. `false`{lang=json}

4\. `57`{lang=json}

5\. `-23`{lang=json}

6\. `"some text\nanother line of text \uE359 and the unicode character U+E359"`{lang=json}

7\. `[1, 4, true, -7, false, "hi", "test", "to", "text\nnext line of text", {"a": 1, "b": 2}, [1, 4, false, "some"]]`{lang=json}

### JSONArray

A stringified JSON array.

Example: `[1, 4, true, -7, false, "hi", "test", "to", "text\nnext line of text", {"a": 1, "b": 2}, [1, 4, false, "some"]]`{lang=json}

### JSONObject

A stringified JSON object.

Example: `{"a": 1, "b": "something", "c": true, "d": {"p": 95, "e": -99}, "e": [{"a": 54, "b": true}, [1, "a", true, false], 4, -9, true, false, null], "f": null, "g": -72}`{lang=json}

### JSONString

A JSON formatted string. ex. `"some text\nanother line of text \uE359 and the unicode character U+E359"`{lang=json}

### JSONNumber

A decimal, float, or integer.

### JSONBoolean

A boolean.

### text

A string of text that allows for spaces, does not need quotation marks.

### escapableString

A string of text that allows for spaces and JаvaScript escape codes, does not need quotation marks.

### target

A target selector.

Examples:

-   `@s`{lang=mcfunction}
-   `Andexter8`{lang=mcfunction}
-   `"Evil Steve"`{lang=mcfunction}
-   `@a[name=Herobrine,tag=test,c=1,rm=0.5,r=5,x=1,y=1,z=1]`{lang=mcfunction}
-   `@e[family=monster,type=creeper]`{lang=mcfunction}

### targetSelector

The same as target.

### itemId

A namespaced id of an item type, for example `andexdb:debug_stick`, or `minecraft:grass`, or `netherreactor`, or `stick`.

### blockId

A namespaced id of a block type, for example `andexsa:diamond_crafting_table`, or `minecraft:grass_block`, or `glowingobsidian`, or `stone`.

### Block

The same as blockId. A namespaced id of a block type, for example `andexsa:diamond_crafting_table`, or `minecraft:grass_block`, or `glowingobsidian`, or `stone`.

### Item

The same as itemId. A namespaced id of an item type, for example `andexdb:debug_stick`, or `minecraft:grass`, or `netherreactor`, or `stick`.

### BlockPattern

// to-do

A block pattern.

### Mask

// to-do

### SingleBlockMask

// to-do

### BlockType

// to-do

### block states

A set of block states. Ex. `["infiniburn_bit"=false,"cardinal_direction"="north"]`{lang=mcfunction}

### x y z

A set of coordinates, relative coordinates and caret notation are allowed.

Examples:

-   `70 92.67 -69.69`{lang=mcfunction}
-   `~~~`{lang=mcfunction}
-   `~1~~5`{lang=mcfunction}
-   `^^^5`{lang=mcfunction}
-   `^^^`{lang=mcfunction}
-   `^2^1^8.5`{lang=mcfunction}
-   `~1.73~9.47~-10.23`{lang=mcfunction}
-   `70 ~ 63`{lang=mcfunction}
-   `19.38 ~-2210.21038 124065123478`{lang=mcfunction}

### location

A set of coordinates, relative coordinates are allowed.

Examples:

-   `70 92.67 -69.69`{lang=mcfunction}
-   `~~~`{lang=mcfunction}
-   `~1~~5`{lang=mcfunction}
-   `~1.73~9.47~-10.23`{lang=mcfunction}
-   `70 ~ 63`{lang=mcfunction}
-   `19.38 ~-2210.21038 124065123478`{lang=mcfunction}

### ~

A tilde. `~`

### Dimension

The name or namespaced id of a dimension. Valid values are `overworld`, `nether`, `the_end`, `minecraft:overworld`, `minecraft:nether`, and `minecraft:the_end`.

### RGBA

A 4-character RGBA hexadecimal color code. ex. `F927`

### RRGGBBAA

An 8-character RGBA hexadecimal color code. ex. `FE932B76`

### RGB

A 3-character RGB hexadecimal color code. ex. `F92`

### RRGGBB

A 6-character RGB hexadecimal color code. ex. `FE932B`

### {\<string\>}

This parameter type means that the value you type in for it is the exact text that is inside of the `{}`. For example if the parameter type is `{testabcd}`{lang=andexdbcmd} then for the parameter you would type in `testabcd`.

### (\<parameterType\>|\<parameterType\>)

This parameter type means that it can actually be any of the parameter types separated by vertical lines | inside of the parentheses (). For example, if your parameter was `[value: (number|(string|JSONArray)[maxLength=2])[?=5]]`{lang=andexdbcmd} then for the parameter you could do a number, a string with a max length of 2, a JSONArray with a max length of 2, or nothing, and if you put nothing then it will just default to `5`.
