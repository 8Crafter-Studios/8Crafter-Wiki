---
title: \\loadchunks
page_title: \\loadchunks
description: The \\loadchunks command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - Andexter8
---

<template-InDevelopment version="v1.35.0" />

Loads the chunks in the selected area by spawning [`andexdb:tickingarea_6`{lang=mccmd}](../entities/tickingarea_6), may also load surrounding chunks.

<CommandDetailsTable
    name="\\loadchunks"
    :aliases="[
        '\\\\lc'
    ]"
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

`\\loadchunks [-v]`{lang=andexdbcmd}

<indent>Loads the selected chunks</indent>

## Arguments

`[-v]`{lang=andexdbcmd}: [flags](../commands/commands-parameters-basics#flags-parameters)

<indent>

`-v`

<indent>Makes the spawned tickingareas visible.</indent>

</indent>

## Result

Always succeeds.

## History

<table class="wikitable pixel-image bgType2" data-description="History">
    <tbody>
        <tr class="collapsible collapsible-rows">
            <th colspan="8" style="border-bottom: none">
                <!-- <a href="/w/Pocket_Edition_Alpha" title="Pocket Edition Alpha"> -->
                    Upcoming Debug Sticks
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <a href="/changelogs/v1.35.0" title="Debug Sticks v1.35.0">
                    v1.35.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.35.0"
                    title="Debug Sticks v1.35.0"
                >
                    release
                </a>
            </th>
            <td>

Added `\\loadchunks`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
