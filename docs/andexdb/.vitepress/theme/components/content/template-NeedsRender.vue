<script setup lang="ts">
const props = defineProps<{
  section?: string;
  details?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' + (props.section ?? 'page') + ' would benefit from the addition of isometric renders.'
    "
    :text="
      'Please remove this notice once you\'ve added suitable isometric renders to the ' +
      (props.section ?? 'page') +
      '.' +
      (!!props.details ? '\n\nThe specific instructions are: ' + props.details : '')
    "
    image="/assets/images/icons/Realms_Plus_Icon.png"
    class="msgbox-yellow"
  />
</template>
