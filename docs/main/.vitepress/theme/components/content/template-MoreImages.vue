<script setup lang="ts">
const props = defineProps<{
  section?: string;
  details?: string;
  single?: any;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' would benefit from the addition of ' +
      (props.single != undefined ? 'an image.' : 'more images.')
    "
    :text="
      'Please remove this notice once you\'ve added ' +
      (props.single != undefined ? 'a suitable image.' : 'suitable images') +
      ' to the ' +
      (props.section ?? 'page') +
      '.' +
      (!!props.details ? '\n\nThe specific instructions are: ' + props.details : '')
    "
    image="/assets/images/icons/Painting_JE2_BE2.png"
    class="msgbox-yellow"
  />
</template>
