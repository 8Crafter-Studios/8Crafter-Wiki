<script setup lang="tsx">
const props = defineProps<{
  section?: string;
  details?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="'This ' + (props.section ?? 'page') + ' describes an experimental feature.'"
    :text="
      'This feature might behave unexpectedly.' +
      (!!props.details ? '\n\n**Info:** *' + props.details + '*' : '')
    "
    image="/assets/images/icons/Brewing_Stand_(item)_JE3_BE2.png"
    class="msgbox-blue"
  />
</template>
