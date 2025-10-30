---
title: \bluemodsversion
page_title: \bluemodsversion
description: The \bluemodsversion command.
show_outline: false
category: Main
nav_order: 3
mentions:
    - stormstqr
---

Displays the current version of [BlueMods Anticheat](/../main/add-ons/bluemods-anticheat) that is on the world/realm/server. Also displays if multiple versions of BlueMods Anticheat are active.

<CommandDetailsTable
    name="\bluemodsversion"
    :aliases="[
        '\\bmver'
    ]"
    :categories="[
        'world', 'system', 'players'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="admin"
    version="1.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\bluemodsversion`{lang=andexdbcmd}

<indent>
    Displays the current version of BlueMods Anticheat that is on the world/realm/server. Also
    displays if multiple versions of BlueMods Anticheat are active.
</indent>

## Result

Always succeeds.

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
            <th class="nowrap" rowspan="1" colspan="1">
                <a href="/changelogs/v1.30.0" title="Debug Sticks v1.30.0">
                    v1.30.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.30.0"
                    title="Debug Sticks v1.30.0"
                >
                    release
                </a>
            </th>
            <td>

Added `\bluemodsversion`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
