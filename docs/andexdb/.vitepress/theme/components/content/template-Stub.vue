<script setup lang="ts">
const props = defineProps<{
  details?: string;
}>();
</script>
<template>
  <div class="msgbox searchaux msgbox-mini msgbox-orange" style="max-width: 90%">
    <div class="msgbox-icon">
      <div class="msgbox-image nomobile" style="">
        <span class="mw-valign-text-top" typeof="mw:File">
          <img
            src="/assets/images/icons/Dark_Oak_Sapling_(texture)_JE2_BE2.png"
            decoding="async"
            loading="lazy"
            width="32"
            height="32"
            class="mw-file-element"
          />
        </span>
      </div>
    </div>
    <div style="width: 100%">
      <div style="font-weight: bold; display: inline">This article is a stub.</div>
      &nbsp;
      <div class="msgbox-text">
        You can help by expanding it.
        <br v-if="!!props.details" />
        <i v-if="!!props.details">{{ !!props.details ? "Instructions: " + props.details : "" }}</i>
      </div>
    </div>
  </div>
</template>
