---
title: Enchanting Any Item With Any Enchantment
nav_order: 1
description: How to add any level of any enchantment to any vanilla item using the add-on.
mentions:
    - Andexter8
---

<template-MoreImages />

## How to get enchantments with higher levels than are normally possible

1.  Make sure that you have the canUseChatCommands tag.
2.  Run the command `/structure load andexdb:-2-294_steb`{lang=mcfunction} or `\eb 0`{lang=acmd} for enchantment levels -2 through 294. Run the command `/structure load andexdb:-32k_steb` or `\eb -32768` for enchantment levels -32768 and 32767.
3.  Look through the barrels to find the levels of enchantments you want.
4.  Run the command `\roie` followed by a list of the enchantments that you want to keep that are currently on the book that you are holding. For example: `\roie ["sharpness", "fire_aspect"]`.
5.  Repeat steps 2-3 for each of the different levels of enchantments that you want.
6.  Merge the books together in an anvil.

## How do I enchant any item with any enchantment?

1.  Pick the item you want.
2.  Make sure that you have the canUseChatCommands tag.
3.  Run the command `\gettransformst <item>`{lang=acmd} (Replace `<item>`{lang=acmd} with the namespaced id of the item you want to put the enchantments on. For example: `\gettransformst netherreactor`). You will get an enchantment transfer smithing template.
4.  Get a "Smithing Table Enchanted Book" and add the enchantments you want on it, to see how to get higher levels of enchantments than normally possible, go the "How to get enchantments with higher levels than are normally possible" section.
5.  Place a smithing table.
6.  Put a netherite ingot, the smithing table enchanted book, and the enchantment transfer smithing template into the smithing table. The result is your enchanted item.
