---
title: \tint
page_title: \tint
description: The \tint command.
show_outline: false
category: Main
mentions:
    - Andexter8
---

<template-Stub />

Tints the players skins a specified color, and optionally sets the alpha channel of their skins. The r, g, and b parameters are the color to tint it. The a parameter is the alpha channel. For the r, g, b, and a parameters, 1 is 0% brightness, 2 is 100% brightness, and anything higher than new makes the skins glow a certain amount. To enable the alpha channel you must set the useSpectatorMaterial parameter to 1, 0 is the default player material, 1 is the player material for players who are in spectator mode, 0 does not allow for an alpha channel, but 1 does allow for an alpha channel.

<CommandDetailsTable
    name="\tint"
    :categories="[
        'Entity Scale Add-On'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="admin"
    version="1.0.4"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

<template-EmptySection />

## Result

<template-EmptySection />

## History

<template-EmptySection />

<!-- AUTO GENERATED -->
