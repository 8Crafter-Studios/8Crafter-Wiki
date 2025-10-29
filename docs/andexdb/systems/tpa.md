---
title: TPA System
nav_order: 4
description: The add-on's TPA system.
mentions:
    - 8Crafter
---

:::info

This page only applies to versions v1.35.0 and above of the add-on.

If you are using a version prior to v1.35.0, please see the [TPA System (Pre 1.35.0)](<../systems/tpa_(Pre_1.35.0)>) page.

:::

Any player can use the TP request system, regardless of permissions.

The TP request system can be disabled in settings, but it is enabled by default.

## How to enable or disable the TPA system

1. Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../items/main-menu)).
2. Click "Settings".

    ![Main Menu - Hovering Over Settings Button](../public/assets/images/systems/tpa/main_menu-hovering_over_settings_button.png)

3. Scroll down and click "TPA System Settings".

    ![Main Menu > Settings - Hovering Over TPA System Settings Button](../public/assets/images/systems/tpa/settings-hovering_over_tpa_system_settings_button.png)

4. Enable or disable the [`Enable TPA System`](../settings/tpa-system#enable-tpa-system) toggle.

    ![Main Menu > Settings > TPA System Settings - Hovering Over Enabled "Enable TPA System" Toggle](../public/assets/images/systems/tpa/settings-tpa_system_settings-hovering_over_enabled_enable_tpa_system_toggle.png)

5. Click the "Save" button.

    ![Main Menu > Settings > TPA System Settings - Hovering Over Save Button](../public/assets/images/systems/tpa/settings-tpa_system_settings-hovering_over_save_button.png)

## How to use the TPA/teleport request system

### Sending a teleport request

#### Option 1: Using a command

Use the [`\tpa <player: target>`{lang=acmd}](../commands-list/-tpa) command (ex. ` `{lang=mccommand noRightCodeBlock=true}[`\tpa`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpa) `Andexter8`{lang=mccommand noLeftCodeBlock=true} or ` `{lang=mccommand noRightCodeBlock=true}[`\tpa`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpa) `@r`{lang=mccommand noLeftCodeBlock=true}).

#### Option 2: Using the player menu

1. Open the player menu (use the [`\playermenu`{lang=acmd}](../commands-list/-playermenu.md) command or the [Player Menu](../items/player-menu) item).
2. Click "TPA".

    ![Player Menu - Hovering Over TPA Button](../public/assets/images/systems/tpa/player_menu-hovering_over_tpa_button.png)

3. Click "Send Teleport Request".

    ![Player Menu > TPA - Hovering Over Send Teleport Request Button](../public/assets/images/systems/tpa/player_menu-tpa-hovering_over_send_teleport_request_button.png)

4. Select the player to teleport to.

    ![Player Menu > TPA > Send Teleport Request - Hovering Over Player To Teleport To](../public/assets/images/systems/tpa/player_menu-tpa-send_teleport_request-hovering_over_player_to_teleport_to.png)

### Accepting a teleport request

#### Option 1: Using a command

Use the [`\tpaccept <player: target>`{lang=acmd}](../commands-list/-tpaccept) command (ex. ` `{lang=mccommand noRightCodeBlock=true}[`\tpaccept`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpaccept) `Andexter8`{lang=mccommand noLeftCodeBlock=true} or ` `{lang=mccommand noRightCodeBlock=true}[`\tpaccept`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpaccept) `@a`{lang=mccommand noLeftCodeBlock=true}).

#### Options 2: Using the player menu

1. Open the player menu (use the [`\playermenu`{lang=acmd}](../commands-list/-playermenu.md) command or the [Player Menu](../items/player-menu) item).
2. Click "TPA".

    ![Player Menu - Hovering Over TPA Button](../public/assets/images/systems/tpa/player_menu-hovering_over_tpa_button.png)

3. Click "Incoming".

    ![Player Menu > TPA - Hovering Over Incoming Button](../public/assets/images/systems/tpa/player_menu-tpa-hovering_over_incoming_button.png)

4. Select the player you want to accept the teleport request from.

    ![Player Menu > TPA > Incoming - Hovering Over Player To Accept Teleport Request From](../public/assets/images/systems/tpa/player_menu-tpa-incoming-incoming-hovering_over_player_to_accept_teleport_request_from.png)

5. Click "Accept Request".

    ![Player Menu > TPA > Incoming > Teleport Request Details - Hovering Over Accept Request Button](../public/assets/images/systems/tpa/player_menu-tpa-incoming-teleport_request_details-hovering_over_accept_request_button.png)

### Declining a teleport request

#### Option 1: Using a command

Use the [`\tpdeny <player: target>`{lang=acmd}](../commands-list/-tpdeny) command (ex. ` `{lang=mccommand noRightCodeBlock=true}[`\tpdeny`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpdeny) `Andexter8`{lang=mccommand noLeftCodeBlock=true} or ` `{lang=mccommand noRightCodeBlock=true}[`\tpdeny`{lang=mccommand noLeftCodeBlock=true noRightCodeBlock=true}](../commands-list/-tpdeny) `@a`{lang=mccommand noLeftCodeBlock=true}).

#### Options 2: Using the player menu

1. Open the player menu (use the [`\playermenu`{lang=acmd}](../commands-list/-playermenu.md) command or the [Player Menu](../items/player-menu) item).
2. Click "TPA".

    ![Player Menu - Hovering Over TPA Button](../public/assets/images/systems/tpa/player_menu-hovering_over_tpa_button.png)

3. Click "Incoming".

    ![Player Menu > TPA - Hovering Over Incoming Button](../public/assets/images/systems/tpa/player_menu-tpa-hovering_over_incoming_button.png)

4. Select the player you want to decline the teleport request from.

    ![Player Menu > TPA > Incoming - Hovering Over Player To Accept Teleport Request From](../public/assets/images/systems/tpa/player_menu-tpa-incoming-incoming-hovering_over_player_to_accept_teleport_request_from.png)

5. Click "Decline Request".

    ![Player Menu > TPA > Incoming > Teleport Request Details - Hovering Over Decline Request Button](../public/assets/images/systems/tpa/player_menu-tpa-incoming-teleport_request_details-hovering_over_decline_request_button.png)

## Configuration Options

-   You can change the [amount of time before a teleport request times out](../settings/tpa-system#seconds-until-teleport-request-times-out) in settings (Main Menu > Settings > TPA System Settings).
-   You can configure a [PVP cooldown](../settings/teleport-systems#pvp-cooldown-to-teleport) in settings, this will cause the players to be unable to use any of the teleport commands (ex. [`\tpa`{lang=acmd}](../commands-list/-tpa), [`\spawn`{lang=acmd}](../commands-list/-spawn), and [`\home`{lang=acmd}](../commands-list/-home)) for the specified amount of time after they are hit by another player (Main Menu > Settings > Teleport Systems Settings).
-   You can configure a [Teleport Cooldown](../settings/teleport-systems#teleport-cooldown) in settings, this will cause the players to be unable to teleport for the specified amount of time after they teleport (Main Menu > Settings > Teleport Systems Settings).
-   You can configure a [Stand Still Duration](../settings/teleport-systems#stand-still-time-to-teleport) in settings, this will cause the players to have to stand still for the specified amount of time before they can teleport, if they move then the teleportation will be canceled (Main Menu > Settings > Teleport Systems Settings).
