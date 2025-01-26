---
title: Commands Basics
page_title: Commands Basics
description: The basics of the commands in this add-on.
nav_order: 1
---

For all built-in chat commands you can just type `\help` cmd followed by the name of the command and it will display what the command does, the syntax of it, and what any flag parameters on the command do. For example if you wanted to see how to use the `\giveb` command you would do `\help cmd giveb` and for the `\\replace` command you would do `\help cmd \\replace`.

## How to give players the permissions to use commands.

<Spoiler title="If Ultra Security Mode is not Enabled (Default)">

To use the majority of chat commands, you will first need to give yourself the `canUseChatCommands` tag.

To get notified whenever a player runs a chat command then just give yourself the `getAllChatCommands` tag.

Some chat commands require different tags than others, and some don't require any at all.

The tags required to use each chat command can be configured in the Manage Commands section of the Main Menu.

Most chat commands default to requiring the `canUseChatCommands` tag.

Some commands like `\home`, `\help`, and `\tpa` default to not requiring any tags to use them, so anyone can use them. However, if you don't want people using those commands you can either [change the required tags for the command](/andexdb/commands/changing-command-required-tags) or [disable the command](/andexdb/commands/disabling-commands).

You can also disable individual commands completely in the Manage Commands section of the main menu.

</Spoiler>

<Spoiler title="If Ultra Security Mode is Enabled">

If Ultra Security Mode is enabled then for someone to be able to use most of the chat commands you will first need to give them the correct permission level for the commands you want the to be able to use. Information on how to give players permissions in Ultra Security Mode is available [here](/andexdb/usm/giving-players-permissions).

Each command has its own required permission level. Unlike in Standard Security Mode, when you are using Ultra Security Mode commands don't require specific tags to use, instead the owner or someone with the `andexdb.fullControl` permission has to go into the manage players menu, select the player, and give them the permission that way.

Some commands can be used by everyone by default. However, if you don't want people using those commands you can either [change the required permission level for the command](/andexdb/usm/changing-command-required-permission-level) or [disable the command](/andexdb/commands/disabling-commands).

</Spoiler>

## Next

<Button link="./commands-parameters-basics">Next: Commands Parameters Basics</Button>
