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

A block pattern.

This parameter type is mainly used to fill areas with patterns.

These patterns are specified by having multiple blocks separated by commas.

Each of the block IDs can have namespaces but if they are vanilla blocks then the namespace is optional (ex. `stone` could be `minecraft:stone` or `stone`, but `andexrp:debug` can only be `andexrp:debug` not `debug`). The block IDs can also have quotes but these are also optional (ex. `stone` could be `minecraft:stone`, `stone`, `"minecraft:stone"`, or `"stone"`).

Example: `diamond_block,iron_block`{lang=mccmd}.

Adding `s:` to the start of the list causes the blocks to be placed in a predictable pattern (will be the same each time).

Adding `r:` to the start of the list causes the blocks to be placed in a random pattern, this is useless as this is the default behavior, so it is unnecessary to add `r:` to the beginning of the block pattern.

In this mode the blocks are placed in the order they are specified, if the weight of a block type is specified in this mode, it will be as if you had typed that block twice in the list, if you want the block type to appear in multiple places in the pattern, you can just specify it multiple times.

Example: `s:diamond_block,iron_block`{lang=mccmd}.

Also, adding a `%<int>` after each block name to set the ratio in which to spawn (defaults to 1), like `diamond_block%20,iron_block`{lang=mccmd} will spawn 20 diamond blocks for each iron block (iron block has a 1/21 = 4.8% weight).

Lastly, adding block states (like you would in a normal command or in JSON syntax) after any block name or weight value will also work, like: `andesite_stairs%20["upside_down_bit"=true],granite_stairs%20{"upside_down_bit":true},stone,glass%36`{lang=mccmd}

Examples:

-   `diamond_block,iron_block`{lang=mccmd} - Random combination of diamond and iron blocks, each with an equal probability of spawning.
-   `s:diamond_block,iron_block`{lang=mccmd} - Sequence that alternates between diamond and iron blocks every block.
-   `diamond_block%20,iron_block`{lang=mccmd} - Random combination of diamond and iron blocks, with diamond blocks having a 20/21 (95.2% chance) of spawning, and iron blocks having a 1/21 (4.8% chance) of spawning.
-   `andesite_stairs%20["upside_down_bit"=true],granite_stairs%20{"upside_down_bit":true},stone,glass%36`{lang=mccmd} - Random combination of upside down andesite stairs, upside down granite stairs, stone, and glass, with upside down andesite stairs having a 20/77 (26.0% chance) of spawning, upside down granite stairs having a 20/77 (26.0% chance) of spawning, stone having a 1/77 (1.3% chance) of spawning, and glass having a 36/77 (46.7% chance) of spawning.
-   `stone,grass_block,ice%1,minecraft:end_gateway%10,andexrp:debug,"minecraft:iron_ore"%50,minecraft:diamond_block,"sandstone","minecraft:sand","packed_ice"%37,polished_blackstone_stairs["upside_down_bit"=false, "weirdo_direction"=4],minecraft:chest["cardinal_direction" = "north"],slime_block,oak_slab{"top_half_bit": true},minecraft:diorite_wall%76{"north_wall_bit": false, "south_wall_bit":true},glass`{lang=mccmd} - A very complicated block pattern.

<br />

Examples of INVALID block patterns:

-   `diamond_block, iron_block`{lang=mccmd} - You cannot have spaces in a block pattern unless they are inside of the brackets for block states, or are inside of the block's ID if it is in quotes.
-   `diamond_block iron_block`{lang=mccmd} - The block IDs must be separated by commas, not spaces.
-   `diamond_block,iron_bl ock`{lang=mccmd} - You must have quotes around the block ID to have spaces in it (ex. `diamond_block,"iron_bl ock"`{lang=mccmd}), but even then, the block ID for the vanilla iron block does not have spaces in it so the iron block in the case would be ignored.
-   `andesite_stairs%20["upside_down_bit"=true`{lang=mccmd} - The right square bracket is missing.
-   `andesite_stairs%20{"upside_down_bit"=true}`{lang=mccmd} - If you use curly brackets for the block states, then you must put them in JSON object format (ex. `andesite_stairs%20{"upside_down_bit":true}`{lang=mccmd}).
-   `andesite_stairs%20["upside_down_bit":true]`{lang=mccmd} - If you use square brackets for the block states, then you must put them in Minecraft block states format (ex. `andesite_stairs%20["upside_down_bit"=true]`{lang=mccmd}).
-   `andesite_stairs["upside_down_bit"=true]%20`{lang=mccmd} - The weight must be specified BEFORE the block states not after.
-   `%20andesite_stairs["upside_down_bit"=true]`{lang=mccmd} - The weight must be specified AFTER the block ID not before.
-   `["upside_down_bit"=true]andesite_stairs%20`{lang=mccmd} - The block states must be specified AFTER the block ID and weight not before.
-   `andesite_stairs%20[upside_down_bit=true]`{lang=mccmd} - The property names of the block states must be quoted.

### Mask

<template-ExpandSection details="Add some examples." />

A block mask.

These are very similar to block patterns, the main difference is that block masks support other kinds of filters, and that block masks do not support weights.

Another major difference is that instead of being able to prefix the block mask with `s:` or `r:`, like with block patterns, instead you can prefix the block mask with `i:` or `e:`, to switch between include and exclude mode.

Include mode will cause the block mask to only match blocks that match the mask. For example, `i:air,stone`{lang=mccmd} would only match air and stone blocks. This `i:` prefix is useless in most situations, as include mode is the default mode, so adding it does nothing. The only time the `i:` prefix does anything is if the command that this block mask is being used in defaults to using exclude mode.

Exclude mode basically just inverts the selection, so it will match all blocks that don't match the mask. For example, `e:air,stone`{lang=mccmd} would only match blocks that are NOT air or stone blocks.

Features unique to block masks:

-   Presets:
    -   You can specify these presets just like you would specify a regular block type. When you specify a preset, then it will match any of the block types that it includes.
    -   Here is the current list of valid block presets, and what block types they include:
        -   `preset:leaves`{lang=mccmd}: includes all block types that have "leaves" in the name.
        -   `preset:deforest`{lang=mccmd}: includes all block types that have "leaves" or "sapling" in the name, any block with the "log" or "plant" tags, `short_grass`{lang=mccmd}, `tall_grass`{lang=mccmd}, `vine`{lang=mccmd}, `dandelion`{lang=mccmd}, `allium`{lang=mccmd}, `brown_mushroom_block`{lang=mccmd}, `red_mushroom_block`{lang=mccmd}, `mushroom_stem`{lang=mccmd}, `crimson_roots`{lang=mccmd}, `warped_roots`{lang=mccmd}, `poppy`{lang=mccmd}, `cactus`{lang=mccmd}, `cactus_flower`{lang=mccmd}, `short_dry_grass`{lang=mccmd}, `tall_dry_grass`{lang=mccmd}, `fern`{lang=mccmd}, `tall_fern`{lang=mccmd}, `dead_bush`{lang=mccmd}, `melon_block`{lang=mccmd}, `pumpkin`{lang=mccmd}, and `bee_nest`{lang=mccmd}. It is still a work in progress and will include more block types in the future.
        -   `preset:ores`{lang=mccmd}: includes all block types that have "ore" in the name, as well as ancient debris.
        -   `preset:ore_blocks`{lang=mccmd}: includes the following block types:
            -   `coal_block`{lang=mccmd}
            -   `copper_block`{lang=mccmd}
            -   `exposed_copper`{lang=mccmd}
            -   `weathered_copper`{lang=mccmd}
            -   `oxidized_copper`{lang=mccmd}
            -   `waxed_copper`{lang=mccmd}
            -   `waxed_exposed_copper`{lang=mccmd}
            -   `waxed_weathered_copper`{lang=mccmd}
            -   `waxed_oxidized_copper`{lang=mccmd}
            -   `iron_block`{lang=mccmd}
            -   `gold_block`{lang=mccmd}
            -   `emerald_block`{lang=mccmd}
            -   `diamond_block`{lang=mccmd}
            -   `netherite_block`{lang=mccmd}
            -   `redstone_block`{lang=mccmd}
            -   `lapis_block`{lang=mccmd}
            -   `raw_copper_block`{lang=mccmd}
            -   `raw_iron_block`{lang=mccmd}
            -   `raw_gold_block`{lang=mccmd}
        -   `preset:liquid`{lang=mccmd}: includes `water`{lang=mccmd}, `flowing_water`{lang=mccmd}, `lava`{lang=mccmd}, and `flowing_lava`{lang=mccmd}.
    -   Tags:
        -   Block masks allow you to filter blocks by block tags. To use a block tag, just put `tag:tagname`{lang=mccmd} as the block type. ex. `tag:plant`{lang=mccmd} or `tag:minecraft:is_hoe_item_destructable`{lang=mccmd}.

### SingleBlockMask

<template-EmptySection />

### BlockType

<template-EmptySection />

### block states

A set of block states. Ex. `["infiniburn_bit"=false,"cardinal_direction"="north"]`{lang=mcfunction}

### x y z

<template-IncompleteSection details="the custom syntax types for the coordinates, such as with ! or *." />

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

This parameter type means that it can actually be any of the parameter types separated by vertical lines `|` inside of the parentheses `()`. For example, if your parameter was `[value: (number|(string|JSONArray)[maxLength=2])[?=5]]`{lang=andexdbcmd} then for the parameter you could do a number, a string with a max length of 2, a JSONArray with a max length of 2, or nothing, and if you put nothing then it will just default to `5`.
