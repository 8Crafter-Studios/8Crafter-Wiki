---
title: \\savepos
page_title: \\savepos
description: The \\savepos command.
show_outline: false
category: WorldEdit
nav_order: 3
mentions:
    - stormstqr
---

Saves your current selection (pos1, pos2, and posD) into a saved selection with the specified ID, that can be loaded in at any time using the \\loadpos command.

<CommandDetailsTable
    name="\\savepos"
    :categories="[
        'system', 'world', 'server', 'worldedit'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="WorldEdit"
    version="1.0.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\\savepos <selectionID: string>`{lang=andexdbcmd}

<indent>Saves the current selection with the specified name</indent>

## Result

<template-EmptySection />

## History

<template-EmptySection />
