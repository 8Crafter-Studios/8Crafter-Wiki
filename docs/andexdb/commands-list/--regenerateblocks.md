---
title: \\regenerateblocks
page_title: \\regenerateblocks
description: The \\regenerateblocks command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
    - Andexter8
---

Regenerates blocks in the selected area based on the surrounding blocks.

<CommandDetailsTable
    name="\\regenerateblocks"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="2.0.0"
    :undoSupported="1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\regenerateblocks [-isabd] [radiusAroundAreaToUseToDetermineGeneratedBlockType: float[?=5]] [verticalDistancePriority: float[?=1.5]] [horizontalDistancePriority: float[?=1.2]] [randomization: float[?=0.2]] [airPriority: float[?=0.5]]`{lang=andexdbcmd}

<indent>Repair selection based on prediction from the surrounding blocks.</indent>

## Arguments

`[-isabd]`{lang=andexdbcmd}: [flags](../commands/parameter-types#flags)

<indent>

A flags parameter.

Here are what each of the flags do:

i: Makes it so the command does not ignore air blocks when looking at the surrounding blocks to determine what type of block to generate.

s: Allows the command to replace non-air blocks.

a: Causes surrounding air blocks that are in the section that has yet to be generated to not affect the type of blocks generated.

b: Causes all surrounding blocks that are in the section that has yet to be generated to not affect the type of blocks generated.

d: Stops the command from prioritizing surrounding blocks that are closer to the block being generated when determining what type of block to generate.

</indent>

`[radiusAroundAreaToUseToDetermineGeneratedBlockType: float[?=5]]`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The area around each block that the command should look at the blocks to determine what type of block to generate.

</indent>

`[verticalDistancePriority: float[?=1.5]]`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The amount that will be multiplied by the vertical distance between the blocks to determine the amount to divide the weight of the block by.

Setting it to 0 will disable vertical distance priority.

Only aplies when the `-d` flag is NOT included.

Defaults to 1.5.

</indent>

`[horizontalDistancePriority: float[?=1.2]]`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The amount that will be multiplied by the horizontal distance between the blocks to determine the amount to divide the weight of the block by.

Setting it to 0 will disable horizontal distance priority.

Only aplies when the `-d` flag is NOT included.

Defaults to 1.2.

</indent>

`[randomization: float[?=0.2]]`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The maximum amount by which to multiply or divide weights of the surrounding block permutations to randomize the generated block slightly.

It will add 1 to the randomization amount before calculating, so 0.2 would result in the weights being multiplied or divided by between 1 and 1.2.

Defaults to 0.2.

</indent>

`[airPriority: float[?=0.5]]`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The amount to multiply by the weight of air.

Only applies when the `-i` flag is included.

Defaults to 0.5.

</indent>

## Result

<template-EmptySection />

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
            <th class="nowrap" rowspan="1" colspan="3">
                <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0">
                    v1.28.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0">
                    release
                </a>
            </th>
            <td>

Added `\\regenerateblocks`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="3">
                <a href="/changelogs/v1.31.0" title="Debug Sticks v1.31.0">
                    v1.31.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a href="/changelogs/v1.31.0-preview.20+BUILD.1" title="Debug Sticks v1.31.0-preview.20+BUILD.1">
                    v1.31.0-preview.20+BUILD.1
                </a>
            </th>
            <td>

Changed the syntax of the command from `\\regenerateblocks [radiusAroundAreaToUseToDetermineGeneratedBlockType: float[?=5]]`{lang=acmd} to `\\regenerateblocks [-isabd] [radiusAroundAreaToUseToDetermineGeneratedBlockType: float[?=5]] [verticalDistancePriority: float[?=1.5]] [horizontalDistancePriority: float[?=1.2]] [randomization: float[?=0.2]] [airPriority: float[?=0.5]]`{lang=andexdbcmd}.

</td>
        </tr>
    </tbody>
</table>
