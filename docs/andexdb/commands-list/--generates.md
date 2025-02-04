---
title: \\generates
page_title: \\generates
description: The \\generates command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
---

Generates a 3d shape with the specified step according to a formula in the selected area, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.

<CommandDetailsTable
    name="\\generates"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="1.0.0"
    :undoSupported="-2"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\generates <step: float> <blockPattern: BlockPattern> <expression: 3DGeometricMathEquation>`{lang=andexdbcmd}

<indent>Generate 3d shape</indent>

## Result

## History

<template-EmptySection />
