---
title: Plugins Explained
page_title: Plugins Explained
description: The basics of plugins.
category: Guide
nav_order: 1
prefix: "1. "
mentions:
    - 8Crafter
---

<template-WorkInProgress />

## What Are Plugins?

A plugin allows you to add, modify, and remove functionality from the Ore UI Customizer.

The way plugins work is by operating on the Ore UI files, like the Ore UI Customizer does.

It is highly recommended to write plugins in TypeScript, but they can also be written in JavaScript.

There are two types of plugins: single-file and multi-file.

Multi-file plugins come in a `.ouicplugin` or `.mcouicplugin` file, while single-file plugins come in a `.js` file.

An `.ouicplugin`/`.mcouicplugin` file is actually a renamed zip file.

It is recommended to use multi-file plugins, but you can read more about single-file plugins [here](single-file-plugins).

All multi-file plugins contain a script file in the `scripts` folder that runs and exports a list of "actions".
These actions are run by the Ore UI Customizer during the installation process.
These actions can add, modify, and remove files from the Ore UI files.

These script files in the `scripts` folder should be cross-compatible between browser and Node.js. This is because there are 3 official environments plugins can be run in, the Ore UI Customizer website (web only), the Ore UI Customizer app (web + Node.js), and the Ore UI Customizer CLI (Node.js only).

NOTE: Plugins in the `scripts` folder currently are not capable of importing other scripts contained in the plugin via their path due to being imported via data URI, so you should put all install-time code into a single file in the `scripts` folder.

If you want a script file that runs in-game, you would put it in the `assets` folder, and you would add that file to the Ore UI files via a plugin action, and you would also inject an import statement into either the HTML files for the screens that you want to run the script file in, or into one of the script files that are imported by those HTML files. For more info, see [Client Scripts](client-scripts).
