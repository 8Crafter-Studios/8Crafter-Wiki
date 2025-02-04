<script setup lang="ts">
const props = defineProps<{
  details?: string;
}>();
</script>
<template>
  <template_MissingInformation section="section" :details="props.details" />
</template>
