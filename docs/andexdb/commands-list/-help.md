---
title: \help
page_title: \help
description: The \help command.
show_outline: false
category: Main
mentions:
    - Andexter8
---

Provides help.

<CommandDetailsTable
    name="\help"
    :categories="[
        'misc'
    ]"
    :requiredTags="[]"
    ultraSecurityModeSecurityLevel="everyone"
    version="33.5.2"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\help`{lang=andexdbcmd}

<indent>Displays all the syntaxes of the `\help` command.</indent>

`\help scriptevent`{lang=andexdbcmd}

<indent>Displays help info for some of the `/scriptevent` commands.</indent>

`\help cmd <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command.</indent>

`\help command <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command.</indent>

`\help cmdextra <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with extra information.</indent>

`\help commandextra <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with extra information.</indent>

`\help cmddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug information.</indent>

`\help commanddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug information.</indent>

`\help cmddebugplus <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug and extra information.</indent>

`\help commanddebugplus <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug and extra information.</indent>

`\help customcmddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one custom command.</indent>

`\help customcommanddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one custom command.</indent>

`\help chatcommands`{lang=andexdbcmd}

<indent>Lists all commands.</indent>

`\help chatcommandsb`{lang=andexdbcmd}

<indent>
    DEPRECATED! Lists syntaxes for the commands in the add-on (This sub-command is no longer updated
    so it is very outdated).
</indent>

`\help javascriptfunctions`{lang=andexdbcmd}

<indent>
    DEPRECATED! Lists all available javascript functions, constants, variables, and classes (This
    sub-command is no longer updated so it is very outdated).
</indent>

`\help js <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

<indent>
    Gets the source code of a specific javascript function, constant, variable, or class.
</indent>

`\help jsfunction <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

<indent>
    Gets the source code of a specific javascript function, constant, variable, or class.
</indent>

`\help itemjsonformat`{lang=andexdbcmd}

<indent>

Displays the documentation on the item json format, this is used with things like the [`\givec`{lang=andexdbcmd}](./-givec) command.

</indent>

`\help itemjsonformatcmpr`{lang=andexdbcmd}

<indent>

Displays the documentation on the item json format, in a more compressed format, this is used with things like the [`\givec`{lang=andexdbcmd}](./-givec) command.

</indent>

`\help itemjsonformatsimplified`{lang=andexdbcmd}

<indent>

Displays the simplified documentation on the item json format, this is used with things like the [`\givec`{lang=andexdbcmd}](./-givec) command.

</indent>

## Arguments

`<command: CommandName>`{lang=andexdbcmd}: [CommandName](../commands/parameter-types#CommandName)

<indent>

The name of a command, if the command normally uses one backslash then you can type it with or without the backslash (ex. `help` or `\help`) but if the command normally uses two backslashes then you must type it with both backslashes (ex. `\\undo`).

</indent>

`<JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

<template-EmptySection />

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
            <td align="center" rowspan="1">

`\help cmd <command: CommandName>`{lang=andexdbcmd}

`\help command <command: CommandName>`{lang=andexdbcmd}

`\help cmdextra <command: CommandName>`{lang=andexdbcmd}

`\help commandextra <command: CommandName>`{lang=andexdbcmd}

`\help cmddebug <command: CommandName>`{lang=andexdbcmd}

`\help commanddebug <command: CommandName>`{lang=andexdbcmd}

`\help cmddebugplus <command: CommandName>`{lang=andexdbcmd}

`\help commanddebugplus <command: CommandName>`{lang=andexdbcmd}

`\help customcmddebug <command: CommandName>`{lang=andexdbcmd}

`\help customcommanddebug <command: CommandName>`{lang=andexdbcmd}

`\help js <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

`\help jsfunction <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">

`\help cmd <command: CommandName>`{lang=andexdbcmd}

`\help command <command: CommandName>`{lang=andexdbcmd}

`\help cmdextra <command: CommandName>`{lang=andexdbcmd}

`\help commandextra <command: CommandName>`{lang=andexdbcmd}

`\help cmddebug <command: CommandName>`{lang=andexdbcmd}

`\help commanddebug <command: CommandName>`{lang=andexdbcmd}

`\help cmddebugplus <command: CommandName>`{lang=andexdbcmd}

`\help commanddebugplus <command: CommandName>`{lang=andexdbcmd}

`\help customcmddebug <command: CommandName>`{lang=andexdbcmd}

`\help customcommanddebug <command: CommandName>`{lang=andexdbcmd}

</td>
            <td>
                <code>&lt;command&gt;</code> is invalid.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">Any</td><td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

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

Added `\help`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible collapsible-rows">
            <th colspan="8" style="border-bottom: none">
                <!-- <a href="/w/Planned_versions#Java_Edition" title="Planned versions"> -->
                    Debug Sticks Alpha
                <!-- </a> -->
            </th>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="2" colspan="3">
                <!-- <a href="/w/Java_Edition_1.21.5" title="Java Edition 1.21.5"> -->
                    v0.8.0
                <!-- </a> -->
            </th>
            <th colspan="4" rowspan="2">
                <!-- <a href="/w/Java_Edition_25w02a" title="Java Edition 25w02a"> -->
                    v0.8.0+BUILD.1
                <!-- </a> -->
            </th>
            <td>

The `\help`{lang=acmd} command now uses the currently set command prefix when displaying the command syntaxes.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following command syntaxes to the `\help chatcommands`{lang=acmd} sub-command:\
[`\binvsee <block: blockPos>`{lang=acmd}](./-binvsee)\
[`\einvsee <entityUUID: int>`{lang=acmd}](./-einvsee)\
[`\invseeuuidmode <playerUUID: int>`{lang=acmd}](./-invseeuuidmode)\
[`\eval <ScriptAPICode: JavaScript>`{lang=acmd}](./-eval)\
[`\top`{lang=acmd}](./-top)\
[`\up <count: int> [placeGlass: bool]`{lang=acmd}](./-up)\
[`\printlayers`{lang=acmd}](./-printlayers)\
[`\mainmenu`{lang=acmd}](./-mainmenu)

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
            <th class="nowrap" rowspan="3" colspan="3">
                <a href="/changelogs/v1.0.0" title="Debug Sticks v1.0.0">
                    v1.0.0
                </a>
            </th>
            <th colspan="4" rowspan="3">
                <a
                    href="/changelogs/v1.0.0"
                    title="Debug Sticks v1.0.0"
                >
                    release
                </a>
            </th>
            <td>

The syntax displayed when running the `\help`{lang=acmd} without any sub-commands now has the following syntaxes colored red because they are non-functional:\
`\help entityevents`{lang=acmd}\
`\help items`{lang=acmd}\
`\help tags`{lang=acmd}\
`\help debugsticks`{lang=acmd}

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Changed the command syntax for the [`\warpset`{lang=acmd}](./-warpset) command displayed by the `\help chatcommands`{lang=acmd} sub-command from `\warpset <dimension: dimension> <x: int> <y: int> <z: int> <name: escapableString>`{lang=acmd} to `\warpset <dimension: dimension> <x: float> <y: float> <z: float> <name: escapableString>`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following command syntaxes to the `\help chatcommands`{lang=acmd} sub-command:\
[`\h<presetId: float> <containerRow: float>`{lang=acmd}](./-h)\
[`\hset <presetId: float> [dimensionId: string] [x: float] [y: float] [z: float]`{lang=acmd}](./-hset)

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="2" colspan="3">
                <a href="/changelogs/v1.2.0" title="Debug Sticks v1.2.0">
                    v1.2.0
                </a>
            </th>
            <th colspan="4" rowspan="2">
                <a href="/changelogs/v1.2.0" title="Debug Sticks v1.2.0">
                    release
                </a>
            </th>
            <td>

The `\help`{lang=acmd} command's syntax error message now works properly with custom command prefixes.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following command syntaxes to the `\help chatcommands`{lang=acmd} sub-command:\
[`\offlineinfo <playerName: string>`{lang=acmd}](./-offlineinfo)\
[`\offlineuuidinfo <playerUUID: int>`{lang=acmd}](./-offlineuuidinfo)\
[`\offlineinvsee <playerName: string>`{lang=acmd}](./-offlineinvsee)\
[`\offlineuuidinvsee <playerUUID: int>`{lang=acmd}](./-offlineuuidinvsee)

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="2" colspan="3">
                <a href="/changelogs/v1.3.0" title="Debug Sticks v1.3.0">
                    v1.3.0
                </a>
            </th>
            <th colspan="4" rowspan="2">
                <a href="/changelogs/v1.3.0" title="Debug Sticks v1.3.0">
                    release
                </a>
            </th>
            <td>

Removed the following command syntax from the `\help chatcommands`{lang=acmd} sub-command because the command it corresponded to was removed: [`\settings <setting: string> [value: string|int|boolean]`{lang=acmd}](<./-settings_(Old)>)

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following command syntaxes to the `\help chatcommands`{lang=acmd} sub-command:\
[`\settings`{lang=acmd}](./-settings)\
[`\datapickblock`{lang=acmd}](./-datapickblock)

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="3" colspan="3">
                <a href="/changelogs/v1.6.0" title="Debug Sticks v1.6.0">
                    v1.6.0
                </a>
            </th>
            <th colspan="4" rowspan="3">
                <a
                    href="/changelogs/v1.6.0"
                    title="Debug Sticks v1.6.0"
                >
                    release
                </a>
            </th>
            <td>

Added the following sub-commands to the `\help`{lang=acmd} command:\
`\help javascriptfunctions`{lang=acmd}\
`\help jsfunction <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=acmd}

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

The `\help`{lang=acmd} command now works when a custom command prefix is set

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

The `\help`{lang=acmd} command's syntax error message now works properly with custom command prefixes.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="5" colspan="3">
                <a href="/changelogs/v1.11.0" title="Debug Sticks v1.11.0">
                    v1.11.0
                </a>
            </th>
            <th colspan="4" rowspan="5">
                <a
                    href="/changelogs/v1.11.0"
                    title="Debug Sticks v1.11.0"
                >
                    release
                </a>
            </th>
            <td>

Renamed the `\help chatcommands`{lang=acmd} sub-command to `\help chatcommandsb`{lang=acmd} and deprecated it.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Changed the following command syntaxes displayed by the `\help chatcommandsb`{lang=acmd} sub-command:\
`\binvsee <block: blockPos>`{lang=acmd} to `\binvsee <dimension: dimension|~> <block: x y z>`{lang=acmd}.\
`\einvsee <entityUUID: int>`{lang=acmd} to `\einvsee <targetSelector: targetSelector>`{lang=acmd}.\
`\invseeuuidmode <playerUUID: int>`{lang=acmd} to `\invseeuuidmode <entityUUID: int>`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following command syntaxes to the `\help chatcommandsb`{lang=acmd} sub-command:\
[`\givec <itemJSON: itemJSON>`{lang=acmd}](./-givec)\
[`\wset <dimension: dimension> <x: float> <y: float> <z: float> <name: escapableString>`{lang=acmd}](./-wset)\
[`\w <name: escapableString>`{lang=acmd}](./-w)\
[`\wremove <name: escapableString>`{lang=acmd}](./-wremove)\
[`\wreset`{lang=acmd}](./-wreset)\
[`\wlist`{lang=acmd}](./-wlist)\
[`\wlistdetails`{lang=acmd}](./-wlistdetails)\
[`\wlistrawdata`{lang=acmd}](./-wlistrawdata)

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following sub-commands to the `\help`{lang=acmd} command:\
`\help chatcommands`{lang=acmd}\
`\help cmd <command: CommandName>`{lang=acmd}\
`\help command <command: CommandName>`{lang=acmd}\
`\help itemjsonformat`{lang=acmd}\
`\help itemjsonformatcmpr`{lang=acmd}\
`\help itemjsonformatsimplified`{lang=acmd}

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

The names of the sub-commands of the `\help`{lang=acmd} command are no longer case sensitive.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="3">
                <a href="/changelogs/v1.14.0" title="Debug Sticks v1.14.0">
                    v1.14.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.14.0"
                    title="Debug Sticks v1.14.0"
                >
                    release
                </a>
            </th>
            <td>

The `\help JаvaScriptfunctions`{lang=andexdbcmd} sub-command now has the module names color coded in aqua.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="2" colspan="3">
                <a href="/changelogs/v1.16.0" title="Debug Sticks v1.16.0">
                    v1.16.0
                </a>
            </th>
            <th colspan="4" rowspan="2">
                <a
                    href="/changelogs/v1.16.0"
                    title="Debug Sticks v1.16.0"
                >
                    release
                </a>
            </th>
            <td>

Changed the title text for the `\help chatcommands`{lang=andexdbcmd} sub-command from `§2Chat Commands Syntax§r` to `§2Chat Commands List§r`.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Changed the command syntax for the [`\giveb`{lang=acmd}](./-giveb) command displayed by the `\help chatcommandsb`{lang=acmd} sub-command from `\giveb <item: itemType> <amount: int>`{lang=acmd} to `\giveb <item: itemType> [amount: int]`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="4" colspan="3">
                <a href="/changelogs/v1.17.0" title="Debug Sticks v1.17.0">
                    v1.17.0
                </a>
            </th>
            <th colspan="4" rowspan="4">
                <a
                    href="/changelogs/v1.17.0"
                    title="Debug Sticks v1.17.0"
                >
                    release
                </a>
            </th>
            <td>

The `\help`{lang=andexdbcmd} command no longer defaults to requiring the `canUseChatCommands` tag to be run.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the `\help js`{lang=andexdbcmd} alias of the `\help jsfunction`{lang=andexdbcmd} sub-command.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the `/scriptevent andexdb:spawnSimulatedPlayer [playerName: string]|[location: location]|[dimensionId: string]|[gametestStructureSpawnLocation: location]` syntax to the `\help scriptevent`{lang=andexdbcmd} sub-command.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added a command flags section to the help info displayed by the `\help cmd`{lang=andexdbcmd} sub-command for some of the commands.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="6" colspan="3">
                <a href="/changelogs/v1.20.0" title="Debug Sticks v1.20.0">
                    v1.20.0
                </a>
            </th>
            <th colspan="4" rowspan="6">
                <a
                    href="/changelogs/v1.20.0"
                    title="Debug Sticks v1.20.0"
                >
                    release
                </a>
            </th>
            <td>

The `\help cmd`{lang=acmd} and `\help cmdextra`{lang=acmd} sub-commands will now show the syntax or description listed in the definition of the command, if it can not find it in the commandsyntaxes or commanddescriptions object.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the following sub-commands to the `\help`{lang=acmd} command:\
`cmdextra <command: CommandName>`{lang=acmd}\
`cmddebug <command: CommandName>`{lang=acmd}\
`cmddebugplus <command: CommandName>`{lang=acmd}\
`customcmddbug <command: CommandName>`{lang=acmd}

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

The `\help`{lang=acmd} command now tells you when a command is deprecated or non-functional.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Fixed an issue with the flags for the [`\\cut`{lang=acmd}](./--cut), [`\\copy`{lang=acmd}](./--copy), and [`\\paste`{lang=acmd}](./--paste) commands not showing up in the `\help cmd`{lang=acmd} sub-command.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added a new section to the \help chatcommands sub-command for the deprecated commands.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

If a command is marked as hidden in the commands_list file, it will now not show up in the `\help`{lang=acmd} sub-commands, and only show up in the new `\help cmddebugplus <command: CommandName>`{lang=acmd} sub-command.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="1" colspan="3">
                <a href="/changelogs/v1.26.0" title="Debug Sticks v1.26.0">
                    v1.26.0
                </a>
            </th>
            <th colspan="4" rowspan="1">
                <a
                    href="/changelogs/v1.26.0"
                    title="Debug Sticks v1.26.0"
                >
                    release
                </a>
            </th>
            <td>

Fixed an issue where when you used the `\help cmd`{lang=acmd} sub-command or one of its variants, to get info about a command that has one or more aliases, then there was a missing space between the command name and "(also …)".

</td>
        </tr>
    </tbody>
</table>
