---
title: Invalid Block Placeholder
nav_order: 1
description: The invalid block placeholder block.
show_outline: false
mentions:
    - Andexter8
---

<template-InDevelopment version="v1.35.0" />

This block is a debug block.

<BlockDetailsTable
    name="Invalid Block Placeholder"
    :blockID="[
        'andexdb:invalid_block_placeholder',
        'andexdb:invalid_block_placeholder_no_occlusion_no_dimming',
        'andexdb:invalid_block_placeholder_lit'
    ]"
    rarity="Common"
    renewable="No"
    stackable="Yes (64)"
    blastResistance="-1"
    hardness="-1"
    :luminous="`Yes, when lit\\
Lit: 1\\
No Occlusion, No Dimming: 0\\
Normal: 0`"
    transparent="No"
    waterloggable="No"
    flammable="No"
    catchesFireFromLava="No"
    mapColor="#FF00FF"
    :invslotItems="[
        {
            minetip: 'Invalid Block Placeholder',
            image: '/andexdb/assets/images/blocks/invalid_block_placeholder.png',
            altText: 'invalid_block_placeholder.png',
        },
        {
            minetip: 'Invalid Block Placeholder (no occlusion, no dimming)',
            image: '/andexdb/assets/images/blocks/invalid_block_placeholder_lit.png',
            altText: 'invalid_block_placeholder_lit.png',
        },
        {
            minetip: 'Invalid Block Placeholder (lit)',
            image: '/andexdb/assets/images/blocks/invalid_block_placeholder_lit.png',
            altText: 'invalid_block_placeholder_lit.png',
        },
    ]"
    :tabberItems="[
        {
            tabberTitle: 'Normal',
            images: [
                {
                    image: '/andexdb/assets/images/blocks/invalid_block_placeholder.png',
                    altText: 'invalid_block_placeholder.png',
                },
            ],
        },
        {
            tabberTitle: 'No Occlusion, No Dimming',
            images: [
                {
                    image: '/andexdb/assets/images/blocks/invalid_block_placeholder_lit.png',
                    altText: 'invalid_block_placeholder_lit.png',
                },
            ],
        },
        {
            tabberTitle: 'Lit',
            images: [
                {
                    image: '/andexdb/assets/images/blocks/invalid_block_placeholder_lit.png',
                    altText: 'invalid_block_placeholder_lit.png',
                }
            ]
        }
    ]"
    tabberEnabled="true"
/>

## Obtaining

Invalid block placeholders cannot be obtained in the creative mode inventory and are only obtainable via commands such as [`/give`{lang=mccmd}](https://minecraft.wiki/w/Commands/give), [`/replaceitem`{lang=mccmd}](https://minecraft.wiki/w/Commands/replaceitem), and [`\giveb`{lang=andexdbcmd}](../commands-list/-giveb) and cannot be broken in Survival mode.Natural generation

### Natural generation

In normal worlds, invalid block placeholders do not generate naturally.

### Post-generation

It will generate if when using the [`\\generateterrain`{lang=andexdbcmd}](../commands-list/--generateterrain) command, the specified biome type has not had its block type data added to the getBlockTypeV2 function (which is the case for many biomes currently).

## Usage

The block is used to indicate that an issue has occurred during terrain generation when using the [`\\generateterrain`{lang=andexdbcmd}](../commands-list/--generateterrain) command.

It can also be used as an indestructable decoration block.

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
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/4da7a07768d1f5a67ff18415417e7817ab75b699"
                    title="Debug Sticks v1.35.0-preview.20+BULID.4 (Commit 4da7a07768d1f5a67ff18415417e7817ab75b699)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

Added invalid block placeholders.

</td>
        </tr>
    </tbody>
</table>

<template>

###### Normal

###### No_Occlusion%2C_No_Dimming

###### Lit

</template>
