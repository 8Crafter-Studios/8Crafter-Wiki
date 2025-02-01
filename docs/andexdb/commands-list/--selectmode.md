---
title: \\selectmode
page_title: \\selectmode
description: The \\selectmode command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
    - Andexter8
---

Sets the selection mode for the item you are holding, this is used to pick where to set pos1/pos2 to if the held item is a selection tool, or if the \\brush command was used to make the held item into a custom brush then it will be used to determine what block the brush will target.

<CommandDetailsTable
    name="\\selectmode"
    :categories="[
        'system', 'world', 'server', 'worldedit'
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

`\\selectmode [default|noliquid|nopassable|noliquidnopassable]`{lang=andexdbcmd}

<indent>Sets the selection to your mainhand</indent>

## Result

## History
