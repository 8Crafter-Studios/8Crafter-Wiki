---
title: Ore UI Customizer
page_title: 8Crafter's Ore UI Customizer
category: Released
description: 8Crafter's Ore UI Customizer
tags:
    - nodejs_Web
# nav_order: 4
thumbnail_url: https://wiki.8crafter.com/main/assets/images/nodejs_program_cover_art/ore-ui-customizer.png
mentions:
    - Andexter8
---

<img src="/assets/images/icons/missing_pack_icon.png" alt="8Crafter's Ore UI Customizer Cover Art" title="8Crafter's Ore UI Customizer Cover Art">

<br>

<Button link="https://www.8crafter.com/utilities/ore-ui-customizer">Web App</Button>

<Button link="https://github.com/8Crafter-Studios/8Crafter.github.io">GitHub</Button>

<br>

This is a web application that allows you to customize Ore UI in Minecraft Bedrock Edition.

This currently only works on PC and Android, unless you jailbreak your device.

Even though this web application is part of [8Crafter's website](https://www.8crafter.com), you can also use it offline if you are able to use Node.js by just running my website on your device with Node.js. You just clone the repository to your device and run the index.js file. Then you can navigate to the page as normal.

Even though this web application fetches files, the files are loaded from the website, so downloading the respository will download the files too, so it will still work fully offline, and it will load much faster too, as all the resources are already on your device, the reason this works is because it fetches using relative urls, not static urls, so if you are running it on [http://localhost:8213](http://localhost:8213), then it will load the resources from [http://localhost:8213](http://localhost:8213) and not from [https://www.8crafter.com](https://www.8crafter.com).

When you run this web application locally on your device, it will run on port `8213` by default, so you can access it by going to [http://localhost:8213/utilities/ore-ui-customizer.html](http://localhost:8213/utilities/ore-ui-customizer.html) on the device it is running on, or to access it from another device on your local network, just find your device's local IP address and go to [http://IP_ADDRESS:8213/utilities/ore-ui-customizer.html](http://IP_ADDRESS:8213/utilities/ore-ui-customizer.html) (replace `IP_ADDRESS` with your local IP address).

## Main Features

It has many features, such as:
- Adding many custom menus to Ore UI, including but not limited to:
    - 8Crafter Utilities Menu
        - Has many tabs, including:
            - General
                - Shows current version and configuration used when the customizer was used to customize your Ore UI.
            - UIs
                - Has buttons to open the other custom menus.
                    - Very usefull if you are on Android, because you can't use the keyboard shortcuts to open the other custom menus.
            - About
                - Shows the current version of the customizer.
                - Shows the link to the webpage for the customizer.
                - Has contact information, including:
                    - Discord Server
                    - GitHub Repository
                    - Email
        - Accessed with a button on the right side of the title bar, or with the `CTRL+ALT+SHIFT+M` shortcut.
    - Small Corner Debug Overlay
        - Shows debug info about mouse movement and held keys.
        - Accessed with the `CTRL+I` shortcut.
    - Full JavaScript Console
        - It is very advanced and has a lot of the features from the devtools console, including:
            - Expanding objects and functions.
                - It shows all properties and symbols, as well as the `__proto__`{lang=js} property (It shows as `[[Prototype]]`, just like in the devtools console).
            - Logging console logs, debugs, errors, and warnings (with color coding).
            - The consolas font.
            - The little note that appears when you expand and object or function, that says "This value was evaluated upon first expanding. It may have changed since then.".
            - etc.
        - Accessed with the `CTRL+ALT+C` shortcut.
    - View HTML Source Menu
        - Accessed with the `CTRL+U` shortcut.
    - Element Details Overlay
        - Shows lots of information about the element that you are hovering over.
        - Shows the element's full CSS path.
        - Shows the element's number of children.
        - Shows the element's number of children, evaluated recursively.
        - Shows the element's client bounding box details (`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, `height`).
        - Shows the element's attributes.
        - Accessed with the `CTRL+ALT+I` shortcut.
    - CSS Editor
        - Allows for editing the CSS of an element.
        - Allows for editing the Global CSS style sheet.
        - Allows for editing the CSS styles of the `#root`{lang=css} element (The element that contains all the vanilla Ore UI, the custom menus from the customizer are outside of this element).
        - Accessed with the `CTRL+P` shortcut.
    - etc.
- Adds the debug tab to the create and edit world screens.
- Adds a bunch of new stuff to the debug tab.
- Allows for changing the world seed through the debug tab.
- Makes the hardcore mode toggle able to be enabled or disabled at any time.
- Makes experimental toggles able to be disabled, even after the world has been saved with them on.
- Makes the `Education Edition` toggle able to disabled, even after the world has been saved with it on.
- Increases the maximum character limit for all text boxes.
- Adds options for you to set the default game mode of your world to `Spectator` or `Default` (Setting it to `Default` breaks a lot of stuff).
    - It also makes the `Adventure` game mode able to be set as the default game mode on the create world screen (Normally you can only do that on the edit world screen).
- Adds the world generator type dropdown to the advanced tab of the create and edit world screens.
    - It lets you choose from the following world generator types:
        - Legacy
        - Infinite World
        - Flat World
        - Void World
- Lets you replace all the colors in the Ore UI, so you can create your own custom theme.
    - It even has a preview in the customizer options for what the chosen colors will look like in-game.
- And so much more!

<style>
    .video-container {
  position: relative;
  /* padding-bottom: 56.25%; */ /* 16:9 */
  /* height: 0; */
  width: 100%;
  aspect-ratio: 16 / 9;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<div class="video-container">
    <iframe
        src="https://www.youtube.com/embed/tvWmJdXBsN4?si=UDUybhkuxKYplfcl"
        title="How to Import .mcstructure Files into Worlds and Realms on MCBE (Mobile and PC)"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        style="width: 100%; height: 100%"
    ></iframe>
</div>

## Next

<Button link="https://www.8crafter.com/utilities/ore-ui-customizer" target="_self">
    Next: 8Crafter's Ore UI Customizer Website
</Button>
