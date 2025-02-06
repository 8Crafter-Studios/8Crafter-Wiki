<script setup lang="ts">
const props = defineProps<{
  section?: string;
  type?: string;
  type2?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' describes content that exists only in outdated versions of ' +
      (props.type ?? 'this add-on') +
      '.'
    "
    :text="
      'This feature used to be in ' + (props.type2 ?? 'the add-on') + ' but has since been removed.'
    "
    image="/assets/images/icons/BlockSprite_blue-rose.png"
    class="msgbox-blue"
  />
</template>
