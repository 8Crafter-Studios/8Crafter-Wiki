---
title: \tpa
page_title: \tpa
description: The \tpa command.
show_outline: false
category: Main
mentions:
    - Andexter8
---

Sends a teleport request for the [TPA system](../systems/tpa).

<CommandDetailsTable
    name="\tpa"
    :categories="[
        'players',
        'warps'
    ]"
    :requiredTags="[]"
    ultraSecurityModeSecurityLevel="everyone"
    version="2.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\tpa <player: target[allowMultiple=false,playersOnly=true]>`{lang=andexdbcmd}

<indent>Sends a teleport request to the specified player.</indent>

## Arguments

`<player: target[allowMultiple=false,playersOnly=true]>`{lang=andexdbcmd}: [target](../commands/parameter-types#target)

<indent>

Specifies the player to send the TPA request to.

Must be a player name or a [target selector](https://minecraft.wiki/w/Target_selector). The target selector should be of [player type](https://minecraft.wiki/w/Target_selectors#Player_type_and_single_type).

</indent>

## Result

<table class="wikitable" data-description="command results">
    <tbody>
        <tr>
            <th>Command</th>
            <th>Trigger</th>
            <th>Result</th>
        </tr>
        <tr>
            <td align="center" rowspan="6">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td>
                No player matched the specified target selector.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                The executor of the command is on PVP cooldown.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                The executor of the command is on teleport cooldown.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                The executor of the command has already sent a TPA request to the target, and that TPA request is still valid.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

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
                <!-- <a href="/changelogs/v1.?.0" title="Debug Sticks v1.?.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="1">
                <!-- <a
                    href="/changelogs/v1.?.0"
                    title="Debug Sticks v1.?.0"
                > -->
                    ?
                <!-- </a> -->
            </th>
            <td>

Added [`\rtp`{lang=acmd}](../commands-list/-rtp_(Old)).

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <!-- <a href="/changelogs/v1.?.0" title="Debug Sticks v1.?.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="1">
                <!-- <a
                    href="/changelogs/v1.?.0"
                    title="Debug Sticks v1.?.0"
                > -->
                    ?
                <!-- </a> -->
            </th>
            <td>

Renamed [`\rtp`{lang=acmd}](../commands-list/-rtp_(Old)) to `\tpa`{lang=acmd}.

</td>
        </tr>
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
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/09cce16a7ea6fb605dcd0c6543bdc98ab7cf9e0c"
                    title="Debug Sticks v1.35.0-preview.20+BULID.2 (Commit 09cce16a7ea6fb605dcd0c6543bdc98ab7cf9e0c)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

The `\tpa`{lang=acmd} command now uses the new [TPA system](../systems/tpa).

</td>
        </tr>
    </tbody>
</table>
