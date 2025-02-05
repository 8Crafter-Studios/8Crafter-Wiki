---
title: TPA System
nav_order: 4
description: The add-on's TPA system.
mentions:
    - Andexter8
---

Any player can use the TP request system, regardless of permissions. The TP request system is disabled by default, so make sure to turn it on in settings.

## How to enable the TPA system

1. Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../general/items#Main-Menu)).
2. Scroll down and click "Settings".

    ![Main Menu - Hovering Over Settings Button](../public/assets/images/systems/tpa/main_menu-hovering_over_settings_button.png)

3. Scroll down and click "TPA System Settings".

    ![Settings - Hovering Over TPA System Settings Button](../public/assets/images/systems/tpa/settings-hovering_over_tpa_system_settings_button.png)

4. Enable the [`Enable TPA System`](../settings/tpa-system#enable-tpa-system) toggle.

    ![Settings - TPA System Settings - Hovering Over Enalbed "Enable TPA System" Toggle](../public/assets/images/systems/tpa/settings-tpa_system_settings-hovering_over_enabled_enable_tpa_system_toggle.png)

5. Click the "Save" button.

    ![Settings - TPA System Settings - Hovering Over Save Button](../public/assets/images/systems/tpa/settings-tpa_system_settings-hovering_over_save_button.png)

## How to use the TPA/teleport request system

-   Use `\tpa <player: target>`{lang=acmd} to request to teleport to a player (ex. ` `{lang=mcfunction noRightCodeBlock=true}[`\tpa`{lang=mcfunction noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpa) `Andexter8`{lang=mcfunction noLeftCodeBlock=true} or ` `{lang=mcfunction noRightCodeBlock=true}[`\tpa`{lang=mcfunction noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpa) `@r`{lang=mcfunction noLeftCodeBlock=true}). This will send a message to that player. If they type `n` in chat or do nothing for 1 minute, the request will be denied. If they type `y` in chat, you will be teleported to them.
-   You can configure a [PVP cooldown](../settings/general#pvp-cooldown) in settings, this will cause the players to be unable to use any of the teleport commands (ex. [`\tpa`{lang=acmd}](../commands-list/-tpa), [`\spawn`{lang=acmd}](../commands-list/-spawn), and [`\home`{lang=acmd}](../commands-list/-home)) for the specified amount of time after they are hit by another player.
