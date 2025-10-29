---
title: \tpaccept
page_title: \tpaccept
description: The \tpaccept command.
show_outline: false
category: Main
mentions:
    - 8Crafter
---

Accepts teleport requests for the [TPA system](../systems/tpa).

<CommandDetailsTable
    name="\tpaccept"
    :categories="[
        'players',
        'warps'
    ]"
    :requiredTags="[]"
    ultraSecurityModeSecurityLevel="everyone"
    version="1.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\tpaccept <player: target[allowMultiple=true,playersOnly=true]>`{lang=andexdbcmd}

<indent>Accepts the TPA requests from the specified players.</indent>

## Arguments

`<player: target[allowMultiple=true,playersOnly=true]>`{lang=andexdbcmd}: [target](../commands/parameter-types#target)

<indent>

Specifies the player(s) to accept the TPA requests from.

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
                No players matched the specified target selector.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                You have no pending TPA requests from any of the players that matched the specified target selector.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                All of the TPA requests were unable to be accepted.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td>
                Some but not all of the TPA requests were unable to be accepted.
            </td>
            <td align="center" rowspan="1" class="tc-partial"> Partial</td>
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
                    Server Utilities
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

Added `\tpaccept`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
