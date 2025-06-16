---
title: Settings
description: Settings for the wiki.
hidden: true
show_contributors: false
show_edit_link: false
show_outline: false
hide_from_algolia_search: true
---

## General Settings

<div
    class="mctogglecontainer nsel"
    ontouchstart=""
    onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked')); checkbox.trigger('change');}"
    style="display: inline-block"
>
    <input type="checkbox" class="mctoggle" id="use-animated-icon-toggle" onchange="animatedIconEnabled = this.checked" title="Use animated icon" checked>
    <div class="mctoggleswitch"></div>
    <label>Use animated icon (Disabling this may improve performance if you are having performance issues.)</label>
</div>

## Debug

<label>
    Clear cached animated icon, the animated icon is cached to improve load times, however you can
    press the button below to remove it from <code>localStorage</code>. This is useful if the icon
    needs to be updated, or if you just disabled the "Use animated icon" toggle and want to free up
    6 MB of storage space.
</label>
<br />
<label>
    Is cached:
    <span id="animated-icon-is-cached-status-indicator" style="color: yellow">
        loading...
    </span>
</label>
<br />
<button
    class="btn"
    id="clear-cached-animated-icon-button"
    type="button"
    onclick="clearCachedAnimatedIcon()"
    title="Clear cached animated icon"
>
    Clear cached animated icon
</button>
