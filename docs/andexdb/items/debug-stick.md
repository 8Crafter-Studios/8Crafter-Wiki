---
title: Debug Stick
nav_order: 1
description: The debug stick item.
show_outline: false
category: Debug Sticks
mentions:
    - 8Crafter
---

<template-Stub />

<ItemDetailsTable
    name="Debug Stick"
    image="https://minecraft.wiki/images/Debug_Stick.gif?c7249"
    altText="Debug Stick.gif"
    :itemID="[
        'andexdb:debug_stick',
        'andexdb:liquid_clipped_debug_stick',
    ]"
    rarity="Epic"
    renewable="No"
    stackable="Yes (64)"
    dyeable="Yes"
    :invslotItems="[
        {
            minetip: '§dDebug Stick',
            image: 'https://minecraft.wiki/images/Debug_Stick.gif?c7249',
            altText: 'Debug Stick.gif',
        },
        {
            minetip: '§dLiquid Clipped Debug Stick',
            image: 'https://minecraft.wiki/images/Debug_Stick.gif?c7249',
            altText: 'Debug Stick.gif',
        },
    ]"
/>

The debug stick works identical to its Java Edition counterpart.

## Obtaining

You can obtain the debug stick by using the [`/give`{lang=mccmd}](https://minecraft.wiki/w/Commands/give) command, or from the creative inventory.

Command: `/give @s andexdb:debug_stick`{lang=mccmd}

In the creative inventory in can be found by going to the `Items` tab and scrolling down until you find the `Debug Sticks` item group, then you expand that item group and the debug stick will be in there.

## Usage

You use it to go to the next possible value of the selected block state, and sneak while using it to go to the previous value of the selected block state.

You hit the block with the debug stick to select the next block state type, and sneak while hitting the block to select the previous block state type.

You can see a demonstration of this in the [trailer video](https://www.youtube.com/watch?v=bszs_vo-1Lc).

The liquid clipped version allows you to also target liquid blocks.

## History

<template-EmptySection />
