<script setup lang="ts">
const props = defineProps<{
  section?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' documents a feature that has been officially scrapped.'
    "
    text="This feature is unlikely to be added to the add-on in the foreseeable future."
    image="/assets/images/icons/Lava_Bucket_JE2_BE2.png"
    class="msgbox-blue"
  />
</template>
