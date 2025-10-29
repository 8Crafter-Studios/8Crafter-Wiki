---
title: Add-On Releaser
page_title: 8Crafter's Add-On Releaser
category: Released
description: 8Crafter's Add-On Releaser
tags:
    - nodejs_CLI
    - nodejs_Module
    - nodejs_NPM
# nav_order: 4
thumbnail_url: https://wiki.8crafter.com/main/assets/images/nodejs_program_cover_art/add-on-releaser.png
mentions:
    - 8Crafter
---

<!-- <img src="/assets/images/nodejs_program_cover_art/add-on-releaser.png" alt="8Crafter's Add-On Releaser Cover Art" title="8Crafter's Add-On Releaser Cover Art"> -->

<!-- <br> -->

<Button link="https://github.com/8Crafter-Studios/add-on-releaser">GitHub</Button>

<Button link="https://npmjs.com/package/add-on-releaser">NPM</Button>

<br>

This is a command-line tool and node module that handles every step of generating the release files for your Minecraft Bedrock Edition add-on for you.

It is available on NPM.

## Details

[![NPM Downloads](https://img.shields.io/npm/d18m/add-on-releaser)](https://npmjs.com/package/add-on-releaser)
[![NPM Version](https://img.shields.io/npm/v/add-on-releaser)](https://npmjs.com/package/add-on-releaser)
[![NPM License](https://img.shields.io/npm/l/add-on-releaser)](https://npmjs.com/package/add-on-releaser)
[![NPM Last Update](https://img.shields.io/npm/last-update/add-on-releaser)](https://npmjs.com/package/add-on-releaser)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/add-on-releaser)](https://npmjs.com/package/add-on-releaser)
[![GitHub last commit](https://img.shields.io/github/last-commit/8Crafter-Studios/add-on-releaser)](https://github.com/8Crafter-Studios/add-on-releaser/commits/main)
[![Discord](https://img.shields.io/discord/1213197616570048512?logo=discord&label=discord&link=https%3A%2F%2Fdiscord.gg%2F8crafter-studios)](https://discord.gg/8crafter-studios)

This is a command-line tool that handles every step of generating the release files for your Minecraft Bedrock Edition add-on for you.

It can:

-   Add the files from your development behavior and resource packs into a .mcaddon file.
-   Remove development folders such as `src` and `node_modules`.
-   Remove development files such as `package.json` and `package-lock.json`.
-   Update the add-on's version number.
-   Apply any desired modifications to the release files automatically, including adding, removing, renaming, and moving file and folders.

It uses a configuration file called `add-on-releaser-config.json` to specify the options.

You can have as many packs as you want included in the .mcaddon file.

## Installation

```
npm i -g add-on-releaser
```

## CLI

```
Usage:

add-on-releaser [configPath]

Parameters:

configPath      The path to the configuration file. Defaults to "./add-on-releaser-config.json".
```

## Configuration

The schema can be accessed at: https://raw.githubusercontent.com/8Crafter-Studios/Add-On-Releaser/refs/heads/main/8crafters-add-on-releaser-config.schema.json

Here is the default configuration file (Note: You will need to modify a few options for it to work):

```json
{
    "$schema": "https://raw.githubusercontent.com/8Crafter-Studios/Add-On-Releaser/refs/heads/main/8crafters-add-on-releaser-config.schema.json",
    "cwd": "./",
    "destination": "./Release Files", // Set this to the directory you want the generated .mcaddon file to be placed in.
    "packs": [
        {
            "path": "./BP", // The path to the behavior pack.
            "release_name": "bp", // The folder name of the behavior pack in the .mcaddon file.
            "modifications": [
                {
                    "type": "delete_folders",
                    "targets": ["src", "node_modules", ".git", ".vscode", "deprecated"] // This is a list of folders that will not be included in the release files.
                },
                {
                    "type": "delete_files",
                    "targets": [
                        ".git",
                        ".eslintrc",
                        ".gitignore",
                        ".gitmodules",
                        ".hintrc",
                        ".gitattributes",
                        ".mcattributes",
                        "desktop.ini",
                        "package.json",
                        "package-lock.json",
                        "jsconfig.json",
                        "tsconfig.json",
                        "tsconfig.tsbuildinfo"
                    ] // This is a list of files that will not be included in the release files.
                }
            ]
        },
        {
            "path": "./RP", // The path to the resource pack.
            "release_name": "rp", // The folder name of the resource pack in the .mcaddon file.
            "modifications": [
                {
                    "type": "delete_folders",
                    "targets": ["node_modules", ".git", ".vscode", "deprecated", "blockbench_models"] // This is a list of folders that will not be included in the release files.
                },
                {
                    "type": "delete_files",
                    "targets": [
                        ".git",
                        ".eslintrc",
                        ".gitignore",
                        ".gitmodules",
                        ".hintrc",
                        ".gitattributes",
                        ".mcattributes",
                        "desktop.ini",
                        "package.json",
                        "package-lock.json",
                        "jsconfig.json",
                        "tsconfig.json",
                        "tsconfig.tsbuildinfo"
                    ] // This is a list of files that will not be included in the release files.
                }
            ]
        }
    ],
    "file_type": "mcaddon",
    "file_name": "myaddon-v${version}", // Set this to the name you want the .mcaddon file to have, ${version} will be replaced with the version of the pack.
    "file_name_version": {
        "format": "dashed",
        "sourcePack": "00000000-0000-4000-8000-000000000000" // Set this to the UUID of the pack you want to get the version number from.
    },
    "release_version_format": "tuple"
}
```

<!-- It is available on NPM. -->

<!-- <Button link="https://npmjs.com/package/image-corruptor" target="_self">
    Next: 8Crafter's Image Corruptor NPM
</Button> -->
