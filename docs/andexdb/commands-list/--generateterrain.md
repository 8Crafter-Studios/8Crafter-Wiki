---
title: \\generateterrain
page_title: \\generateterrain
description: The \\generateterrain command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - Andexter8
---

Generates terrain in the selected area.

Note: This command currently only supports terrain, ores, and blobs, it does not support foliage or structure generation yet.

<CommandDetailsTable
    name="\\generateterrain"
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

`\\generateterrain [-bod] <biome: TerrainGeneratorBiome> {[seed: float[?=Math.random()]]} {[baseHeight: int]} {[heightVariation: float]} {[waterLevel: (int|false)[??=default]]} {[generatorType: ({normal}|{nether}|{end}|{fractal})[?=normal]]} {[minMSBetweenTickWaits: int[?=config.system.defaultMinMSBetweenTickWaits,parameterName=msbt]]} {[oreGenerationMode: ({v1}|{v2})[?="v2"]]} {[noiseOffsetX: float[?=0]]]} {[noiseOffsetY: float[?=0]]]} {[noiseOffsetZ: float[?=0]]]} {[noiseScaleX: float[?=1]]} {[noiseScaleY: float[?=1]]} {[noiseScaleZ: float[?=1]]}`{lang=andexdbcmd}

<indent>Generate terrain.</indent>

## Arguments

`[-bod]`{lang=andexdbcmd}: [flags](../commands/commands-parameters-basics#flags-parameters)

<indent>

A flags parameter.

Here are what each of the flags do:

`b`: Enables the generation on blobs (things like the patches of andesite, granite, and tuff that you can find underground).

`o`: Enables the generation on ores (diamond ore, gold ore, iron ore, ancient debris, etc.).

`d`: Causes the command to display debug statistics when the generation is complete.

</indent>

`<biome: TerrainGeneratorBiome>`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The biome to use for the terrain generation.

If an unspported biome is provided, an error with the list of supported biomes will be thrown.

If the biome has not had its block type data added to the getBlockTypeV2 function (which is the case for many biomes currently), the whole biome will generate using [`andexdb:invalid_block_placeholder`](../blocks/invalid-block-placeholder) blocks.

Current list of fully supported biomes as of `v1.35.0`:

-   `minecraft:plains`{lang=mccmd}
-   `minecraft:forest`{lang=mccmd}
-   `minecraft:forest_hills`{lang=mccmd}
-   `minecraft:flower_forest`{lang=mccmd}
-   `minecraft:sunflower_plains`{lang=mccmd}
-   `minecraft:river`{lang=mccmd}
-   `minecraft:frozen_peaks`{lang=mccmd}
-   `minecraft:hell`{lang=mccmd}
-   `minecraft:the_end`{lang=mccmd}
-   `andexdb:test_1`{lang=mccmd}

</indent>

`{[seed: float[?=Math.random()]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The seed to use for the terrain generation.

If not provided, a random seed will be used.

</indent>

`{[baseHeight: int]}`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The base height to use for the terrain of the biome type.

If not provided, the default base height of the biome will be used.

</indent>

`{[heightVariation: float]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The height variation to use for the terrain.

If not provided, the default height variation of the biome will be used.

</indent>

`{[waterLevel: (int|false)[??=default]]}`{lang=andexdbcmd}: [int](../commands/parameter-types#int) | [boolean](../commands/parameter-types#boolean)

<indent>

The water level to use for the terrain.

If false, no water will be generated.

If not provided, the default water level of the biome will be used.

</indent>

`{[generatorType: ({normal}|{nether}|{end}|{fractal})[?=normal]]}`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The generator type to use for the terrain.

Generator Types:

-   `normal` - Regular overworld generation. The generates with everything below the surface being solid, and the surface having height variation, including mountains.
-   `nether` - Nether generation. This generates similarly to the nether.
-   `end` - End generation. This generated end islands.

If not provided, the default generator type of the biome will be used.

</indent>

`{[minMSBetweenTickWaits: int[?=config.system.defaultMinMSBetweenTickWaits,parameterName=msbt]]}`{lang=andexdbcmd}: [int](../commands/parameter-types#int)

<indent>

The minimum number of milliseconds between tick waits.

Default: [`config.system.defaultMinMSBetweenTickWaits`{lang=ts}](https://api.8crafter.com/andexdb/dev/classes/Globals.config.system.html#defaultminmsbetweentickwaits)

</indent>

`{[oreGenerationMode: ({v1}|{v2})[?="v2"]]}`{lang=andexdbcmd}: [string](../commands/parameter-types#string)

<indent>

The ore generation mode to use.

Ore Generation Modes:

-   `v1` - This mode is more cubic.
-   `v2` - This mode is more elliptic.

Default: `v2`

</indent>

`{[noiseOffsetX: float[?=0]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The X axis offset to use for the noise functions.

The actual block positions will not be offset, instead it will offset the coordinates passed into the noise functions.

Default: `0`{lang=ts}

</indent>

`{[noiseOffsetY: float[?=0]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The Y axis offset to use for the noise functions.

The actual block positions will not be offset, instead it will offset the coordinates passed into the noise functions.

Default: `0`{lang=ts}

</indent>

`{[noiseOffsetZ: float[?=0]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The Z axis offset to use for the noise functions.

The actual block positions will not be offset, instead it will offset the coordinates passed into the noise functions.

Default: `0`{lang=ts}

</indent>

`{[noiseScaleX: float[?=1]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The X axis scale to use for the noise functions.

Larger values will make the terrain slope more quickly.

The actual block positions will not be scaled, instead it will scale the coordinates passed into the noise functions.

Default: `1`{lang=ts}

</indent>

`{[noiseScaleY: float[?=1]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The Y axis scale to use for the noise functions.

Larger values will make the terrain slope more quickly.

The actual block positions will not be scaled, instead it will scale the coordinates passed into the noise functions.

Default: `1`{lang=ts}

</indent>

`{[noiseScaleZ: float[?=1]]}`{lang=andexdbcmd}: [float](../commands/parameter-types#float)

<indent>

The Z axis scale to use for the noise functions.

Larger values will make the terrain slope more quickly.

The actual block positions will not be scaled, instead it will scale the coordinates passed into the noise functions.

Default: `1`{lang=ts}

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
            <td align="center" rowspan="2">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

## Examples

-   To generate a plains biome with the seed 3271236.3451132, display debug statistics, and generate ores and blobs:
    -   `\\generateterrain -bod minecraft:plains seed=3271236.3451132`{lang=mccmd}
-   To generate a frozen peaks biome with the seed 7, and generate ores and blobs with the `v1` mode:
    -   `\\generateterrain -ob minecraft:frozen_peaks seed=7 oreGenerationMode=v1`{lang=mccmd}
-   To generate a plains biome with the seed 0.5 and a water level of y=134:
    -   `\\generateterrain minecraft:plains seed=0.5 waterLevel=134`{lang=mccmd}

## History

<table class="wikitable pixel-image bgType2" data-description="History">
    <tbody>
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
                    href="https://github.com/8Crafter-Studios/8Crafter-s-Debug-Sticks-BP-Development/commit/83e3cd7265503a89e24987d366ef383c60151c5c"
                    title="Debug Sticks v1.35.0-preview.20+BULID.3 (Commit 83e3cd7265503a89e24987d366ef383c60151c5c)"
                    class="minetip scicon"
                ></a>
            </th>
            <td>

Added `\\generateterrain`{lang=acmd}.

</td>
        </tr>
    </tbody>
</table>
