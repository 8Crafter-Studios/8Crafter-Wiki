---
title: Project Setup
page_title: Project Setup
description: Learn how to set up your project folders for a plugin.
category: Guide
nav_order: 3
prefix: "3. "
mentions:
    - 8Crafter
---

<template-Stub />
<template-WorkInProgress />

> [!WARNING]
> Comments and trailing commas in the `manifest.json` file are not supported in Ore UI Customizer versions prior to v1.17.0+BUILD.8. If you want to have compatibility with older versions, please remove them.

<FolderView :paths="[
    'my_plugin/.vscode/ore-ui.css-data.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/.vscode/ore-ui.html-data.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/.vscode/settings.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/assets/.eslintrc', // <!-- NOTE: Devlopment only. -->
    'my_plugin/assets/example.ts',
    'my_plugin/scripts/index.ts',
    'my_plugin/tsconfig.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/tsconfig.assets.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/tsconfig.scripts.json', // <!-- NOTE: Devlopment only. -->
    'my_plugin/manifest.json',
    'my_plugin/pack_icon.png',
    'my_plugin/.prettierrc', // <!-- NOTE: Devlopment only. -->
    'my_plugin/package.json', // <!-- NOTE: Devlopment only. -->
]" />

<FolderView :paths="[
    'my_plugin/assets/example.d.ts',
    'my_plugin/assets/example.js',
    'my_plugin/assets/example.js.map',
    'my_plugin/scripts/index.d.ts',
    'my_plugin/scripts/index.js',
    'my_plugin/scripts/index.js.map',
    'my_plugin/manifest.json',
    'my_plugin/pack_icon.png',
]" />
