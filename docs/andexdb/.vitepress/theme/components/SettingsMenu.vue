<script setup lang="ts">
import $ from "jquery";
import { onMounted, watchPostEffect } from "vue";

import { useMediaQuery, useStorage } from "@vueuse/core";
import useData from "../composables/data";

const { isDark } = useData();

const theme = useStorage("vitepress-theme-appearance-value", "auto");

const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

watchPostEffect(() => {
  isDark.value = theme.value === "auto" ? prefersDark.value : theme.value === "dark";
});
onMounted(async () => {
  const themeDisplayMapping = {
    get auto() {
      return window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "Auto (Dark)"
          : "Auto (Light)"
        : "Auto";
    },
    dark: "Dark",
    light: "Light",
    BlueTheme: "Blue",
  };
  const themeDisplayMappingB = {
    get auto() {
      return window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : "dark";
    },
    dark: "dark",
    light: "light",
    BlueTheme: "BlueTheme",
  };
  /**
   *
   * @param {(rule: CSSStyleDeclaration, ruleName: string, styleSheet: CSSStyleSheet)=>any} callbackfn
   * @returns
   */
  function forEachRuleCallback(
    callbackfn: (rule: CSSStyleDeclaration, ruleName: string, styleSheet: CSSStyleSheet) => any
  ) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var ix: number,
        sheet = document.styleSheets[i];
      for (ix = 0; ix < sheet.cssRules.length; ix++) {
        callbackfn(
          (sheet.cssRules.item(ix) as CSSStyleRule)?.style,
          (sheet.cssRules[ix] as CSSStyleRule).selectorText,
          sheet
        );
      }
    }
    return null;
  }
  /**
   *
   * @param {'auto'|'dark'|'light'|'BlueTheme'} theme
   */
  function changeThemeCSS(theme: "auto" | "dark" | "light" | "BlueTheme") {
    if (!["auto", "dark", "light", "BlueTheme"].includes(theme)) {
      throw new TypeError("Invalid CSS Theme Value: " + JSON.stringify(theme));
    }
    try {
      $("#themeDropdown > #dropdowncontents").find(`input[id='${theme}']`).prop("checked", true);
      $("#themeDropdownButtonSelectedOptionTextDisplay").text(themeDisplayMapping[theme]);
      $("#themeDropdownAutoOptionLabel").text(themeDisplayMapping.auto);
    } catch (e) {
      console.error(e?.toString(), (e as Error | undefined)?.stack);
    }
    forEachRuleCallback((rule: CSSStyleDeclaration) => {
      if (
        rule?.cssText?.match(
          /(?<=(?:[\n\s;{]|^)---theme-var-switcher--[a-zA-Z0-9\-_]+[\n\s]*:[\n\s]*var\([\n\s]*--[a-zA-Z0-9\-_]*)(?:light|dark|BlueTheme)(?=[a-zA-Z0-9\-_]*[\n\s]*\)[\n\s]*;?)/
        )
      ) {
        rule.cssText = rule.cssText.replaceAll(
          /(?<=(?:[\n\s;{]|^)---theme-var-switcher--[a-zA-Z0-9\-_]+[\n\s]*:[\n\s]*var\([\n\s]*--[a-zA-Z0-9\-_]*)(?:light|dark|BlueTheme)(?=[a-zA-Z0-9\-_]*[\n\s]*\)[\n\s]*;?)/g,
          theme == "auto"
            ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : theme
        );
      }
    });
    if (theme == "auto") {
      if (themeDisplayMappingB.auto == "dark") {
        $(".btn > span").addClass("preventinvert");
        $(":root").addClass("dark_theme");
        $(":root").removeClass("light_theme blue_theme");
      } else {
        $(".btn > span").removeClass("preventinvert");
        $(":root").addClass("light_theme");
        $(":root").removeClass("dark_theme blue_theme");
      }
    } else if (theme == "dark") {
      $(".btn > span").addClass("preventinvert");
      $(":root").addClass("dark_theme");
      $(":root").removeClass("light_theme blue_theme");
    } else if (theme == "light") {
      $(".btn > span").removeClass("preventinvert");
      $(":root").addClass("light_theme");
      $(":root").removeClass("dark_theme blue_theme");
    } else if (theme == "BlueTheme") {
      $(".btn > span").removeClass("preventinvert");
      $(":root").addClass("blue_theme");
      $(":root").removeClass("dark_theme light_theme");
    } else {
      $(".btn > span").removeClass("preventinvert");
      $(":root").addClass("light_theme");
      $(":root").removeClass("dark_theme blue_theme");
    }
  }
  for (const elem of $("select[name='theme']").on("change", function (this: HTMLSelectElement) {
    $("#themeDropdownButtonSelectedOptionTextDisplay").text(themeDisplayMapping[this.value]);
    changeThemeCSS(this.value as any);
    $(".themeDropdownOption > #" + this.value).prop("checked", true);
  })) {
    elem.dispatchEvent(new Event("change"));
  }
  $(".themeDropdownOption").on("click", function (this: HTMLInputElement) {
    $(this).find("input[type='radio']").prop("checked", true);
    for (const elem of $("select[name='theme']").prop(
      "value",
      $(this).find("input[type='radio']").prop("id")
    )) {
      elem.dispatchEvent(new Event("change"));
    }
  });
  $('input[name="settings_section"]').change(() => {
    try {
      const id = $('input[name="settings_section"]:checked').attr("id")?.slice(23);
      $("#settings_menu > settings_section").each((_i, section) => {
        if ($(section).attr("id")?.slice(0, -17) === id) {
          $(section).get(0)!.style.display = "";
        } else {
          $(section).get(0)!.style.display = "none";
        }
      });
    } catch (e) {
      console.error(e, (e as any)?.stack);
    }
  });
});
</script>

<template>
  <div
    id="settings_menu"
    class="overlay_page blur_behind_5px"
    aria-hidden
    style="display: none; z-index: 199; line-height: 16px; font-family: Mojangles"
  >
    <div class="use_menu_background overlay_page" style="z-index: -1; opacity: 0.5"></div>
    <div id="settings_menu_internal_options_components" style="display: none">
      <select v-model="theme" name="theme" title="Change Theme">
        <option value="auto">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
    <div
      style="border-right: 1px solid #cccccc; border-bottom: 1px solid #cccccc; position: absolute"
    >
      <button
        id="settings_left_sidebar_toggle_button"
        type="button"
        onclick="$('#settings_left_sidebar').toggle('slide'); if($(this).attr('mode')=='1'){$(this).text('Show'); $(this).attr('mode', '0');}else{$(this).text('Hide'); $(this).attr('mode', '1')}"
        class="btn nsel"
        style="float: left; width: 60px"
        ontouchstart=""
        mode="1"
      >
        Hide
      </button>
    </div>
    <div
      id="settings_left_sidebar"
      class="no_margins"
      style="
        width: 60px;
        height: -webkit-fill-available;
        margin-top: 32px;
        overflow-y: auto;
        float: left;
        border-right: 1px solid #cccccc;
      "
    >
      <label
        ontouchstart=""
        for="settings_section_radio_video"
        class="radio_button_container_label"
        style="width: -webkit-fill-available"
      >
        <input
          id="settings_section_radio_video"
          type="radio"
          name="settings_section"
          style="display: none"
          class="no-remove-disabled nsel"
          title="Video"
          checked
        />
        <div class="no-remove-disabled nsel">Video</div>
      </label>
      <label
        ontouchstart=""
        for="settings_section_radio_debug"
        class="radio_button_container_label"
        style="width: -webkit-fill-available"
      >
        <input
          id="settings_section_radio_debug"
          type="radio"
          name="settings_section"
          style="display: none"
          class="no-remove-disabled nsel"
          title="Debug"
        />
        <div class="no-remove-disabled nsel">Debug</div>
      </label>
      <!-- <label
        ontouchstart=""
        for="settings_section_radio_audio"
        class="radio_button_container_label"
        style="width: -webkit-fill-available"
      >
        <input
          id="settings_section_radio_audio"
          type="radio"
          name="settings_section"
          style="display: none"
          class="no-remove-disabled nsel"
          title="Audio"
        />
        <div class="no-remove-disabled nsel">Audio</div>
      </label> -->
    </div>
    <settings_section id="video_settings_section" class="settings_section">
      <center><h1 style="font-size: revert; margin: revert">Video Settings</h1></center>
      <!-- <div
        class="mctogglecontainer nsel"
        ontouchstart=""
        onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked'))}"
        style="display: inline-block"
      >
        <input
          id="use_noto_sans_font"
          type="checkbox"
          name="use_noto_sans_font"
          value="Use Noto Sans Font"
          class="mctoggle"
          title="use_noto_sans_font"
        />
        <div class="mctoggleswitch"></div>
        <label>Use Noto Sans Font</label>
      </div>
      <br />
      <div
        class="mctogglecontainer nsel"
        ontouchstart=""
        onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked'))}"
        style="display: inline-block"
      >
        <input
          id="filter_invert_enabled"
          type="checkbox"
          name="filter_invert_enabled"
          value="Invert Colors"
          class="mctoggle"
          title="filter_invert_enabled"
        />
        <div class="mctoggleswitch"></div>
        <label>Invert Colors</label>
      </div>
      <br />
      <div
        class="mctogglecontainer nsel"
        ontouchstart=""
        onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked'))}"
        style="display: inline-block"
      >
        <input
          id="filter_grayscale_enabled"
          type="checkbox"
          name="filter_grayscale_enabled"
          value="Grayscale"
          class="mctoggle"
          title="filter_grayscale_enabled"
        />
        <div class="mctoggleswitch"></div>
        <label>Grayscale</label>
      </div>
      <br />
      <div
        class="mctogglecontainer nsel"
        ontouchstart=""
        onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked'))}"
        style="display: inline-block"
      >
        <input
          id="filter_sepia_enabled"
          type="checkbox"
          name="filter_sepia_enabled"
          value="Sepia Filter"
          class="mctoggle"
          title="filter_sepia_enabled"
        />
        <div class="mctoggleswitch"></div>
        <label>Sepia Filter</label>
      </div>
      <br />
      <mcslider>
        <label for="hue_rotate_deg_slider">Hue Rotate Degrees: 0deg</label>
        <br />
        <input
          id="hue_rotate_deg_slider"
          name="hue_rotate_deg_slider"
          type="range"
          min="0"
          max="360"
          step="1"
          value="0"
          oninput="{let parentElement = $(this).parent().find('label'); parentElement.text(parentElement.text().replace(/(?<=Degrees: )\d+(?:\.\d+)?(?=deg)/, $(this).val()))}"
        />
      </mcslider>
      <br /> -->
      <div id="themeDropdown" class="mcdropdown nsel" style="display: inline-block">
        Theme
        <br />
        <button
          id="dropdownbutton"
          class="btn"
          type="button"
          ontouchstart=""
          style="min-width: 140px; text-align: left"
          onclick="if($(this).parent().find('#dropdowncontents').prop('hidden')){$(this).find('#cv').prop('hidden', true); $(this).find('#cvsel').prop('hidden', false); $(this).parent().find('#dropdowncontents').prop('hidden', false)}else{$(this).find('#cv').prop('hidden', false); $(this).find('#cvsel').prop('hidden', true); $(this).parent().find('#dropdowncontents').prop('hidden', true)}"
        >
          <span id="themeDropdownButtonSelectedOptionTextDisplay"
            >Auto {{ prefersDark ? "(Dark)" : "(Light)" }}</span
          >
          <div
            style="width: 11px; height: 11px; margin: 0px; padding: 0px; display: inline-block"
          ></div>
          <img
            id="cv"
            src="/assets/images/ui/dropdown/dropdown_chevron.png"
            inert
            class="nsel"
            style="right: 7px; top: 10px; position: absolute"
          />
          <img
            id="cvsel"
            src="/assets/images/ui/dropdown/dropdown_chevron_up.png"
            inert
            class="nsel"
            style="right: 7px; top: 10px; position: absolute"
            hidden
          />
        </button>
        <div id="dropdowncontents" hidden style="display: flex">
          <div style="flex-grow: 1; width: 0">
            <div class="mcdropdownoption themeDropdownOption" ontouchstart="">
              <input
                id="auto"
                type="radio"
                name="themeDropdown"
                value="auto"
                class="mcradio themeDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label id="themeDropdownAutoOptionLabel" for="auto"
                >Auto {{ prefersDark ? "(Dark)" : "(Light)" }}</label
              >
            </div>
            <div class="mcdropdownoption themeDropdownOption" ontouchstart="">
              <input
                id="dark"
                type="radio"
                name="themeDropdown"
                value="dark"
                class="mcradio themeDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="dark">Dark</label>
            </div>
            <div class="mcdropdownoption themeDropdownOption" ontouchstart="">
              <input
                id="light"
                type="radio"
                name="themeDropdown"
                value="light"
                class="mcradio themeDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="light">Light</label>
            </div>
            <!-- <div
              class="mcdropdownoption themeDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true); for (const elem of $('select[name=\'theme\']').prop('value', $(this).find('input[type=\'radio\']').prop('id'))) {elem.dispatchEvent(new Event('change'))}"
            >
              <input
                id="BlueTheme"
                type="radio"
                name="themeDropdown"
                value="BlueTheme"
                class="mcradio themeDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="BlueTheme">Blue</label>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="form-group">
        <div class="form-group-header">
          <label for="zoom_text_box">Zoom %</label>
        </div>
        <div class="form-group-body">
          <input
            id="zoom_text_box"
            type="number"
            name="zoom_text_box"
            value="100"
            placeholder="100"
            class="form-control"
            ontouchstart
            onchange="$(this).val($(this).val().replaceAll(/[^0-9\.\-]/g, ''))"
          />
        </div>
        <button
          id="confirm_zoom_change"
          ontouchstart
          type="button"
          class="btn no-remove-disabled nsel"
        >
          Confirm Zoom Change
        </button>
        <button
          id="save_zoom_change"
          ontouchstart
          type="button"
          class="btn no-remove-disabled nsel"
        >
          Save Zoom Change
        </button>
        <button
          id="reset_zoom"
          ontouchstart
          type="button"
          class="btn no-remove-disabled nsel"
          onclick="$('#zoom_text_box').val('100'); $('#confirm_zoom_change').click(); $('#save_zoom_change').click()"
        >
          Reset Zoom
        </button>
      </div> -->
      <br />
      <br />
      <div
        class="mctogglecontainer nsel"
        ontouchstart=""
        onclick="{let checkbox = $(this).find('input[type=\'checkbox\']'); checkbox.prop('checked', !checkbox.prop('checked')); checkbox.trigger('change');}"
        style="display: inline-block"
      >
        <input
          id="use-animated-icon-toggle"
          type="checkbox"
          class="mctoggle"
          onchange="animatedIconEnabled = this.checked"
          title="Use animated icon"
          checked
        />
        <div class="mctoggleswitch"></div>
        <label
          >Use animated icon (Disabling this may improve performance if you are having performance
          issues.)</label
        >
      </div>
    </settings_section>
    <settings_section id="debug_settings_section" class="settings_section">
      <center><h1 style="font-size: revert; margin: revert">Debug</h1></center>

      <label>
        Clear cached animated icon, the animated icon is cached to improve load times, however you
        can press the button below to remove it from <code>localStorage</code>. This is useful if
        the icon needs to be updated, or if you just disabled the "Use animated icon" toggle and
        want to free up 6 MB of storage space.
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
        id="clear-cached-animated-icon-button"
        class="btn"
        type="button"
        onclick="clearCachedAnimatedIcon()"
        title="Clear cached animated icon"
      >
        Clear cached animated icon
      </button>
    </settings_section>
    <!-- <settings_section id="audio_settings_section" class="settings_section">
      <center><h1>Audio</h1></center>
      <mcslider>
        <label for="master_volume_slider">Master Volume: 0%</label>
        <br />
        <input
          id="master_volume_slider"
          name="master_volume_slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="100"
          oninput="{let parentElement = $(this).parent().find('label'); parentElement.text(parentElement.text().replace(/(?<=Volume: )\d+(?:\.\d+)?(?=%)/, $(this).val()))}"
        />
      </mcslider>
      <br />
      <mcslider>
        <label for="master_volume_slider">UI Volume: 0%</label>
        <br />
        <input
          id="ui_volume_slider"
          name="ui_volume_slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="100"
          oninput="{let parentElement = $(this).parent().find('label'); parentElement.text(parentElement.text().replace(/(?<=Volume: )\d+(?:\.\d+)?(?=%)/, $(this).val()))}"
        />
      </mcslider>
      <br />
      <div
        id="defaultButtonSoundEffectDropdown"
        class="mcdropdown nsel"
        style="display: inline-block"
      >
        Default Button Sound Effect
        <br />
        <button
          id="dropdownbutton"
          class="btn"
          type="button"
          ontouchstart=""
          style="min-width: 250px; text-align: left"
          onclick="if($(this).parent().find('#dropdowncontents').prop('hidden')){$(this).find('#cv').prop('hidden', true); $(this).find('#cvsel').prop('hidden', false); $(this).parent().find('#dropdowncontents').prop('hidden', false)}else{$(this).find('#cv').prop('hidden', false); $(this).find('#cvsel').prop('hidden', true); $(this).parent().find('#dropdowncontents').prop('hidden', true)}"
        >
          <span id="defaultButtonSoundEffectDropdownButtonSelectedOptionTextDisplay"
            >Pop (Default)</span
          >
          <div
            style="width: 11px; height: 11px; margin: 0px; padding: 0px; display: inline-block"
          ></div>
          <img
            id="cv"
            src="/assets/images/ui/dropdown/dropdown_chevron.png"
            inert
            class="nsel"
            style="right: 7px; top: 10px; position: absolute"
          />
          <img
            id="cvsel"
            src="/assets/images/ui/dropdown/dropdown_chevron_up.png"
            inert
            class="nsel"
            style="right: 7px; top: 10px; position: absolute"
            hidden
          />
        </button>
        <div id="dropdowncontents" hidden style="display: flex">
          <div style="flex-grow: 1; width: 0">
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_pop"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="pop"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_pop">Pop (Default)</label>
            </div>
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_popB"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="popB"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_popB">Pop (Audio Buffer)</label>
            </div>
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_release"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="release"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_release">Release</label>
            </div>
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_releaseB"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="releaseB"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_releaseB"
                >Release (Audio Buffer)</label
              >
            </div>
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_toast"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="toast"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_toast">Toast</label>
            </div>
            <div
              class="mcdropdownoption defaultButtonSoundEffectDropdownOption"
              ontouchstart=""
              onclick="$(this).find('input[type=\'radio\']').prop('checked', true)"
            >
              <input
                id="defaultButtonSoundEffectDropdownOption_toastB"
                type="radio"
                name="defaultButtonSoundEffectDropdown"
                value="toastB"
                class="mcradio defaultButtonSoundEffectDropdownOptionInput"
              />
              <div class="mcradiocheckbox"></div>
              <label for="defaultButtonSoundEffectDropdownOption_toastB"
                >Toast (Audio Buffer)</label
              >
            </div>
          </div>
        </div>
      </div>
      <br />
    </settings_section> -->
  </div>
</template>
