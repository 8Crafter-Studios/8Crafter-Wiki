---
title: Project Setup
page_title: Project Setup
description: Learn how to set up your project folders for a theme.
category: Guide
nav_order: 3
prefix: "3. "
mentions:
    - 8Crafter
---

<template-WorkInProgress />
<template-Planned version="v1.17.0" />
<!-- <template-InDevelopment version="v1.17.0" />
<template-Experimental /> -->

## The ore_ui_customizer folder

<template-EmptySection />

## Your Workspace

First of all, you will need to create the proper folders in suitable locations and set up your workspace.
_The remainder of this guide assumes you are using VSCode. You may also follow along with other editors._

Let's create your first add-on workspace in Visual Studio Code now.

1. Open VSCode (_Visual Studio Code, the code editor_)
2. Create a folder named "`your_theme_name`" in `themes`. **We will refer to this folder as `theme`** <!-- TEMP: Replace `themes` with `development_themes` once that folder exists. -->
3. Go to `File > Add folder to workspace...` and choose `theme`.
4. Press `File > Save Workspace as...` to save the workspace file to your Desktop. Whenever you're working on your theme, all you have to do is open the workspace by double-clicking, and you will get quick access to your theme folder.

## Manifest

:::tip CREATING FILES
In this guide, you will often be instructed to create files with specific names, placed in specific folders.
If the folder doesn't exist yet, please create it!
:::

The manifest is a file that identifies your pack to the Ore UI Customizer. Every pack has one manifest. A folder with a correctly formatted manifest will show up in the Ore UI Customizer, and we consider this the "minimal" pack before we can add additional content.

Manifest files are written in JSON. If this isn't familiar to you, you can learn more about json [here](/guide/understanding-json).

First, create a new file in your theme folder by right-clicking on the folder and selecting `New File`
Call the file `manifest.json` and paste the following code into the file to begin with.

<CodeHeader>theme/manifest.json</CodeHeader>

```json
{
    "format_version": 1,
    "header": {
        "name": "Your Theme Name",
        "id": "your-theme-id",
        "namespace": "your-theme-namespace",
        "description": "Your theme description.",
        "uuid": "...",
        "version": "1.0.0",
        "format_version": "1.17.0",
        "min_engine_version": "1.17.0+BUILD.8"
    },
    "metadata": {
        "authors": ["Your Name"],
        "product_type": "theme"
    }
}
```

### Manifest Explained

> [!NOTE]
> Even if the namespace+id combo isn't unique, that won't cause it to not function, it will just cause abiguity as to which of the themes that shared the namespace+id combo was being referred to in places like error messages.

-   `format_version` defines what version of manifest JSON format you are using. Version 1 is the most recent stable version; use it.

-   `name` is the name of your theme. `description` will show up under it in the Ore UI Customizer.

    <!-- We are defining these fields as _localization keys_ so we can translate them later into other languages.
    For more information about localization, look [here](/text/text-intro). -->

-   `id` is the ID of your theme. It is used to identify your theme when applying themes and to identify your theme in error messages. This should be unique when combined with the `namespace`. It must consist only of alphanumeric characters, underscores, hyphens, and periods.

-   `namespace` is the namespace of your theme. It is used in conjunction with the id to identify your theme when applying themes and to identify your theme in error messages. It must consist only of alphanumeric characters, underscores, hyphens, and periods. It must not be `built-in`, as it is reserved for built-in themes.

-   The `uuid` field is **essential**, and will be discussed in more detail below.

-   `version` defines the version of your theme.

    This allows users to import updated versions of your add-on without encountering a "Duplicate pack detected" error.
    You don't need to change the version if you have the add-on in `development_*_packs` folders and only use them on private worlds.

-   `format_version` (`header`) defines the Ore UI Customizer version that your theme was made for.
    The number specified here should match the latest version of the Ore UI Customizer that you tested it on.

-   `min_engine_version` defines the minimum Ore UI Customizer version that'll be able to use your theme.
    The number specified here should match the current version of the Ore UI Customizer, unless you're planning for backwards compatibility with older versions, in which case you should specify the earliest version of the Ore UI Customizer that your theme is compatible with. You can omit this if you don't want to prevent older versions of the Ore UI Customizer from attempting to use it.

-   In `metadata`, the `product_type` must be a product type of `"theme"`{lang=json}.

### UUID Explained

A UUID (_Universally Unique Identifier_) identifies your pack for other programs (in this case, the Ore UI Customizer) to read. It looks something like this: `5c830391-0937-44d6-9774-406de66b6984`

**NEVER USE THE SAME UUID TWICE.** You can generate your own UUIDs [here](https://www.uuidgenerator.net/version4) or, if you use VSCode, you can install [this](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension. Every manifest file has a UUID.

To ensure that your add-on will work correctly you should generate a new UUID which you will paste into the theme `manifest.json` file, at the `"..."`{lang=json}.
When you are finished, it should look something like this:

```json
"uuid": "5c830391-0937-44d6-9774-406de66b6984"
```

## Pack Structure

<!-- TODO: Move this to its own page. -->

### Development Pack Stucture

<FolderView :paths="[
    'theme/.vscode/ore-ui.css-data.json', // <!-- NOTE: Devlopment only. -->
    'theme/.vscode/settings.json', // <!-- NOTE: Devlopment only. -->
    'theme/styles/example.css',
    'theme/textures/example.gif',
    'theme/textures/assets/example.gif',
    'theme/textures/example.svg',
    'theme/textures/assets/example.svg',
    // 'theme/textures/example.tga', // <!-- TODO: See if .tga images are supported. -->
    // 'theme/textures/assets/example.tga',
    'theme/textures/example.png',
    'theme/textures/assets/example.png',
    'theme/textures/example.jpg',
    'theme/textures/assets/example.jpg',
    'theme/textures/example.jpeg',
    'theme/textures/assets/example.jpeg',
    // 'theme/sounds/example.ogg',
    // 'theme/sounds/assets/example.ogg',
    // 'theme/sounds/example.mp3',
    // 'theme/sounds/assets/example.mp3',
    // 'theme/sounds/example.wav',
    // 'theme/sounds/assets/example.wav',
    // 'theme/sounds/example.fsb',
    // 'theme/sounds/assets/example.fsb',
    'theme/videos/example.webm',
    'theme/videos/assets/example.webm',
    'theme/font/*.otf',
    'theme/font/*.ttf',
    'theme/color_replacements.json',
    'theme/manifest.json',
    'theme/pack_icon.png',
    'theme/.prettierrc', // <!-- NOTE: Devlopment only. -->
    'theme/package.json', // <!-- NOTE: Devlopment only. -->
]" />

### Publish Pack Stucture

<FolderView :paths="[
    'theme.ouictheme/styles/example.css',
    'theme.ouictheme/textures/example.gif/',
    'theme.ouictheme/textures/assets/example.gif',
    'theme.ouictheme/textures/example.svg',
    'theme.ouictheme/textures/assets/example.svg',
    // 'theme.ouictheme/textures/example.tga', // <!-- TODO: See if .tga images are supported. -->
    // 'theme.ouictheme/textures/assets/example.tga',
    'theme.ouictheme/textures/example.png',
    'theme.ouictheme/textures/assets/example.png',
    'theme.ouictheme/textures/example.jpg',
    'theme.ouictheme/textures/assets/example.jpg',
    'theme.ouictheme/textures/example.jpeg',
    'theme.ouictheme/textures/assets/example.jpeg',
    // 'theme.ouictheme/sounds/example.ogg',
    // 'theme.ouictheme/sounds/assets/example.ogg',
    // 'theme.ouictheme/sounds/example.mp3',
    // 'theme.ouictheme/sounds/assets/example.mp3',
    // 'theme.ouictheme/sounds/example.wav',
    // 'theme.ouictheme/sounds/assets/example.wav',
    // 'theme.ouictheme/sounds/example.fsb',
    // 'theme.ouictheme/sounds/assets/example.fsb',
    'theme.ouictheme/videos/example.webm',
    'theme.ouictheme/videos/assets/example.webm',
    'theme.ouictheme/font/*.otf',
    'theme.ouictheme/font/*.ttf',
    'theme.ouictheme/color_replacements.json',
    'theme.ouictheme/manifest.json',
    'theme.ouictheme/pack_icon.png',
]" />

Videos must be in the `.webm` format.
The video codec of videos must be `Google/On2's VP9 Video (VP90)`.
The audio codec of videos must be `Vorbis Audio (vorb)` (and the max supported bitrate may be 112 kb/s, but this needs to be verified) <!-- REVIEW -->

<!-- TODO: See if Ore UI supports playing audio files, and if it does support it, and see what codecs and file types it supports, and add paths for sounds. -->

---

> [!NOTE]
> Some of the contents of the [Bedrock Wiki](https://wiki.bedrock.dev)'s [Project Setup](https://wiki.bedrock.dev/guide/project-setup) guide were used to help make this guide.
