---
title: Parameters Basics
page_title: Parameters Basics
description: The basics of the command parameters in this add-on.
nav_order: 2
---

Some examples of parameters in a command would be `[-tfsa]`, `<player: target>`, and `[name: string]` in the following command syntax:

`\examplecommand [-tfsa] <player: target[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]> [name: string[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=true,precision=20]]]`{lang=andexdbcmd}

In the syntax of a command there are multiple ways a parameter can be written out:

## Parameter Categories:

### Optional Parameters:

Optional parameters are enclosed in square brackets like this: `[name: string]`

Note: Parameters written as a dash followed by a string of characters enclosed in square brackets (ex. `[-tfsa]` or `[-z]`) is not considered an optional parameter, this is a [flags parameter](#flags-parameters).

optional parameters are optional, you can either include them or not include them, however if you do not include them then any parameters after them cannot be included either, so in the following command:

`\examplecommand <player: target> [name: string] [escapeCodesEnabled: boolean]`{lang=acmd}

If you choose not to include the name parameter, then you cannot include the escapeCodesEnabled parameter either.

So this means that this command syntax is actually like three separate syntaxes, you can do any of the following:

`\examplecommand <player: target> <name: string> <escapeCodesEnabled: boolean>`{lang=acmd}

`\examplecommand <player: target> <name: string>`{lang=andexdbcmd}

`\examplecommand <player: target>`{lang=andexdbcmd}

### Required Parameters:

Required parameters are enclosed in arrow brackets like this: `<player: target>`{lang=andexdbcmd}

Required parameters are required, the parameter must be included.

### Ignorable Parameters:

Ignorable parameters are enclosed in curly brackets like this: `{includeEntities: boolean}`{lang=andexdbcmd}

Ignorable parameters are optional, but unlike optional parameters, if you don't include them, you can still include the parameters after them, so in the following command:

`\examplecommand <player: target> {name: string} [escapeCodesEnabled: boolean]`{lang=andexdbcmd}

Even if you choose not to include the name parameter, you can still include the escapeCodesEnabled parameter either.

So this means that this command syntax is actually like four separate syntaxes, you can do any of the following:

`\examplecommand <player: target> <name: string> <escapeCodesEnabled: boolean>`{lang=andexdbcmd}

`\examplecommand <player: target> <name: string>`{lang=andexdbcmd}

`\examplecommand <player: target> <escapeCodesEnabled: boolean>`{lang=andexdbcmd}

`\examplecommand <player: target>`{lang=andexdbcmd}

### Flags Parameters:

Flags parameters are written as a dash followed by a string of characters enclosed in square brackets like this: `[-tfsa]`{lang=andexdbcmd}

For a flags parameter, it has no specified parameter type. Instead, you just either put nothing and ignore the parameter, or you put a dash followed by the flags you want to enable, each flag is its own unique character, you can type these characters in any order, and you can include any combination of them that you like, however if you put a dash there then you must include at least one flag.

So, for the parameter `[-tfsa]`{lang=andexdbcmd} you could do any of the following examples:

Nothing, `-t`, `-f`, `-s`, `-a`, `-tf`, `-ts`, `-ta`, `-ft`, `-fs`, `-fa`, `-at`, `-af`, `-as`, `-tfs`, `-tfa`, `-tsf`, `-tsa`, `-taf`, `-tas`, `-fta`, `-fts`, `-fsa`, `-fst`, `-fat`, `-fas`, `-stf`, `-sta`, `-sft`, `-sfa`, `-saf`, `-sat`, `-atf`, `-ats`, `-aft`, `-afs`, `-ast`, `-asf`, `-tfsa`, `-tfas`, `-tsfa`, `-tsaf`, `-tafs`, `-tasf`, `-ftsa`, `-ftas`, `-fsta`, `-fsat`, `-fast`, `-fats`, `-stfa`, `-staf`, `-sfta`, `-sfat`, `-satf`, `-saft`, `-atfs`, `-atsf`, `-afts`, `-afst`, `-astf`, `-asft`.

## Parameter Format:

For all parameter categories except for flags parameters, a parameter will be written in one of the following formats inside of the parameter category's bracket type:

`parameterName: parameterType`{lang=andexdbcmd}

`parameterName: parameterType[parameterRestrictions]`{lang=andexdbcmd}

Here are some examples:

-   `<name: string>`{lang=andexdbcmd}
-   `[size: number[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]`{lang=acmd}
-   `{player: target[?=@s,maxTargets=1]}`{lang=andexdbcmd}
-   `[-tfsa]`{lang=andexdbcmd}

### Parameter Restrictions:

**Parameter restrictions work as follows:**

Parameter restrictions are specified inside of square brackets after the parameter's type.

Parameter restrictions are a comma-separated list of restrictions, each restriction is formatted as `restrictionName=restrictionValue`.

An example of a parameter with parameter restrictions would be:  
`[size: number[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]`{lang=andexdbcmd}

Some commonly used restrictions include:

**?=value**

This specifies the default value for the parameter, this will be used if it is not specified.

**??=value**

This specified the value to be used for the parameter in the event of an error when parsing the parameter.

**min=number**

The minimum value of the parameter.

**max=number**

The maximum value of the parameter.

**maxLength=int**

The maximum length of the list parameter type or string parameter type.

**maxElementLength=int**

The maximum length of the strings and/or lists inside of the list parameter type.

**maxStringElementLength=int**

The maximum length of the strings inside of the list parameter type.

**maxListElementLength=int**

The maximum length of the lists inside of the list parameter type.

**escapeCodesAllowed=boolean**

Indicates whether JаvaScript escape codes are allowed.

**allowInfinity=boolean**

Indicates whether the number parameter type allows for Infinity and -Infinity to be used.

**allowNaN=boolean**

Indicates whether the number parameter type allows for NaN to be used.

**allowNegatives=boolean**

Indicates whether negative number values are allowed in the number parameter type.

**precision=int**

Indicates the precision to be used when parsing the number parameter type. This means that the actually inputted number will be that same as that number with the JаvaScript toPrecision() function ran on it with the precision set to the value of this restriction.

**canError=boolean**

Indicates whether this parameter can throw an error.

**minTargets=int**

The minimum number of targets for a target parameter type.

**maxTargets=int**

The maximum number of targets for a target parameter type.

**mustBeLowercase=boolean**

Whether this string or boolean parameter must be in all lowercase.

**mustBeUppercase=boolean**

Whether this string or boolean parameter must be in all uppercase.

**mustBeLowercase=boolean**

Whether this string or boolean parameter must be in all lowercase.

**mustBeCamelcase=boolean**

Whether this string or boolean parameter must be in all camelcase.

**mustBeTitlecase=boolean**

Whether this string or boolean parameter must be in all titlecase.

**allowMultiple=boolean**

Whether this parameter type allows for multiple items.

For an array this would determine if the array could have more than one item in it.

For a target this would mean that it could have multiple targets.

**caseSensitive=boolean**

Whether or not this parameter is case-sensitive.

**playersOnly=boolean**

Whether or not this target parameter only allows targeting players.

## Next

<Button link="./parameter-types">Next: Parameter Types</Button>
