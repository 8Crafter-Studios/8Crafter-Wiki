---
title: \\idtfill
page_title: \\idtfill
description: The \\idtfill command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
---

Fills all or parts of a reigon with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, also allows specifying the integrity of the fill, can use any block type including NBT Editor only ones.

<CommandDetailsTable
    name="\\idtfill"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="1.0.2-rc.5"
    :undoSupported="0"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\idtfill <integrity: float> <tileName: Block|random> {blockStates: block states} [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> <reaplceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> <reaplceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> clear [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> drain`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <mode: hollowsphere|dome> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <mode: hollowsphere|dome> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <thickness: float> <tileName: Block> <mode: hollowsphere|dome> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <integrity: float> <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> hollowovoid [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> hollowovoid [replaceTileName: Block] [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

`\\idtfill <offset: x y z> <integrity: float> <thickness: float> <tileName: Block> hollowovoid [clearContainers: boolean]`{lang=andexdbcmd}

<indent></indent>

## Result

## History

<template-EmptySection />
