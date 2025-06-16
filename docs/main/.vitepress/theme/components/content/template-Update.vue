<script setup lang="ts">
const props = defineProps<{
  inaccurate?: any;
  section?: string;
  details?: string;
}>();
</script>
<template>
  <div
    :class="'msgbox searchaux ' + (!!props.section ? 'msgbox-mini' : '') + ' msgbox-orange'"
    :style="'max-width: ' + (!!props.section ? '50em' : '90%') + '; image-rendering: pixelated'"
  >
    <div class="msgbox-icon">
      <div class="msgbox-image nomobile" style="">
        <span class="mw-valign-text-top" typeof="mw:File">
          <img
            src="/assets/images/icons/Clock_JE3_BE3.gif"
            decoding="async"
            loading="lazy"
            :width="!!props.section ? 16 : 32"
            :height="!!props.section ? 16 : 32"
            class="mw-file-element"
          />
        </span>
      </div>
    </div>
    <div style="width: 100%">
      <div style="font-weight: bold; display: inline">
        This
        {{ !!props.section ? "section" : "page" }}
        {{
          !!props.inaccurate
            ? "'s factual accuracy may be compromised due to out-of-date information"
            : " needs to be updated."
        }}
      </div>
      &nbsp;
      <div class="msgbox-text">
        Please update this {{ props.section ?? "page" }} to reflect recent updates or newly
        available information.
        <br v-if="!!props.details" />
        <i v-if="!!props.details">{{ !!props.details ? "Reason: " + props.details : "" }}</i>
      </div>
    </div>
  </div>
</template>
