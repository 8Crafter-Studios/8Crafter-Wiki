---
title: Enchanting Any Item With Any Enchantment
nav_order: 1
description: How to add any level of any enchantment to any vanilla item using the add-on.
mentions:
    - 8Crafter
---

<template-MoreImages />

## How to get enchantments with higher levels than are normally possible

1.  Make sure that you have the required permissions. See the [Getting the required permissions](#getting-the-required-permissions) section.
2.  Run the command `/structure load andexdb:-2-294_steb`{lang=mccmd} or `\eb 0`{lang=mccmd} for enchantment levels -2 through 294. Run the command `/structure load andexdb:-32k_steb`{lang=mccmd} or `\eb -32768`{lang=mccmd} for enchantment levels -32768 and 32767.
3.  Look through the barrels to find the levels of enchantments you want.
4.  Run the command [`\roie`{lang=acmd}](../commands-list/-removeotheritemenchantments) followed by a list of the enchantments that you want to keep that are currently on the book that you are holding. For example: `\roie ["sharpness", "fire_aspect"]`{lang=mccmd}.
5.  Repeat steps 2-3 for each of the different levels of enchantments that you want.
6.  Merge the books together in an anvil.

## How do I enchant any item with any enchantment?

1.  Pick the item you want.
2.  Make sure that you have the required permissions. See the [Getting the required permissions](#getting-the-required-permissions) section.
3.  Run the command [`\gettransformst <item>`{lang=acmd}](../commands-list/-gettransformsmithingtemplate) (Replace `<item>`{lang=acmd} with the namespaced id of the item you want to put the enchantments on. For example: `\gettransformst netherreactor`{lang=mccmd}). You will get an enchantment transfer smithing template.
4.  Get a [Smithing Table Enchanted Book](../items/smithing-table-enchanted-book) and add the enchantments you want on it, to see how to get higher levels of enchantments than normally possible, go the "How to get enchantments with higher levels than are normally possible" section.
5.  Place a [smithing table](https://minecraft.wiki/w/Smithing_Table).
6.  Put a [netherite ingot](https://minecraft.wiki/w/Netherite_Ingot), the [smithing table enchanted book](../items/smithing-table-enchanted-book), and the [enchantment transfer smithing template](../items/enchantment-transfer-smithing-template) into the [smithing table](https://minecraft.wiki/w/Smithing_Table). The result is your enchanted item.

## Getting the required permissions

**If [Ultra Security Mode](../usm/ultra-security-mode) is disabled (default), you will need the `canUseChatCommands` tag.**

To get the `canUseChatCommands` tag, just run the following command: ` `{lang=mccmd noRightCodeBlock=true}[`/tag`{lang=mccmd noLeftCodeBlock=true noRightCodeBlock=true}](https://minecraft.wiki/w/Commands/tag)` @s add canUseChatCommands`{lang=mccmd noLeftCodeBlock=true}.

**If [Ultra Security Mode](../usm/ultra-security-mode) is enabled, you will need the `andexdb.canUseAdminLevelCommands` permission.**

More info on how to get permissions in [Ultra Security Mode](../usm/ultra-security-mode) can be found [here](../usm/giving-players-permissions).
