<script setup lang="ts">
const props = defineProps<{
  section?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="'This ' + (props.section ?? 'page') + ' documents a feature that has been deprecated.'"
    text="This feature is not maintained and as a result may be very buggy. This feature may be removed in a future update."
    image="/assets/images/icons/Empty_Map_JE2_BE2.png"
    class="msgbox-red"
  />
</template>
