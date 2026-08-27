---
title: Single-File Plugins
page_title: Single-File Plugins
description: Information about single-file plugins.
category: Extra
nav_order: 2
mentions:
    - 8Crafter
---

<template-WorkInProgress />

> [!WARNING]
> It is **highly recommended** to write your plugin as a multi-file plugin rather than a single-file plugin.

## What Are Single-File Plugins?

<template-ExpandSection />

Single-file plugins are a single JavaScript file that exports a `plugin` object containing metadata and a list of actions.

## Limitations

Here are some limitations of single-file plugins:
-   The plugin cannot be imported by simply double-clicking it.
-   There is a warning before importing it.
-   The plugin script file cannot access the `pluginEnv` variable.
-   The plugin script file is also run when importing the plugin (the actions are not run until the installations process starts).
