---
title: \eval
page_title: \eval
description: The \eval command.
show_outline: false
category: Main
mentions:
    - Andexter8
---

Runs the specified JavaScript / Script API code. This can be very useful for doing things such as running more advanced commands with JavaScript variables and conditions, or running commands with JavaScript escape codes(for example to put multiple lines of text in the name of an entity or use special unicode characters in commands without needing to copy and paste them into your game).

<CommandDetailsTable
    name="\eval"
    :categories="[
        'misc'
    ]"
    :requiredTags="[
        'canUseChatCommands'
    ]"
    ultraSecurityModeSecurityLevel="admin"
    version="1.1.0"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\eval <ScriptAPICode: JavaScript>`{lang=andexdbcmd}

<indent>Runs the provided JavaScript / Script API code.</indent>

## Arguments

`<ScriptAPICode: JavaScript>`{lang=andexdbcmd}: [JavaScript](../commands/parameter-types#javascript)

<indent>

The JavaScript code to run, this can be any valid JavaScript code.

</indent>

## Result

<table class="wikitable" data-description="command results">
    <tbody>
        <tr>
            <th>Command</th>
            <th>Trigger</th>
            <th>Result</th>
        </tr>
        <tr>
            <td align="center" rowspan="6">

Any

</td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td>
                An error occurs while running the provided JavaScript / Script API code.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

## Examples

-   Send a tellraw command message:
    -   `\eval`{lang=mccmd noRightCodeBlock=true}` world.sendMessage("Example message\nNew Line\nSender's Name: " + player.name + "\nToken Emoji: \uE105")`{lang=js noLeftCodeBlock=true}
        -   API Reference:
            -   [`world.sendMessage()`{lang=js}](https://api.8crafter.com/andexdb/stable/classes/_minecraft_server.World.html#sendmessage)
            -   [`player`{lang=js}](https://api.8crafter.com/andexdb/stable/classes/Globals.modules.cmds.executeCommandPlayerW.html) (Only available in the context of this command)
-   Give all players health boost with the level equal to their XP level:
    -   `\eval`{lang=mccmd noRightCodeBlock=true}` srun(()=>world.getAllPlayers().forEach((p)=>{p.addEffect("health_boost", 200, {amplifier: p.level, showParticles: false})}))`{lang=js noLeftCodeBlock=true}
        -   API Reference:
            -   [`srun()`{lang=js}](https://api.8crafter.com/andexdb/stable/functions/Globals.srun.html)
            -   [`world.getAllPlayers()`{lang=js}](https://api.8crafter.com/andexdb/stable/classes/_minecraft_server.World.html#getallplayers)
            -   [`p.addEffect()`{lang=js}](https://api.8crafter.com/andexdb/stable/classes/_minecraft_server.Player.html#addeffect)
            -   [`p.level`{lang=js}](https://api.8crafter.com/andexdb/stable/classes/_minecraft_server.Player.html#level)

## History

<template-EmptySection />
