---
title: \\remove
page_title: \\remove
description: The \\remove command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
    - 8Crafter
---

Remove the blocks in the selected area.

<CommandDetailsTable
    name="\\remove"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="1.0.0"
    :undoSupported="1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\remove [-cf]`{lang=andexdbcmd}

<indent>Fills selection with air</indent>

## Arguments

`[-cf]`{lang=andexdbcmd}: [flags](../commands/commands-parameters-basics#flags-parameters)

<indent>

A flags parameter.

Here are what each of the flags do:

`c`: Clears the contents of the containers in the selected area before removing them. This prevents the contents of the containers from being dropped as items.

`f`: Makes the command run in fast mode. Fast mode causes the command to run all in one tick and using [`BlockVolumeBase.prototype.getBlockLocationIterator()`{lang=ts}](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockvolumebase?view=minecraft-bedrock-experimental#getblocklocationiterator) to get all the non-air blocks in the selected area. Note: This flag will cause the command to freeze the world/realm/server until it finishes executing or triggers a script hang error

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
            <td align="center" rowspan="3">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td>
                The `f` flag was specified, but the command did not finish before a script hang occured (by default a script hang occurs after 10 seconds).
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
                    Debug Sticks
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <!-- <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="1">
                <!-- <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <td>

Added `\\remove`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="1">
                <!-- <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="1">
                <!-- <a href="/changelogs/v1.28.0" title="Debug Sticks v1.28.0"> -->
                    ?
                <!-- </a> -->
            </th>
            <td>

Added the `c` flag to the `\\remove`{lang=acmd} command. This flag cuases the command to clear container blocks before removing them, this prevents the contents of the containers from being dropped as items.

</td>
        </tr>
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
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/83e3cd7265503a89e24987d366ef383c60151c5c"
                    title="Debug Sticks v1.35.0-preview.20+BULID.3 (Commit 83e3cd7265503a89e24987d366ef383c60151c5c)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

Added the `f` flag to the `\\remove`{lang=acmd} command. This flag causes the command to execute in fast mode, fast mode causes the command to run all in one tick and using [`BlockVolumeBase.prototype.getBlockLocationIterator()`{lang=ts}](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockvolumebase?view=minecraft-bedrock-experimental#getblocklocationiterator) to get all the non-air blocks in the selected area. Note: This flag will cause the command to freeze the world/realm/server until it finishes executing or triggers a script hang error.

</td>
        </tr>
    </tbody>
</table>
