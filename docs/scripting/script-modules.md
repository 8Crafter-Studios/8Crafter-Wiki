---
title: Script Modules
category: General
mentions:
	- cda94581
---

::: warning
The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.21.20
:::

## Overview

Script API has modules for developers to interact with Minecraft. Additionally, manifest dependencies will need to be set based on the modules used within your add-on.

|             Module Name             |    Valid Versions (As of 1.21.30)   |         Previous Names          |  First Module Version   | Description |
| ----------------------------------- | ----------------------------------- | ------------------------------- | ----------------------- | ----------- |
| `@minecraft/common`                 | `1.0.0`, `1.1.0`, `1.2.0`           |                                 | `Engine 1.20.40`      | Module for shared resource such as Errors, Interfaces ... |
| `@minecraft/debug-utilities`        | `1.0.0-beta`                        |                                 | `Engine 1.20.70`      | Core module to manipulate a Minecraft world, including entities, blocks, dimensions, and more. |
| `@minecraft/server`                 | `1.0.0`, ..., `1.14.0`, `1.15.0-beta`, `0.1.0`, `2.0.0-alpha`  | `Minecraft`, `mojang-minecraft` | `Engine 1.16.210` | Core module to manipulate a Minecraft world, including entities, blocks, dimensions, and more. |
| `@minecraft/server-ui`              | `1.0.0`, ..., `1.3.0`, `1.4.0-beta` | `mojang-minecraft-ui`           | `Engine 1.18.20`      | A module that provides ways to show dialogs & custom-built forms to players. |
| `@minecraft/server-gametest`        | `1.0.0-beta`, `0.1.0`               | `GameTest`, `mojang-gametest`   | `Engine 1.16.210`     | A module that provides a scaffolding toolset for you to build, test, and run your custom add-ons and worlds. |
| `@minecraft/server-net`             | `1.0.0-beta`                        | `mojang-net`                    | `Engine 1.19.10`      | BDS module for executing HTTP-based requests. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds. |
| `@minecraft/server-admin`           | `1.0.0-beta`                        | `mojang-minecraft-server-admin` | `Engine 1.19.10`      | BDS module for configuration of variables and secrets. This module is only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on realms and worlds. |
| `@minecraft/server-editor-bindings` | `1.0.0-beta`                        |                                 | `Engine 1.19.80`      |
| `@minecraft/server-editor`          | `1.0.0-beta`                        |                                 | `Engine 1.19.80`      |


## Script Versioning

Script API modules all have their own versions and since 1.19.20 they follow semantic versioning (which follows the format of X.Y.Z) to determine new features that have released into the API. You can learn how Minecraft script module versioning works [here](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning)

-   Before 1.19.20

    All API modules use `[ 0, 1, 0 ]`. GameTest Framework experiment must be activated to use in world.

-   1.19.20+

    All API modules have their versions incremented to `"1.0.0-beta"`, new features/changes are available in the beta version, and `0.1.0` has old developments and features in the API. GameTest Framework experiment must be activated to use in world.

-   1.19.50+

    **Stable API modules**, these do not require the Beta APIs experiment to be turned on. The initial API set is narrow, but more features will be added over the coming months.

    -   `@minecraft/server`:
        -   [1.0.0](https://stirante.com/script/1.0.0/)

    **Beta API modules**, requires the Beta APIs experiment to be turned on in world settings, with lots of experimental features in the API.

    -   `@minecraft/server`:

        -   `1.1.0-beta`
        -   `0.1.0` (use `mojang-minecraft`, NOT `@minecraft/server` when importing module for this version)

    -   `@minecraft/server-ui`:
        -   `1.0.0-beta`
        -   `0.1.0` (use `mojang-minecraft-ui`, NOT `@minecraft/server-ui` when importing module for this version)
    -   `@minecraft/server-gametest`:

        -   `1.0.0-beta`

    -   `@minecraft/server-net`:

        -   `1.0.0-beta` (Bedrock Dedicated Server module only, must enable in `permission.json`)

    -   `@minecraft/server-admin`:
        -   `1.0.0-beta` (Bedrock Dedicated Server module only)

-   1.19.80+

    -   New stable release in `@minecraft/server`:

        -   Release stable version [1.1.0](https://stirante.com/script/1.1.0/)
        -   Incremented beta version to [1.2.0-beta](https://stirante.com/script/1.2.0-beta.1.19.80-stable/index.html)

    -   New API modules: `@minecraft/server-editor` and `@minecraft/server-editor-bindings`

-   1.20.0

    -   New stable release in `@minecraft/server`:

        -   Release stable version [1.2.0](https://stirante.com/script/1.2.0/)
        -   Incremented beta version to [1.3.0-beta](https://stirante.com/script/1.3.0-beta.1.20.0-stable/index.html)

    -   New stable API module: `@minecraft/server-ui`.

        -   Release stable version `1.0.0`
        -   Incremented beta version to `1.1.0-beta`
-   1.20.10+
    -   New stable release in `@minecraft/server`:
        -   Release stable version [1.3.0](https://stirante.com/script/1.3.0/)
        -   Incremented beta version to [1.4.0-beta](https://stirante.com/script/1.4.0-beta.1.20.10-stable/index.html)

As of release 1.19.30, you can also specify dependencies using the `module_name`:

::: warning
Do not add `"uuid"` and `"module_name"` properties into dependency, add one or the other.
:::

<CodeHeader>BP/manifest.json#dependencies[0]</CodeHeader>

```json
{
	"module_name": "@minecraft/server",
	"version": "1.4.0-beta"
}
```

(Beta 1.19.40.23+) In order to use the `eval()` function or `Function()` constructors, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"script_eval"
	]
}
```

(1.19.80+, Preview only) In order to use the editor extensions, you can add the following in the manifest capabilities:

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
	"capabilities": [
		"editorExtension"
	]
}
```
