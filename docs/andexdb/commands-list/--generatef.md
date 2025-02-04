---
title: \\generatef
page_title: \\generatef
description: The \\generatef command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
---

Generates a 3d shape according to a formula in the selected area, this one does not allow access to custom variables which will prevent being able to run scripts using this, this one is much more limited than \\\\generate so it is only reccommended if you are restricting the \\\\generate command from a player to prevent script execution, in [-sr] the s modifier will prevent the math equation parser from replacing single equal signs with double equal signs and the r modifier will prevent that as well as any other modifications so that it is run as pure javascript, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.

<CommandDetailsTable
    name="\\generatef"
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

`\\generatef [-sr] <blockPattern: BlockPattern> <expression: 3DGeometricMathEquation>`{lang=andexdbcmd}

<indent>Generate 3d shape</indent>

## Result

## History

<template-EmptySection />
