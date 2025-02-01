---
title: \\generatecallback
page_title: \\generatecallback
description: The \\generatecallback command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
    - Andexter8
tags:
    - command_nonfunctional
---

Executes the specified callback JavaScript function for each block in the selected area.

<CommandDetailsTable
    name="\\generatecallback"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="0.0.0"
    :undoSupported="-2"
    :functional="false"
    :deprecated="false"
/>

## Syntax

`\\generatecallback <blockPattern: BlockPattern> <callback: (dimensionLocation, worldX, worldY, worldZ, relativeX, relativeY, relativeZ, pos1X, pos1Y, pos1Z, pos2X, pos2Y, pos2Z, negativeCornerX, negativeCornerY, negativeCornerZ, positiveCornerX, positiveCornerY, positiveCornerZ)=>any>`{lang=andexdbcmd}

<indent>Checks generated shape</indent>

## Result

## History
