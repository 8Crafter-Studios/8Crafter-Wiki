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
    :style="'max-width: ' + (!!props.section ? '50em' : '90%')"
  >
    <div class="msgbox-icon">
      <div class="msgbox-image nomobile" style="">
        <span class="mw-valign-text-top" typeof="mw:File">
          <img
            src="/assets/images/icons/Knowledge_Book_JE2.png"
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
        is missing information about:
        {{ props.details ?? "something that needs to be specified." }}
      </div>
      &nbsp;
      <div class="msgbox-text">
        Please expand the {{ props.section ?? "page" }} to include this information.
      </div>
    </div>
  </div>
</template>
