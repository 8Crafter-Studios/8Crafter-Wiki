---
title: Color Customization
page_title: Color Customization
description: How to customize the colors of Ore UI with themes.
category: Extra
nav_order: 1
mentions:
    - 8Crafter
---

<template-WorkInProgress />
<template-InDevelopment version="v1.17.0" />
<template-Experimental />

> [!TIP]
> If you want additional color customization beyond the options in the colors menu, check out [CSS customization](css-customization).

It is highly recommended to use the following website to help with the color customization: [https://bgdocs.netlify.app/#/ore_ui_colors/home](https://bgdocs.netlify.app/#/ore_ui_colors/home)

## Ore UI Customizer App

<template-EmptySection />
<template-Planned version="v1.0.0 (App)" section="section" />

## Ore UI Customizer Website

<template-EmptySection />
<template-Planned version="v1.18.0" section="section" />

## Manual

First, create a `color_replacements.json` file in your theme folder.

Here is a sample `color_replacements.json` file that uses all the default colors:

<CodeHeader>theme/color_replacements.json</CodeHeader>

```json
{
    "$schema": "https://www.8crafter.com/schemas/ouic/theme/color_replacements.schema.json",
    "format_version": 1,
    "colorReplacements": {
        "#a0e081": "#a0e081",
        "#86d562": "#86d562",
        "#6cc349": "#6cc349",
        "#52a535": "#52a535",
        "#3c8527": "#3c8527",
        "#2a641c": "#2a641c",
        "#1d4d13": "#1d4d13",
        "#153a0e": "#153a0e",
        "#112f0b": "#112f0b",
        "#0f2b0a": "#0f2b0a",
        "#ffffff": "#ffffff",
        "#000000": "#000000",
        "#f4f6f9": "#f4f6f9",
        "#e6e8eb": "#e6e8eb",
        "#d0d1d4": "#d0d1d4",
        "#b1b2b5": "#b1b2b5",
        "#8c8d90": "#8c8d90",
        "#58585a": "#58585a",
        "#48494a": "#48494a",
        "#313233": "#313233",
        "#242425": "#242425",
        "#1e1e1f": "#1e1e1f",
        "#ff8080": "#ff8080",
        "#d93636": "#d93636",
        "#b31b1b": "#b31b1b",
        "#d54242": "#d54242",
        "#ca3636": "#ca3636",
        "#c02d2d": "#c02d2d",
        "#b62525": "#b62525",
        "#ad1d1d": "#ad1d1d",
        "#a31616": "#a31616",
        "#990f0f": "#990f0f",
        "#ffb366": "#ffb366",
        "#d3791f": "#d3791f",
        "#a65b11": "#a65b11",
        "#ffe866": "#ffe866",
        "#e5c317": "#e5c317",
        "#8a7500": "#8a7500",
        "#fff0c5": "#fff0c5",
        "#ffd783": "#ffd783",
        "#f8af2b": "#f8af2b",
        "#ce8706": "#ce8706",
        "#ae7100": "#ae7100",
        "#8cb3ff": "#8cb3ff",
        "#2e6be5": "#2e6be5",
        "#1452cc": "#1452cc",
        "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
        "rgba(0, 0, 0, 0.2)": "rgba(0, 0, 0, 0.2)",
        "rgba(0, 0, 0, 0.25)": "rgba(0, 0, 0, 0.25)",
        "rgba(0, 0, 0, 0.3)": "rgba(0, 0, 0, 0.3)",
        "rgba(0, 0, 0, 0.4)": "rgba(0, 0, 0, 0.4)",
        "rgba(0, 0, 0, 0.5)": "rgba(0, 0, 0, 0.5)",
        "rgba(0, 0, 0, 0.6)": "rgba(0, 0, 0, 0.6)",
        "rgba(0, 0, 0, 0.7)": "rgba(0, 0, 0, 0.7)",
        "rgba(0, 0, 0, 0.8)": "rgba(0, 0, 0, 0.8)",
        "rgba(0, 0, 0, 0.9)": "rgba(0, 0, 0, 0.9)",
        "rgba(0, 0, 0, 1)": "rgba(0, 0, 0, 1)",
        "rgba(255, 255, 255, 0.1)": "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.2)": "rgba(255, 255, 255, 0.2)",
        "rgba(255, 255, 255, 0.3)": "rgba(255, 255, 255, 0.3)",
        "rgba(255, 255, 255, 0.4)": "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.5)": "rgba(255, 255, 255, 0.5)",
        "rgba(255, 255, 255, 0.6)": "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.7)": "rgba(255, 255, 255, 0.7)",
        "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 0.9)": "rgba(255, 255, 255, 0.9)",
        "#FB95E2": "#FB95E2",
        "#FFB1EC": "#FFB1EC",
        "#E833C2": "#E833C2",
        "#F877DC": "#F877DC",
        "#643ACB": "#643ACB",
        "#AC90F3": "#AC90F3",
        "#9471E0": "#9471E0",
        "#8557F8": "#8557F8",
        "#7345E5": "#7345E5",
        "#5D2CC6": "#5D2CC6",
        "#4A1CAC": "#4A1CAC",
        "#050029": "#050029",
        "rgba(5, 0, 41, 0.5)": "rgba(5, 0, 41, 0.5)"
    },
    "advancedColorReplacements": {
        "menusTheme": {
            ".menus": {
                "colorsPrimary": "#3c8527",
                "colorsSecondary": "#d0d1d4",
                "colorsDestructive": "#ca3636",
                "colorsText": "#ffffff",
                "colorsMuted0": "#d0d1d4",
                "colorsMuted1": "#b1b2b5",
                "colorsDisabled": "#d0d1d4",
                "baseTextFieldColor": "#ffffff",
                "baseTextFieldPlaceholderColor": "#b1b2b5",
                "baseTextFieldDisabledColor": "#58585a",
                "baseTextFieldCaretColor": "#6cc349",
                "inputFieldPlaceholderUnderlineColor": "#ffffff",
                "inputLegendWrapperBackgroundColor": "#1e1e1f",
                "inputLegendWrapperBorderTopColor": "rgba(255, 255, 255, 0.2)",
                "inputLegendInputHintColor": "#fff",
                "buttonIconKeyboardTextColor": "#313233"
            },
            ".menus.realms": {
                "colorsPrimary": "#7345e5"
            },
            ".menus.neutral90": {
                "baseTextFieldColor": "#ffffff",
                "baseTextFieldPlaceholderColor": "#b1b2b5",
                "baseTextFieldColorDisabled": "#58585a",
                "baseTextFieldPlaceholderColorDisabled": "#58585a"
            }
        },
        "custom": {
            ".vanilla-neutral-text,.vanilla-neutral-text-interactive": {
                "color": "#ffffff"
            },
            ".vanilla-neutral-text.dimmer,.vanilla-neutral-text-interactive.dimmer": {
                "color": "#d0d1d4"
            },
            ".vanilla-neutral-text.dimmest,.vanilla-neutral-text-interactive.dimmest": {
                "color": "#b1b2b5"
            },
            ".realms-neutral80-text,.realms-neutral80-text-interactive": {
                "color": "#ffffff"
            },
            ".realms-neutral80-text.dimmer,.realms-neutral80-text-interactive.dimmer": {
                "color": "#d0d1d4"
            },
            ".realms-neutral80-text.dimmest,.realms-neutral80-text-interactive.dimmest": {
                "color": "#b1b2b5"
            },
            ".realms-neutral-text,.realms-neutral-text-interactive": {
                "color": "#ffffff"
            },
            ".realms-neutral-text.dimmer,.realms-neutral-text-interactive.dimmer": {
                "color": "#d0d1d4"
            },
            ".realms-neutral-text.dimmest,.realms-neutral-text-interactive.dimmest": {
                "color": "#b1b2b5"
            }
        }
    }
}
```

If you plan to override the CSS rules that are also listed in the `advancedColorReplacements.custom` object, then you can use the below configuration to disable the built-in custom CSS rule overrides so that you can define your own instead:

<CodeHeader>theme/color_replacements.json</CodeHeader>

```json
{
    "$schema": "https://www.8crafter.com/schemas/ouic/theme/color_replacements.schema.json",
    "format_version": 1,
    "colorReplacements": {
        "#a0e081": "#a0e081",
        "#86d562": "#86d562",
        "#6cc349": "#6cc349",
        "#52a535": "#52a535",
        "#3c8527": "#3c8527",
        "#2a641c": "#2a641c",
        "#1d4d13": "#1d4d13",
        "#153a0e": "#153a0e",
        "#112f0b": "#112f0b",
        "#0f2b0a": "#0f2b0a",
        "#ffffff": "#ffffff",
        "#000000": "#000000",
        "#f4f6f9": "#f4f6f9",
        "#e6e8eb": "#e6e8eb",
        "#d0d1d4": "#d0d1d4",
        "#b1b2b5": "#b1b2b5",
        "#8c8d90": "#8c8d90",
        "#58585a": "#58585a",
        "#48494a": "#48494a",
        "#313233": "#313233",
        "#242425": "#242425",
        "#1e1e1f": "#1e1e1f",
        "#ff8080": "#ff8080",
        "#d93636": "#d93636",
        "#b31b1b": "#b31b1b",
        "#d54242": "#d54242",
        "#ca3636": "#ca3636",
        "#c02d2d": "#c02d2d",
        "#b62525": "#b62525",
        "#ad1d1d": "#ad1d1d",
        "#a31616": "#a31616",
        "#990f0f": "#990f0f",
        "#ffb366": "#ffb366",
        "#d3791f": "#d3791f",
        "#a65b11": "#a65b11",
        "#ffe866": "#ffe866",
        "#e5c317": "#e5c317",
        "#8a7500": "#8a7500",
        "#fff0c5": "#fff0c5",
        "#ffd783": "#ffd783",
        "#f8af2b": "#f8af2b",
        "#ce8706": "#ce8706",
        "#ae7100": "#ae7100",
        "#8cb3ff": "#8cb3ff",
        "#2e6be5": "#2e6be5",
        "#1452cc": "#1452cc",
        "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
        "rgba(0, 0, 0, 0.2)": "rgba(0, 0, 0, 0.2)",
        "rgba(0, 0, 0, 0.25)": "rgba(0, 0, 0, 0.25)",
        "rgba(0, 0, 0, 0.3)": "rgba(0, 0, 0, 0.3)",
        "rgba(0, 0, 0, 0.4)": "rgba(0, 0, 0, 0.4)",
        "rgba(0, 0, 0, 0.5)": "rgba(0, 0, 0, 0.5)",
        "rgba(0, 0, 0, 0.6)": "rgba(0, 0, 0, 0.6)",
        "rgba(0, 0, 0, 0.7)": "rgba(0, 0, 0, 0.7)",
        "rgba(0, 0, 0, 0.8)": "rgba(0, 0, 0, 0.8)",
        "rgba(0, 0, 0, 0.9)": "rgba(0, 0, 0, 0.9)",
        "rgba(0, 0, 0, 1)": "rgba(0, 0, 0, 1)",
        "rgba(255, 255, 255, 0.1)": "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.2)": "rgba(255, 255, 255, 0.2)",
        "rgba(255, 255, 255, 0.3)": "rgba(255, 255, 255, 0.3)",
        "rgba(255, 255, 255, 0.4)": "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.5)": "rgba(255, 255, 255, 0.5)",
        "rgba(255, 255, 255, 0.6)": "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.7)": "rgba(255, 255, 255, 0.7)",
        "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 0.9)": "rgba(255, 255, 255, 0.9)",
        "#FB95E2": "#FB95E2",
        "#FFB1EC": "#FFB1EC",
        "#E833C2": "#E833C2",
        "#F877DC": "#F877DC",
        "#643ACB": "#643ACB",
        "#AC90F3": "#AC90F3",
        "#9471E0": "#9471E0",
        "#8557F8": "#8557F8",
        "#7345E5": "#7345E5",
        "#5D2CC6": "#5D2CC6",
        "#4A1CAC": "#4A1CAC",
        "#050029": "#050029",
        "rgba(5, 0, 41, 0.5)": "rgba(5, 0, 41, 0.5)"
    },
    "advancedColorReplacements": {
        "menusTheme": {
            ".menus": {
                "colorsPrimary": "#3c8527",
                "colorsSecondary": "#d0d1d4",
                "colorsDestructive": "#ca3636",
                "colorsText": "#ffffff",
                "colorsMuted0": "#d0d1d4",
                "colorsMuted1": "#b1b2b5",
                "colorsDisabled": "#d0d1d4",
                "baseTextFieldColor": "#ffffff",
                "baseTextFieldPlaceholderColor": "#b1b2b5",
                "baseTextFieldDisabledColor": "#58585a",
                "baseTextFieldCaretColor": "#6cc349",
                "inputFieldPlaceholderUnderlineColor": "#ffffff",
                "inputLegendWrapperBackgroundColor": "#1e1e1f",
                "inputLegendWrapperBorderTopColor": "rgba(255, 255, 255, 0.2)",
                "inputLegendInputHintColor": "#fff",
                "buttonIconKeyboardTextColor": "#313233"
            },
            ".menus.realms": {
                "colorsPrimary": "#7345e5"
            },
            ".menus.neutral90": {
                "baseTextFieldColor": "#ffffff",
                "baseTextFieldPlaceholderColor": "#b1b2b5",
                "baseTextFieldColorDisabled": "#58585a",
                "baseTextFieldPlaceholderColorDisabled": "#58585a"
            }
        },
        "custom": {
            ".vanilla-neutral-text,.vanilla-neutral-text-interactive": {
                "color": ""
            },
            ".vanilla-neutral-text.dimmer,.vanilla-neutral-text-interactive.dimmer": {
                "color": ""
            },
            ".vanilla-neutral-text.dimmest,.vanilla-neutral-text-interactive.dimmest": {
                "color": ""
            },
            ".realms-neutral80-text,.realms-neutral80-text-interactive": {
                "color": ""
            },
            ".realms-neutral80-text.dimmer,.realms-neutral80-text-interactive.dimmer": {
                "color": ""
            },
            ".realms-neutral80-text.dimmest,.realms-neutral80-text-interactive.dimmest": {
                "color": ""
            },
            ".realms-neutral-text,.realms-neutral-text-interactive": {
                "color": ""
            },
            ".realms-neutral-text.dimmer,.realms-neutral-text-interactive.dimmer": {
                "color": ""
            },
            ".realms-neutral-text.dimmest,.realms-neutral-text-interactive.dimmest": {
                "color": ""
            }
        }
    }
}
```
