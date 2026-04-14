---
title: WorldEdit Bedrock
page_title: WorldEdit Bedrock Add-On
description: The WorldEdit Bedrock integration.
nav_order: 1
mentions:
    - 8Crafter
    - Aevarkan
---

<template-Add-OnDependency :dependencies="[['we']]" />

WorldEdit is originally a [Java mod](https://github.com/EngineHub/WorldEdit). It has been ported over to Bedrock Edition by [SIsilicon](https://github.com/SIsilicon/WorldEdit-BE).

The Bedrock platform has a few constraints which make it difficult to fully achieve feature parity using add-ons. As a result, not all features from the Java mod can be fully replicated in the add-on. For more details, refer to WorldEdit's [documentation](https://worldedit-be-docs.readthedocs.io/en/latest/).

There are two features in the WorldEdit add-on that require assistance from Bedrock World Editor to function correctly:
- changing biomes
- importing and exporting structures

## Biome Modification

Biome modification is done in WorldEdit through the `;setbiome` command. You must run the command in-game using WorldEdit first. Once the world is saved, you can then open the world in Bedrock World Editor to process the command.

See this video for a guided walkthrough:
<iframe width="560" height="315" src="https://www.youtube.com/embed/TMjcjqkZjv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Structure Import Export

Structures can be saved internally in a world fully in-game using the `;export` and `;import` WorldEdit commands. To transfer structures across worlds, Bedrock World Editor is needed, as the add-on itself cannot modify data outside of the currently loaded world.

To transfer a structure across worlds, you can run the `;export` command normally. This will be detected by Bedrock World Editor upon opening the saved world.

Currently, you must open both the world you are exporting the structure from, and the world you are exporting the structure to in the editor. Once you have transfered the structure in the editor, you can then run the `;import` WorldEdit command in-game to use the structure.

See this video for a guided walkthrough:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ltk4IiAjy8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Additional Information

WorldEdit add-ons by other authors **will not** work. This integration was a partnership between both projects, and required code changes on both sides.

WorldEdit's documentation also has a page on this integration [here](https://worldedit-be-docs.readthedocs.io/en/latest/usage/worldedit_app/).
