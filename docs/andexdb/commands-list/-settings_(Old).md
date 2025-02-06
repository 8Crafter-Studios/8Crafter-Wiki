---
title: \settings (Old)
page_title: \settings (Old)
description: The old removed \settings command.
show_outline: false
category: Removed
mentions:
    - Andexter8
---

<template-OutdatedFeature />

Sets and gets world dynamic properties.

<CommandDetailsTable
    name="\settings"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="N/A"
    version="1.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="true"
/>

## Syntax

`\settings <setting: string> [value: string|int|boolean]`{lang=andexdbcmd}

<indent>

Sets or gets the value of the specified world dynamic property.

</indent>

## Result

<template-EmptySection />

## History

<table class="wikitable pixel-image bgType2" data-description="History">
    <tbody>
        <tr class="collapsible collapsible-rows">
            <th colspan="8" style="border-bottom: none">
                <!-- <a href="/w/Java_Edition_version_history" title="Java Edition version history"> -->
                    Summon Anything Lite
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="3">
                <!-- <a href="/w/Java_Edition_1.8" title="Java Edition 1.8"> -->
                    v1.8.0
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="1">
                <!-- <a href="/w/Java_Edition_14w03a" title="Java Edition 14w03a"> -->
                    v1.8.0-beta
                <!-- </a> -->
            </th>
            <td>

Added `\settings`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible collapsible-rows">
            <th colspan="8" style="border-bottom: none">
                <!-- <a href="/w/Pocket_Edition_Alpha" title="Pocket Edition Alpha"> -->
                    Debug Sticks
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="3">
                <a href="/changelogs/v1.3.0" title="Debug Sticks v1.3.0">
                    v1.3.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a href="/changelogs/v1.3.0" title="Debug Sticks v1.3.0">
                    release
                </a>
            </th>
            <td>

Removed `\settings`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
