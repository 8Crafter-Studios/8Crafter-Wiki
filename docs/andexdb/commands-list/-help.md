---
title: \help
page_title: \help
description: The \help command.
show_outline: false
category: Main
---

Provides help.

<CommandDetailsTable
    name="\help"
    :categories="[
        'misc'
    ]"
    :requiredTags="[]"
    ultraSecurityModeSecurityLevel="everyone"
    version="33.5.2"
    :undoSupported="-1"
    :functional="true"
    :deprecated="false"
/>

## Syntax

`\help`{lang=andexdbcmd}

<indent>Displays all the syntaxes of the `\help` command.</indent>

`\help scriptevent`{lang=andexdbcmd}

<indent>Displays help info for some of the `/scriptevent` commands.</indent>

`\help cmd <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command.</indent>

`\help command <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command.</indent>

`\help cmdextra <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with extra information.</indent>

`\help commandextra <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with extra information.</indent>

`\help cmddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug information.</indent>

`\help commanddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug information.</indent>

`\help cmddebugplus <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug and extra information.</indent>

`\help commanddebugplus <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one command, with debug and extra information.</indent>

`\help customcmddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one custom command.</indent>

`\help customcommanddebug <command: CommandName>`{lang=andexdbcmd}

<indent>Shows usages for one custom command.</indent>

`\help chatcommands`{lang=andexdbcmd}

<indent>Lists all commands.</indent>

`\help chatcommandsb`{lang=andexdbcmd}

<indent>
    DEPRECATED! Lists syntaxes for the commands in the add-on (This sub-command is no longer updated
    so it is very outdated).
</indent>

`\help javascriptfunctions`{lang=andexdbcmd}

<indent>
    DEPRECATED! Lists all available javascript functions, constants, variables, and classes (This
    sub-command is no longer updated so it is very outdated).
</indent>

`\help js <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

<indent>
    Gets the source code of a specific javascript function, constant, variable, or class.
</indent>

`\help jsfunction <JavaScriptFunctionVariableConstantOrClassName: string>`{lang=andexdbcmd}

<indent>
    Gets the source code of a specific javascript function, constant, variable, or class.
</indent>

`\help itemjsonformat`{lang=andexdbcmd}

<indent>
    Displays the documentation on the item json format, this is used with things like the
    <a href="./-givec">
        <code>[\givec]</code>
    </a>
    .
</indent>

`\help itemjsonformatcmpr`{lang=andexdbcmd}

<indent>
    Displays the documentation on the item json format, in a more compressed format, this is used
    with things like the
    <a href="./-givec">
        <code>[\givec]</code>
    </a>
    .
</indent>

`\help itemjsonformatsimplified`{lang=andexdbcmd}

<indent>
    Displays the simplified documentation on the item json format, this is used with things like the
    <a href="./-givec">
        <code>[\givec]</code>
    </a>
    .
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
            <td align="center" rowspan="1">
                <code lang="andexdbcmd">
                \help cmd &lt;command: CommandName&gt;
                <br>
                \help command &lt;command: CommandName&gt;
                <br>
                \help cmdextra &lt;command: CommandName&gt;
                <br>
                \help commandextra &lt;command: CommandName&gt;
                <br>
                \help cmddebug &lt;command: CommandName&gt;
                <br>
                \help commanddebug &lt;command: CommandName&gt;
                <br>
                \help cmddebugplus &lt;command: CommandName&gt;
                <br>
                \help commanddebugplus &lt;command: CommandName&gt;
                <br>
                \help customcmddebug &lt;command: CommandName&gt;
                <br>
                \help customcommanddebug &lt;command: CommandName&gt;
                <br>
                \help js &lt;JavaScriptFunctionVariableConstantOrClassName: string&gt;
                <br>
                \help jsfunction &lt;JavaScriptFunctionVariableConstantOrClassName: string&gt;
                </code>
            </td>
            <td>
                The command is incomplete, or any argument is not specified correctly.
            </td>
            <td align="center" rowspan="1" class="tc-unknown"> Unparseable</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">
                <code>/help &lt;command&gt;</code>
            </td>
            <td>
                <code>&lt;command&gt;</code> is invalid.
            </td>
            <td align="center" rowspan="1" class="tc-no"> Failed</td>
        </tr>
        <tr>
            <td align="center" rowspan="1">Any</td><td align="center" class="tc-yes">Otherwise</td>
            <td align="center" class="tc-yes" colspan="2">Successful</td>
        </tr>
    </tbody>

</table>

## History
