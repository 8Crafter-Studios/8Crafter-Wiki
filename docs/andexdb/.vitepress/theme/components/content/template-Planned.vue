<script setup lang="tsx">
const props = defineProps<{
  section?: string;
  version?: string;
}>();
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="'This ' + (props.section ?? 'page') + ' describes a planned feature.'"
    :text="
      !!props.version
        ? '\n\nIt has not appeared in any development versions yet, but is planned to be included in ' +
          props.version +
          '.'
        : 'It has not appeared in any development versions yet, but is planned to be included in a future update.'
    "
    image="/assets/images/icons/Locked_Map_(item)_BE2.png"
    class="msgbox-blue"
  />
</template>
