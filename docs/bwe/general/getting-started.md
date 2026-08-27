---
title: Getting Started
page_title: Getting Started
description: What to do after you install the application.
nav_order: 4
mentions:
    - Aevarkan
    - 8Crafter
---

<template-WorkInProgress />

Upon opening the app, you will be greeted by a list of your Minecraft worlds. If your world doesn't appear, try pressing "Show more" at the bottom of the list.

To begin editing, open the world you'll be making changes to by clicking on its tab in the list.

You can refresh the worlds list by clicking the app logo on the left.

![World directory](/assets/images/general/getting-started/menu-page.png)

> [!NOTE]
> If your world still doesn't show up after pressing "Show more", then that is a bug. File an issue [here](https://github.com/8Crafter-Studios/Bedrock-World-Editor/issues) with details of your Minecraft configuration.

## World View

Once you have opened a world, you will see a selection of tabs to the left, each pertaining to an aspect of the world you can edit. Here, the `World Settings` tab is selected.

Depending on the tab, you may have a selection of `Node`, `Prismarine-NBT`, `SNBT`, or another format of displaying the data. For most tabs, the `Node` editor format will be available.

![World settings tab](/assets/images/general/getting-started/world-settings.png)

## Database Tab

Minecraft Bedrock uses [LevelDB](https://minecraft.wiki/w/Bedrock_Edition_level_format) to store world data, a flat key-value database. Due to this flat nature, every single key-value pair can be sorted in one list. This is what the `View Files` tab displays.

![Database view](/assets/images/general/getting-started/view-database.png)

## Integrations Tab

As the Script API for Minecraft Bedrock is rather limiting, add-ons can struggle to implement advanced features. The `Integrations` tab allows add-ons to leverage Bedrock World Editor's capabilities, bypassing constraints of the Script API.

Currently, [WorldEdit Bedrock](https://mcpedl.com/worldedit-be-addon/) by [SIsilicon](https://github.com/SIsilicon) leverages Bedrock World Editor for its biome modification and structure import export features. For more information, see the dedicated integration page [here](../integrations/worldedit-bedrock).

> [!NOTE]
> Integrations are implemented on a case-by-case basis. If you would like to add an integration for your add-on, make a suggestion [here](https://github.com/8Crafter-Studios/Bedrock-World-Editor/issues/new?template=integration-suggestion.md).

![Integrations tab](/assets/images/general/getting-started/integrations.png)
