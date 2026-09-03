---
title: Texture Customization
page_title: Texture Customization
description: How to customize the textures of Ore UI with themes.
category: Extra
nav_order: 2
mentions:
    - 8Crafter
---

<template-WorkInProgress />
<template-InDevelopment version="v1.17.0" />
<template-Experimental />

> [!TIP]
> When Minecraft updates, if a vanilla texture is changed, the hash at the end of the filename will also change, so if you want support for a wider range of Minecraft versions, you may need multiple duplicates of the same texture with different hashes.

Themes are able to both add and replace assets in Ore UI, such as images, videos<!-- , sounds -->, and fonts.

NOTE: Replacing sounds with themes is not supported at this time, as in newer Minecraft versions, Ore UI is no longer capable of defining custom sound definitions or playing sound files from its `assets` folder, it is only able to play sounds defined in resource packs.

## Finding the Texture Paths

<template-EmptySection />

## Replacing the Textures

### Ore UI Customizer App

<template-EmptySection />
<template-Planned section="section" />

### Ore UI Customizer Website

<template-EmptySection />
<template-Planned section="section" />

### Manual

<template-ExpandSection />

Replacing the texture, video, or font works very similarly to a Minecraft resource pack.

Images go in the `textures` folder.

Videos go in the `videos` folder.

<!-- Sounds go in the `sounds` folder. -->

Fonts go in the `font` folder.

Once you have found the path of the asset you want to replace, you just put you modified asset at the same path within the corresponding folder for the type of file in the theme as the relative path to the file from the `gui/dist` folder.

For example, if you found your texture at `gui/dist/hbui/assets/75-Achievement-Book-5bb7425bb0e4886e48df.png`, then you would put your modified texture at `theme/textures/hbui/assets/75-Achievement-Book-5bb7425bb0e4886e48df.png`.
