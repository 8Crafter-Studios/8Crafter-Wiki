---
title: Anti-Spam System
nav_order: 4
description: The add-on's anti-spam system.
mentions:
    - Andexter8
---

## How to use the anti-spam system

1.  Open the [Main Menu](../main-menu/main-menu) (use the [`\mainmenu`{lang=acmd}](../commands-list/-mainmenu.md) command or the [Main Menu stick](../general/items#Main-Menu)).
2.  Scroll down and click "Moderation".

    ![Main Menu - Hovering Over Moderation Button](/assets/images/systems/main_menu-hovering_over_moderation_button.png)

3.  Click on "Anti-Spam"

    ![Moderation - Hovering Over Anti-Spam Button](/assets/images/systems/anti-spam/moderation-hovering_over_anti-spam_button.png)

---

-   The toggle at the top turns on and off the anti-spam system, which will mute players who send too many messages too fast. Note that commands do not count as messages, but all other chat types do (sending unique messages at a fast pace will also trigger the system).

    ![Enabled Option](/assets/images/systems/anti-spam/anti-spam_settings-enabled_option.png)

-   The "Wait Time" box contains the amount of time (in seconds) that players will be muted for after triggering the anti-spam.

    ![Mute Duration Option](/assets/images/systems/anti-spam/anti-spam_settings-mute_duration_option.png)

-   The "Maximum Time Between Messages" box contains the amount of time (in seconds) that players need to wait between messages in order to not trigger the anti-spam.

    ![Maximum Time Between Messages Option](/assets/images/systems/anti-spam/anti-spam_settings-maximum_time_between_messages_option.png)

-   The "Message Count To Trigger Anti-Spam" slider sets the number of messages that must be sent too fast in order to trigger the anti-spam.

    ![Message Count To Trigger Anti-Spam Option](/assets/images/systems/anti-spam/anti-spam_settings-message_count_to_trigger_anti-spam_option.png)

-   You can make it so that specific players can bypass the anti-spam system by giving them the `canBypassAntiSpam` tag.
