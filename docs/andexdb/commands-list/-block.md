---
title: \block
page_title: \block
description: The \block command.
show_outline: false
category: Main
nav_order: 3
mentions:
    - stormstqr
    - 8Crafter
---

Manages blocks.

<CommandDetailsTable
    name="\block"
    :categories="[
        'world', 'blocks'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="admin"
    version="0.2.7-alpha.36"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\block`{lang=andexdbcmd}

<indent></indent>

`\block <block: ({facing}|{^}|~)|x y z> ...`{lang=andexdbcmd}

-   `... `{lang=andexdbcmd noRightCodeBlock=true}[`get color`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#get-color)` ...`{lang=andexdbcmd noLeftCodeBlock=true}

    -   `... <colorSpace: rgba|rgb> <unit: hex|frac|dec|decr>`{lang=andexdbcmd}

    -   `... <colorSpace: {hsl}|{hsluv}|({hsv}|{hsb})|{hsi}|{hpluv}|{AdobeRGB}|{CIELuv}|{CIExyY}>`{lang=andexdbcmd}

-   `... `{lang=andexdbcmd noRightCodeBlock=true}[`get filllevel`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#get-filllevel)` `{noLeftCodeBlock=true}

    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get liquidtype`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` `{noLeftCodeBlock=true}~~ (COMING SOON!)
    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get waterlogged`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` `{noLeftCodeBlock=true}~~ (COMING SOON!)
    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get state`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` <stateId: string>`{lang=andexdbcmd noLeftCodeBlock=true}~~ (COMING SOON!)
    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get states`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` `{noLeftCodeBlock=true}~~ (COMING SOON!)
    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get tags`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` `{noLeftCodeBlock=true}~~ (COMING SOON!)
    -   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`get component`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#)` <componentId: {waterContainer}|{lavaContainer}|{snowContainer}|{potionContainer}>`{lang=andexdbcmd noLeftCodeBlock=true}~~ (COMING SOON!)

-   `... `{lang=andexdbcmd noRightCodeBlock=true}[`set color`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#set-color)` ...`{lang=andexdbcmd noLeftCodeBlock=true}

    -   `... rgba hex <hexRGBAColor: RRGGBBAA|RGBA>`{lang=andexdbcmd}
    -   `... rgba frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]> <alpha: float[min=0.0,max=1.0]>`{lang=andexdbcmd}
    -   `... rgba dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]> <alpha: int[min=0,max=255]>`{lang=andexdbcmd}
    -   `... rgba decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]> <alpha: float[min=0.0,max=255.0]>`{lang=andexdbcmd}
    -   `... rgb hex <hexRGBAColor: RRGGBB|RGB>`{lang=andexdbcmd}
    -   `... rgb frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]>`{lang=andexdbcmd}
    -   `... rgb dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]>`{lang=andexdbcmd}
    -   `... rgb decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]>`{lang=andexdbcmd}
    -   `... hsl <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <lightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}
    -   ~~`... hsv <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <value: float[min=0.0,max=100.0]>`{lang=andexdbcmd}~~ (COMING SOON!)
    -   ~~`... hsb <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <brightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}~~ (COMING SOON!)
    -   ~~`... bin <red: binary> <green: binary> <blue: binary>`{lang=andexdbcmd}~~ (COMING SOON!)
    -   ~~`... clear`{lang=andexdbcmd}~~ (COMING SOON!)

-   `... `{lang=andexdbcmd noRightCodeBlock=true}[`set filllevel`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#set-filllevel)` <fillLevel: int[min=0,max=6]>`{lang=andexdbcmd noLeftCodeBlock=true}

-   ~~`... `{lang=andexdbcmd noRightCodeBlock=true}[`debug`{lang=andexdbcmd noLeftCodeBlock=true noRightCodeBlock=true}](#debug)` `{noLeftCodeBlock=true}~~ (COMING SOON!)

<indent></indent>

### Subcommands

#### get color

<indent>

Displays the color of the liquid in the block, only works on cauldrons.

**Syntax**

<indent>

`get color <colorSpace: {rgba}|{rgb}> <unit: {hex}|{frac}|{dec}|{decr}>`{lang=andexdbcmd}

`get color <colorSpace: {hsl}|{hsluv}|({hsv}|{hsb})|{hsi}|{hpluv}|{AdobeRGB}|{CIELuv}|{CIExyY}>`{lang=andexdbcmd}

</indent>

**Arguments**

<indent>

`<colorSpace: {rgba}|{rgb}>`{lang=andexdbcmd}: [{\<string\>}](../commands/parameter-types#string-1)

<indent>

Whether to display the color in the RGB or RGBA color space.

If `rgba` is specified, the color will include the alpha value.

If `rgb` is specified, the color will not include the alpha value.

Must be one of the following:

-   `rgba`
-   `rgb`

</indent>

`<colorSpace: {hsl}|{hsluv}|({hsv}|{hsb})|{hsi}|{hpluv}|{AdobeRGB}|{CIELuv}|{CIExyY}>`{lang=andexdbcmd}: [{\<string\>}](../commands/parameter-types#string-1)

<indent>

What color space to display the color in.

Must be one of the following:

-   `hsl`
-   `hsluv`
-   `hsv`
-   `hsb`
-   `hsi`
-   `hpluv`
-   `AdobeRGB`
-   `CIELuv`
-   `CIExyY`

Note: In this command, `hsv` and `hsb` are the same thing.

</indent>

`<unit: {hex}|{frac}|{dec}|{decr}>`{lang=andexdbcmd}: [{\<string\>}](../commands/parameter-types#string-1)

<indent>

What unit to display the rgb/rgba color in.

Must be one of the following:

-   `hex` - hexadecimal, ex. `#FE932BFF` or `#FE932B`
-   `frac` - fractional, this displays the raw values returned by the `fluidColor`{lang=ts} property of the `liquidContainer`{lang=ts} component, ex. `0.996 0.576 0.168 1.0` or `0.996 0.576 0.168`
-   `dec` - decimal, this displays the raw values returned by the `fluidColor`{lang=ts} property of the `liquidContainer`{lang=ts} component multipled by 255 and rounded to the nearest integer, ex. `254 147 43 255` or `254 147 43`
-   `decr` - decimal, this displays the raw values returned by the `fluidColor`{lang=ts} property of the `liquidContainer`{lang=ts} component multiplied by 255 without rounding, ex. `254 147 43 255` or `254 147 43`

</indent>

</indent>

</indent>

#### get filllevel

<indent>

Displays the fill level of the block, only works on cauldrons. The fill level is a number between 0 and 6, where 0 is empty and 6 is full.

**Syntax**

<indent>

`get filllevel`{lang=andexdbcmd}

</indent>

</indent>

#### set color

<indent>

Sets the color of the liquid in the block, only works on cauldrons.

**Syntax**

<indent>

`set color rgba hex <hexRGBAColor: RRGGBBAA|RGBA>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified RGBA hex color.

`set color rgba frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]> <alpha: float[min=0.0,max=1.0]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified RGBA fractional color.

`set color rgba dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]> <alpha: int[min=0,max=255]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified rounded RGBA decimal color.

`set color rgba decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]> <alpha: float[min=0.0,max=255.0]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified unrounded RGBA decimal color.

`set color rgb hex <hexRGBAColor: RRGGBB|RGB>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified RGB hex color.

`set color rgb frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified RGB fractional color.

`set color rgb dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified rounded RGB decimal color.

`set color rgb decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified unrounded RGB decimal color.

`set color hsl <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <lightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd} - Sets the color of the liquid in the block to the specified HSL color.

~~`set color hsv <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <value: float[min=0.0,max=100.0]>`{lang=andexdbcmd}~~ (COMING SOON!) - Sets the color of the liquid in the block to the specified HSV color.

~~`set color hsb <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <brightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}~~ (COMING SOON!) - Sets the color of the liquid in the block to the specified HSB color.

~~`set color bin <red: binary> <green: binary> <blue: binary>`{lang=andexdbcmd}~~ (COMING SOON!) - Sets the color of the liquid in the block to the specified binary color.

~~`set color clear`{lang=andexdbcmd}~~ (COMING SOON!) - Clears the color of the liquid in the block.

</indent>

**Arguments**

<indent>

Option: `set color rgba hex <hexRGBAColor: RRGGBBAA|RGBA>`{lang=andexdbcmd}

<indent>

`<hexRGBAColor: RRGGBBAA|RGBA>`{lang=andexdbcmd}: [RRGGBBAA](../commands/parameter-types#rrggbbaa) or [RGBA](../commands/parameter-types#rgba)

<indent>

The hex color to set the liquid to.

ex. `FE932B76` or `F927`

</indent>

</indent>

Option: `set color rgba frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]> <alpha: float[min=0.0,max=1.0]>`{lang=andexdbcmd}

<indent>

`<red: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

`<green: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

`<blue: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

`<alpha: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The alpha component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

</indent>

Option: `set color rgba dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]> <alpha: int[min=0,max=255]>`{lang=andexdbcmd}

<indent>

`<red: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

`<green: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

`<blue: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

`<alpha: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The alpha component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

</indent>

Option: `set color rgba decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]> <alpha: float[min=0.0,max=255.0]>`{lang=andexdbcmd}

<indent>

`<red: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

`<green: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

`<blue: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

`<alpha: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The alpha component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

</indent>

Option: `set color rgb hex <hexRGBAColor: RRGGBB|RGB>`{lang=andexdbcmd}

<indent>

`<hexRGBAColor: RRGGBB|RGB>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The hex color to set the liquid to.

ex. `FE932B` or `F92`

</indent>

</indent>

Option: `set color rgb frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]>`{lang=andexdbcmd}

<indent>

`<red: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

`<green: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

`<blue: float[min=0.0,max=1.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 1.

ex. `0.5`

</indent>

</indent>

Option: `set color rgb dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]>`{lang=andexdbcmd}

<indent>

`<red: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

`<green: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

`<blue: int[min=0,max=255]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127`

</indent>

</indent>

Option: `set color rgb decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]>`{lang=andexdbcmd}

<indent>

`<red: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The red component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

`<green: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The green component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

`<blue: float[min=0.0,max=255.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The blue component of the color to set the liquid to.

Must be between 0 and 255.

ex. `127.5`

</indent>

</indent>

Option: `set color hsl <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <lightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}

<indent>

`<hue: float[min=0.0,max=360.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The hue of the color to set the liquid to.

Must be between 0 and 360.

ex. `180`

</indent>

`<saturation: float[min=0.0,max=100.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The saturation of the color to set the liquid to.

Must be between 0 and 100.

ex. `50`

</indent>

`<lightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The lightness of the color to set the liquid to.

Must be between 0 and 100.

ex. `50`

</indent>

</indent>

Option: `set color hsv <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <value: float[min=0.0,max=100.0]>`{lang=andexdbcmd} or `set color hsb <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <brightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}

<template-Planned section="syntax option" />

<indent>

`<hue: float[min=0.0,max=360.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The hue of the HSV/HSB (hue, saturation, value/brightness) color to set the liquid to.

Must be between 0 and 360.

ex. `180`

</indent>

`<saturation: float[min=0.0,max=100.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The saturation of the HSV/HSB (hue, saturation, value/brightness) color to set the liquid to.

Must be between 0 and 100.

ex. `50`

</indent>

`<value: float[min=0.0,max=100.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float) or `<brightness: float[min=0.0,max=100.0]>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The value/brightness of the HSV/HSB (hue, saturation, value/brightness) color to set the liquid to.

Must be between 0 and 100.

ex. `50`

</indent>

</indent>

Option: `set color bin <red: binary> <green: binary> <blue: binary>`{lang=andexdbcmd}

<template-Planned section="syntax option" />

<indent>

`<red: binary>`{lang=andexdbcmd}: [binary](../commands/parameter-types#binary)

<indent>

The red component of the color to set the liquid to.

Must be a binary number between 0 and 11111111 (0 and 255 in decimal).

ex. `10110101` (181 in decimal)

</indent>

`<green: binary>`{lang=andexdbcmd}: [binary](../commands/parameter-types#binary)

<indent>

The green component of the color to set the liquid to.

Must be a binary number between 0 and 11111111 (0 and 255 in decimal).

ex. `10110101` (181 in decimal)

</indent>

`<blue: binary>`{lang=andexdbcmd}: [binary](../commands/parameter-types#binary)

<indent>

The blue component of the color to set the liquid to.

Must be a binary number between 0 and 11111111 (0 and 255 in decimal).

ex. `10110101` (181 in decimal)

</indent>

</indent>

<!-- Arguments End -->

</indent>

<!-- set color Subcommand End -->

</indent>

#### set filllevel

<indent>

Sets the fill level of the liquid in the block to the specified value.

**Syntax**

<indent>

`set filllevel <fillLevel: int[min=0,max=6]>`{lang=andexdbcmd}

</indent>

**Arguments**

<indent>

`<fillLevel: int[min=0,max=6]>`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The fill level of the liquid in the block to set.

Must be between 0 (empty) and 6 (full).

ex. `3`

</indent>

</indent>

</indent>

#### debug

<template-Planned section="section" />

<indent>

Displays debug information about the block.

</indent>

### Examples

-   Set the color of the water in the cauldron you are looking at to #87CEEB:

<indent>

`\block facing set color rgba hex 87CEEBFF`{lang=mccmd}

</indent>

-   Refill the liquid in the cauldron you are looking at:

<indent>

`\block facing set filllevel 6`{lang=mccmd}

</indent>

## Result

<table class="wikitable" data-description="command results">
    <tbody>
        <tr>
            <th>Command</th>
            <th>Trigger</th>
            <th>Result</th>
        </tr>
        <tr>
            <td align="center" rowspan="1">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">

Any

</td>
            <td>
                You specified `block`, `^`, or `~` for the block parameter, and you are not facing a block.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">Any</td><td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

## History

<table class="wikitable pixel-image bgType2" data-description="History">
    <tbody>
        <tr class="collapsible collapsible-rows">
            <th colspan="8" style="border-bottom: none">
                <!-- <a href="/w/Pocket_Edition_Alpha" title="Pocket Edition Alpha"> -->
                    Debug Sticks
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <a href="/changelogs/v1.24.0" title="Debug Sticks v1.24.0">
                    v1.24.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.24.0"
                    title="Debug Sticks v1.24.0"
                >
                    release
                </a>
            </th>
            <td>

Added `\block`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
