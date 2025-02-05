<script setup lang="tsx">
const props = defineProps<{
  section?: string;
  details?: string;
  exists?: "";
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' describes content that ' +
      (props.exists != undefined ? 'is in development.' : 'may be included in a future update.')
    "
    :text="
      (props.exists != undefined
        ? 'This content is still under development as a result it may be partially broken, and may be extremely buggy.'
        : 'This content has appeared in development versions, but the full update containing it has not been released yet.') +
      (!!props.details ? '\n\n**Info:** *' + props.details + '*' : '')
    "
    image="/assets/images/icons/Crafting_Table_JE4_BE3.png"
    class="msgbox-blue"
  />
</template>
