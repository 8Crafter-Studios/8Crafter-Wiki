---
title: Chat Ranks System
nav_order: 4
description: The add-on's chat ranks system.
mentions:
    - Andexter8
---

<template-Stub />

## Setup

<template-ExpandSection />

<Spoiler title="Setting up a default rank">

:::tip
Note: As of v1.33.0, there is a preset value for the default rank, so if you want your default rank to be <code style="color: #55FFFF; background-color: #5e5e5e">Member</code>, then you don't need to change any settings.
:::

<template-ExpandSection />

<template-MoreImages section="section" />

With this add-on you can set a rank that it will show for players who don't have a rank.

For example you can make it so that if a player does not have a rank, then their rank will be <code style="color: #55FFFF; background-color: #5e5e5e">Member</code>.

<Spoiler title="v1.33.0+">

<template-EmptySection />

</Spoiler>

<Spoiler title="Versions 1.32.1 and below">

1. Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../items/main-menu)).
2. Click on [Settings](../settings/settings).
3. Click on [Chat Ranks](../settings/chat-ranks)
4. Scroll down until you find the option labeled ["Default Rank Template String For Players With No Rank"](../settings/chat-ranks#default-rank-template-string-for-players-with-no-rank).
5. Set that to the rank you want. Note: The brackets are not included automatically, you must specify them in this option.
   ex. <code style="color: #FFFFFF; background-color: #5e5e5e; font: Mojangles">[<span style="color: #153F3F">§b</span><span style="color: #55FFFF">Member</span><span style="color: #3F3F3F">§r§f</span>]</code>

</Spoiler>

</Spoiler>

## Giving Players Chat Ranks

To give a player a chat rank, give them a tag in this format: `rank:Rank Text Here`.

For example: `rank:§cAdmin§r`

You can also just do `\rank @s add §cAdmin§r`{lang=mccmd}.

To remove the rank, just remove the tag.

## Changing Players Names in the Chat

To change a player's name in the chat, give them a tag in this format: `sudo:Chat Name Here`.

For example: `sudo:§4Herobrine§r`

To reset their name back to normal again, just remove the tag.

Note: If you have the name tag modifications enabled, this will also change the name displayed on their name tag. If you only want it to affect their name in the chat, replace `sudo:` at the beginning of the tag with `chatSudo:`.

## Changing a Player's Name and Message Color in the Chat

<template-EmptySection />

## Making the Dimension of a Player Visible in the Chat

To make a player's dimension visible in the chat, just give them the `config:dimension` tag.

## Making Message Timestamps Visible in the Chat.

### Making Message Timestamps Visible to Everyone

To make message timestamps visible to everyone in the chat, all you have to do is enable a simple settings option.

<Spoiler title="v1.33.0+">

<template-MoreImages section="section" />

1.  Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../items/main-menu)).
2.  Click on "Settings".
3.  Click on "Chat & Name Tags Settings".
4.  Click on "Chat Settings".
5.  Click on "Chat Style Settings".
6.  Enable "Show Message Timestamps In Chat".

</Spoiler>

<Spoiler title="Versions 1.32.1 and below">

<template-MoreImages section="section" />

1.  Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../items/main-menu)).
2.  Scroll down and click "Settings".
3.  Click on "Chat Ranks Settings".
4.  Scroll down until you find the toggle named "Show Message Timestamps In Chat", and enable it.

</Spoiler>

### Making Message Timestamps Only Visible to You

To make the message timestamps only visible to you in the chat, all you have to do is give yourself the `chatDisplayTimeStamps` tag.

If you want to make the message timestamps visible to everyone EXCEPT for you, just follow the instructions in the [Making Message Timestamps Visible to Everyone](#making-message-timestamps-visible-to-everyone) section, then once you have done that, give yourself the `hideChatDisplayTimeStamps` tag.

## Muting Players

<template-EmptySection />

## Further Customization

<template-EmptySection />
