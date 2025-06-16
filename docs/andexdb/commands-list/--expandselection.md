---
title: \\expandselection
page_title: \\expandselection
description: The \\expandselection command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - Andexter8
---

<template-InDevelopment version="v1.35.0" />

Generates terrain in the selected area.

<CommandDetailsTable
    name="\\expandselection"
    :aliases="[
        '\\exsel',
        '\\es'
    ]"
    :categories="[
        'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="1.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\expandselection <mode: {up}|{down}|{north}|{south}|{east}|{west}|{scale}|{scalex}|{scaley}|{scalez}> <amount: float>`{lang=andexdbcmd}

<indent>Generate terrain.</indent>

## Arguments

`<mode: {up}|{down}|{north}|{south}|{east}|{west}|{scale}|{scalex}|{scaley}|{scalez}>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The mode to use to expand or shrink the selection.

Modes:

-   `up` - Move the top of the selection.
-   `down` - Move the bottom of the selection.
-   `north` - Move the north side of the selection.
-   `south` - Move the south side of the selection.
-   `east` - Move the east side of the selection.
-   `west` - Move the west side of the selection.
-   `scale` - Scale the selection. This will multiply the distance between pos1 and pos2 from the center of the selection by the specified amount.
-   `scalex` - Scale the X axis of the selection. This will multiply the distance between the x values of pos1 and pos2 from the x value of the center of the selection by the specified amount.
-   `scaley` - Scale the Y axis of the selection. This will multiply the distance between the y values of pos1 and pos2 from the y value of the center of the selection by the specified amount.
-   `scalez` - Scale the Z axis of the selection. This will multiply the distance between the z values of pos1 and pos2 from the z value of the center of the selection by the specified amount.

Negative amounts will shrink the selection. Positive amounts will expand the selection.

</indent>

`<amount: float>`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The amount to expand or shrink the selection by.

If a `scale` mode is used, this is the multiplier.

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
            <td align="center" rowspan="2">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td align="center" class="tc-yes">Otherwise</td>
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
                    Upcoming Server Utilities
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <a href="/changelogs/v1.35.0" title="Server Utilities v1.35.0">
                    v1.35.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.35.0-rc.1"
                    title="Server Utilities v1.35.0-RC.1"
                >
                    RC1
                </a>
                <a
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/83e3cd7265503a89e24987d366ef383c60151c5c"
                    title="Debug Sticks v1.35.0-preview.20+BULID.3 (Commit 83e3cd7265503a89e24987d366ef383c60151c5c)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

Added `\\expandselection`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
