---
title: \\protectarea
page_title: \\protectarea
description: The \\protectarea command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
    - Andexter8
---

Sets the selected area as a protected area.

<CommandDetailsTable
    name="\\protectarea"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="2.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\protectarea [-o] <areaType: string> <name: string> [mode: (0|1)[?=0]] [icon_path: string]`{lang=andexdbcmd}

<indent>Adds the selection as a protected area</indent>

## Arguments

`[-o]`{lang=andexdbcmd}: [flags](../commands/commands-parameters-basics#flags-parameters)

<indent>

A flags parameter.

Here are what each of the flags do:

`o`: Causes the command to overwrite the saved protected area if one exists with the same id.

</indent>

`<areaType: string>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The category of the protected area.

For built-in categories, it should be specified like `noBlockBreakArea:`. The `:` is necessary.

For custom categories, it should NOT have a `:` at the end.

</indent>

`<name: string>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The uniquie identifier of the protected area.

</indent>

`[mode: 0|1(default=0)]`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The mode of the protected area.

`0`{lang=ts}: The area is protected.

`1`{lang=ts}: The area is excluded from protection from any other areas of the same category.

For example if there was an area with mode `0`{lang=ts} of the built-in category `noBlockBreakArea:` that covered `23 50 26` to `37 80 50`, then an area with mode `1`{lang=ts} of the bulit-in category `noBlockBreakArea:` that covered `28 60 29` to `34 70 32` would cause any block breaking in the area `28 60 29` to `34 70 32` to not be prevented.

If there was an area with mode `0`{lang=ts} of the built-in category `noBlockBreakArea:` that covered `23 50 26` to `37 80 50`, then an area with mode `1`{lang=ts} of the custom category `myCustomNoBlockBreakingAreaCategory` that covered `28 60 29` to `34 70 32` would **NOT** cause any block breaking in the area `28 60 29` to `34 70 32` to not be prevented.

If there was an area with mode `0`{lang=ts} of the built-in category `noBlockBreakArea:` that covered `23 50 26` to `37 80 50`, then an area with mode `1`{lang=ts} of the built-in category `protectedArea:` that covered `28 60 29` to `34 70 32` would also **NOT** cause any block breaking in the area `28 60 29` to `34 70 32` to not be prevented.

So for a mode `1`{lang=ts} (exclusion) area, it **MUST** be in the exact same category as the mode `0`{lang=ts} (protection) area that it is trying to exclude the protection from.

Mode `1`{lang=ts} areas **ALWAYS** have priority over mode `0`{lang=ts} areas.

Default: `0`{lang=ts}

</indent>

`[icon_path: string]`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The icon path of the protected area.

This is used in the [Manage Protected Areas](../main-menu/manage-protected-areas) menu.

If left blank, the area will have no icon.

The icon path should be relative to the root folder of the resource packs.

The file extension is optional.

Examples:
-   `textures/blocks/stone`
-   `textures/ui/debug_glyph_color`
-   `textures/ui/debug_glyph_color.png`
-   `pack_icon`
-   `pack_icon.png`

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
                There is already an area in the specified category with the same name and the `-o` flag was not specified.
            </td>
            <td align="center" class="tc-no" colspan="2">Failed</td>
        </tr>
        <tr>
            <td>
                The specified category does not exist.
            </td>
            <td align="center" class="tc-no" colspan="2">Failed</td>
        </tr>
        <tr>
            <td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

## Examples

-   To add the selected area as the protected area to the built-in category `noBlockBreakArea:`, with the name `myAntiBlockBreakingArea1`, and the icon path `textures/blocks/stone`:
    -   `\\protectarea noBlockBreakArea: myAntiBlockBreakingArea1 0 textures/blocks/stone`{lang=mccmd}
-   To exclude the selected section of a `noBlockBreakArea:` protected area from the protection:
    -   `\\protectarea noBlockBreakArea: myAntiBlockBreakingArea1_exclusion1 1`{lang=mccmd}
-   To addd the selected area as the protected area to the custom category `myCustomCategory`, with the name `myCustomProtectedArea1`, and the icon path `textures/ui/debug_glyph_color`:
    -   `\\protectarea myCustomCategory myCustomProtectedArea1 0 textures/ui/debug_glyph_color`{lang=mccmd}

## History

<table class="wikitable pixel-image bgType2" data-description="History">
    <tbody>
        <tr class="collapsible collapsible-rows">
            <th colspan="16" style="border-bottom: none">
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

Added `\\protectarea`{lang=acmd}.

</td>
        </tr>
        <tr class="collapsible-row">
            <th class="nowrap" rowspan="2" colspan="1">
                <a href="/changelogs/v1.33.0" title="Debug Sticks v1.33.0">
                    v1.33.0
                </a>
            </th>
            <th colspan="4" rowspan="2">
                <a href="/changelogs/v1.33.0" title="Debug Sticks v1.33.0">
                    release
                </a>
            </th>
            <td>

The `\\protectarea` command now supports custom protected area categories. The built-in ones are still specified exactly the same way, but for the custom ones, you just put the same id that you put when creating the category, with the custom categories, you do not include a `:` at the end.

</td>
        </tr>
        <tr class="collapsible-row">
            <td>

Added the `o` flag to the `\\protectarea` command. This flag causes the command to overwrite the saved protected area if one exists with the same id.

</td>
        </tr>
        <tr class="collapsible collapsible-rows">
            <th colspan="16" style="border-bottom: none">
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
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/"
                    title="Debug Sticks v1.35.0-preview.20+BULID.4 (Commit 4da7a07768d1f5a67ff18415417e7817ab75b699)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

Fixed a bug where the `\\protectarea`{lang=acmd} command would always throw an error saying that the area category was invalid, even when it was valid.

</td>
        </tr>
    </tbody>
</table>
