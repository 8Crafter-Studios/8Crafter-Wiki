---
title: Debug Sticks
page_title: 8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities
category: Released
description: 8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities
tags:
    - BP
    - RP
nav_order: 2
thumbnail_url: https://wiki.8crafter.com/main/assets/images/add-on_cover_art/andexdb.png
---

<img src="/assets/images/add-on_cover_art/andexdb.png" alt="8Crafter's Debug Sticks Cover Art" title="8Crafter's Debug Sticks Cover Art">

<Button link="https://modbay.org/mods/1240-8crafters-debug-sticks.html">ModBay</Button>
<Button link="/8Crafter-Wiki/andexdb/" target="_self">
    Full Documentation
</Button>

This add-on does almost everything. It is one of the most powerful bedrock add-ons that currently exists.

## General Description

&nbsp;&nbsp;&nbsp;&nbsp;This is an add-on that adds the debug stick, as well as an editor stick, which lets you see block info when you crouch and can be used on a block to change the block type (you can even change it to blocks that normally require NBT editors to obtain), change some of the block states of the block, change the raw text of a sign, change the color of the liquid in a cauldron (even for lava and powdered snow), change the potion in a cauldron, set whether or not the block is waterlogged, etc.

&nbsp;&nbsp;&nbsp;&nbsp;It also allows you to have chat ranks, change your name in the chat, and have custom colors and formatting codes automatically applied to your messages, it also adds some custom chat commands, it also adds three different debug menus, one for the world details, one for player details, and one for entity details, it also adds a player controller that lets you do things like change a player's name tag, active selected hotbar slot, change whether or not they have operator permissions, start cooldowns on their items, apply knockback to them, kill them, despawn them, apply damage to them, add effects or tags to them, remove effects or tags from them, teleport them, set them on fire for a certain amount of time, set their spawn point to a very specific point in a specified dimension, etc. Then there is also an entity controller that does a lot of the same stuff as the player controller (except for the stuff that can only be used on the players) but also has a few other features too. Then there is an item modifier that lets you change the lore and name of an item (you can even use multiple lines of text in the lore too), you can also have multiple lines of text in the item names, you can also set the components of an item (like lock in slot, lock in inventory, can destroy, can place on, and also keep on death), you can also trigger item events for custom items, you can also transfer items in between players inventories. Then there is also a world controller that lets you do stuff like send internal client messages, set the weather in a specific dimension, send /tellraw messages to all players without needing to type out the /tellraw command, you can also set the world spawn, absolute world time, current time of day, spawn entities, spawn items, spawn particles with specified molang values (so you can use particles that are normally broken with the /particle command), etc. There is also an explosion creator that lets you create custom explosions at specified coordinates with a specified radius, and you can also specify whether or not it causes fire, whether or not it destroys blocks, whether or not it can explode underwater, and also which entity has caused the explosions.

## Main Features

-   WorldEdit
-   100% Customizable Chat Ranks. Including the option to have colors and formatting codes automatically applied to your chat messages, and even optionally having chat ranks show up on players' name tags. It even optionally can include timestamps in chat, and each user can even configure their time zone to be used for those chat timestamps.
-   Allows you to add ANY ENCHANTMENT of ANY LEVEL on to ANY ITEM. For example, you could make a nether reactor core with sharpness 113, fire aspect 113, fortune 2, and knockback 15.
-   Allows you to change players' and entities' name tags.
-   Script REPL/Script Eval/Allows you to run JаvaScript code/scripts with commands.
-   Debug Sticks
-   An entire main menu with a ton of admin utilities.
-   A map art generator.
-   Allows you to get blocks and items that normally require an NBT Editor to obtain, such as Nether Reactors and Cameras.
-   Allows you to get stacks of items that are larger than are normally possible, such as a stack of 255 wooden swords.
-   Add and change translation strings on signs.
-   Wax/Unwax Signs.
-   Change the liquid color of water cauldrons, lava cauldrons, potion cauldrons, and even powdered snow cauldrons.
-   Waterlog/Unwaterlog blocks.
-   A TON of extremely usefull custom commands.
-   Allows you to create your own custom commands using minecraft commands and/or JаvaScript.
-   Set item names and item lore (allows for newline characters)
-   Get a lot of debug information of players, entities, and blocks.
-   An editor stick that gives you debug info about blocks when you sneak while holding it and facing the block. Some of this info includes:
    -   Block States
    -   Block Tags
    -   Block ID
    -   Redstone Power Level
    -   Container size and fullness.
    -   Exact cauldron liquid color.
    -   Cauldron liquid/potion type and fill level.
    -   Piston State
-   The ability to see inside other players inventories with the custom \\invsee command. You can even see inside the inventories of offline players with the \\offlineinvsee command.
-   Spawn Items
-   Spawn particles with specified molang values (so you can use particles that are normally broken with the /particle command)
-   Explosion creator that lets you create custom explosions at specified coordinates with a specified radius, and you can also specify whether or not it causes fire, whether or not it destroys blocks, whether or not it can explode underwater, and also which entity has caused the explosions.
-   Ban System
-   Anti-Spam System
-   Notifications System
-   Teleport Request/TPA System
-   Home System
-   Customizable World Border System
-   Customizable Server Shop System
-   Customizable Player Shop System
-   Hotbar Presets
-   Fully Customizable Spawn Protection System. It can optionally prevent block placing, block breaking, interacting with blocks, interacting with entities, explosions, etc. You can even make it so that specific players (like admins) can bypass the spawn protection.
-   Allows you to spawn Simulated Players, Simulated Players are fake players that the game treats just like real players. They show up in the player list in the pause menu, they show up in the autofill for commands, you can op/deop them, they show joined game messages in the chat, you can change their game modes, etc.
-   Allows you to spawn entities with no AI.
-   You can view the tags, dimension, position, inventory, and even game mode of any player even if they are offline.
-   Allows you to see inside players ender chests, clear players ender chests, and even clear specific spots of players ender chests.
-   Fully re-program any non-stackable item with JаvaScript.
-   Run commands on item use.
-   Full compatibility with other chat rank add-ons.
-   Full compatibility with other chat commands add-ons.
-   Allows you to fully re-program it in-game with commands. You can even add other add-on that just use the script api into this add-on in-game with commands.

<style>
    .video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<div class="video-container">
    <iframe
        src="https://www.youtube.com/embed/bszs_vo-1Lc"
        title="Debug Sticks Add-On for Minecraft bedrock edition 1.21"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style="width: 100%; height: 100%"
    ></iframe>
</div>

## Next

<!-- :::tip What you have learned

-   [x] Add-ons modify Minecraft content or add their own
-   [x] Add-ons are written in json
-   [x] An add-on is split into the **Resource Pack** and the **Behavior Pack**: - Resource Packs contain Textures, Sounds, ... and control how the game looks - Behavior Packs contain entity-files, crafting recipes, ... and control the logic of your game

::: -->

<Button link="/8Crafter-Wiki/andexdb/" target="_self">
    Next: 8Crafter's Debug Sticks Wiki
</Button>
