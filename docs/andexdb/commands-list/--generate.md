---
title: \\generate
page_title: \\generate
description: The \\generate command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
---

Generates a 3d shape according to a formula in the selected area, in [-sr] the s modifier will prevent the math equation parser from replacing single equal signs with double equal signs and the r modifier will prevent that as well as any other modifications so that it is run as pure javascript, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.

<CommandDetailsTable
    name="\\generate"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="2.0.0"
    :undoSupported="-2"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\generate [-sr] <blockPattern: BlockPattern> <expression: 3DGeometricMathEquation>`{lang=andexdbcmd}

<indent>Generates a 3d shape</indent>

## Result

<template-EmptySection />

## History

<template-EmptySection />
