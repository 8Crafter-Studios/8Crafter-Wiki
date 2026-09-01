---
title: CSS Customization
page_title: CSS Customization
description: How to customize the CSS of Ore UI with themes.
category: Extra
nav_order: 3
mentions:
    - 8Crafter
---

<template-WorkInProgress />
<template-Planned version="v1.17.0" />
<!-- <template-InDevelopment version="v1.17.0" />
<template-Experimental /> -->

CSS customization can only be done when editing a theme manually, custom CSS for a theme cannot be edited via the Ore UI Customizer website or app.

A sample CSS file containing all the vanilla semantic token color styles can be found [here](../public/assets/misc/themes/css-customization/semantic-tokens-collection-id-vanilla.css).

Most colors in the game can be customized via that CSS file.

To start, first create a folder inside the theme folder called `styles`.

Then, create a new file in that folder, you can name it anything you want as long as it has a `.css` file extension, but for this tutorial we will call it `custom-styles.css`.

Then, if you want to modify any of the vanilla semantic token colors, you can copy the CSS rules you want to modify from the file above into the new CSS file.

Then, you can modify the CSS rules in the new CSS file to your liking.

You can also add any custom CSS rules you want to the file.

You can also have multiple CSS files in the `styles` folder.
