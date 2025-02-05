<script setup lang="ts">
import * as md from "markdown-it";
import { useData } from "vitepress";
const { site /* , page */ } = useData();
const props = defineProps<{
  mini?: "";
  type?: string;
  class?: string;
  css?: string;
  imagecss?: string;
  width?: string;
  float?: string;
  linecol?: string;
  bgcol?: string;
  icon?: string;
  image?: string;
  imagesize?: string;
  title?: string;
  text?: string;
}>();
let color: string;
switch (props.type) {
  case "style":
  case "display":
  case "presentation":
    color = "msgbox-yellow";
    break;
  case "minor":
  case "minor-issue":
  case "content":
  case "issue":
    color = "msgbox-orange";
    break;
  case "major":
  case "major-issue":
  case "delete":
    color = "msgbox-red";
    break;
  case "organization":
  case "title":
  case "move":
    color = "msgbox-purple";
    break;
  case "details":
  case "parity":
  case "edition":
  case "upcoming":
    color = "msgbox-blue";
    break;
  case "notice":
  case "note":
  case "info":
    color = "msgbox-green";
    break;
  case "other":
    color = "msgbox-magenta";
    break;
  default:
    if (props.class?.includes("msgbox-")) {
      color = "";
    } else {
      color = "msgbox-gray";
    }
}
</script>
<template>
  <div
    :class="
      'msgbox searchaux ' +
      (props.mini != undefined ? 'msgbox-mini' : '') +
      ' ' +
      color +
      (!!props.class ? ' ' + props.class : '')
    "
    :style="
      'max-width: ' +
      (props.width ?? (props.mini != undefined ? '50em' : '90%')) +
      ';' +
      (!!props.float ? ' float: ' + props.float + ';' : '') +
      (!!props.linecol ? ' border-left: 4px solid ' + props.linecol + ';' : '') +
      (!!props.bgcol ? ' background: ' + props.bgcol + ';' : '') +
      (!!props.css ? ' ' + props.css : '')
    "
  >
    <div class="msgbox-icon">
      <div v-if="props.icon != undefined" class="msgbox-iconimage" :style="props.imagecss"></div>
      <div v-if="props.image != undefined" class="msgbox-image nomobile" :style="props.imagecss">
        <span class="mw-valign-text-top" typeof="mw:File">
          <img
            :src="
              props.image.startsWith('/assets/')
                ? site.base.slice(0, -1) + props.image
                : props.image
            "
            decoding="async"
            loading="lazy"
            :width="props.imagesize ?? (props.mini != undefined ? 16 : 32)"
            :height="props.imagesize ?? (props.mini != undefined ? 16 : 32)"
            class="mw-file-element"
          />
        </span>
      </div>
      <div class="msgbox-image nomobile" style=""></div>
    </div>
    <div style="width: 100%">
      <div v-if="props.title != undefined" style="display: contents">
        <div style="font-weight: bold; display: inline">
          {{ props.title }}
        </div>
        &nbsp;
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="props.text != undefined"
        class="msgbox-text"
        v-html="md.default().render(props.text)"
      ></div>
    </div>
  </div>
</template>
