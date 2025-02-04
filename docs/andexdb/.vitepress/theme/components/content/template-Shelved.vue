<script setup lang="ts">
const props = defineProps<{
  section?: string;
}>();
</script>
<template>
  <msgbox
    :section="props.section"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' documents a feature that has been shelved indefinitely.'
    "
    text="It is unknown whether this feature will be implemented in a future update."
    image="/assets/images/icons/Chiseled_Bookshelf_(S_0)_JE2.png"
    class="msgbox-blue"
  />
</template>
