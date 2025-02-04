<script setup lang="ts">
const props = defineProps<{
  details?: string;
}>();
</script>
<template>
  <div class="msgbox searchaux msgbox-mini msgbox-orange" style="max-width: 50em">
    <div class="msgbox-icon">
      <div class="msgbox-image nomobile" style="">
        <span class="mw-valign-text-top" typeof="mw:File">
          <img
            src="/assets/images/icons/Open_Barrel_(U)_JE1_BE1.png"
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
      <div style="font-weight: bold; display: inline">This section needs expansion.</div>
      &nbsp;
      <div class="msgbox-text">
        You can help by expanding it.
        <br v-if="!!props.details" />
        <i v-if="!!props.details">{{ !!props.details ? "Instructions: " + props.details : "" }}</i>
      </div>
    </div>
  </div>
</template>
