<script setup lang="ts">
const props = defineProps<{
    details?: string;
}>();
</script>
<template>
    <template-MissingInformation section="section" :details="props.details" />
</template>
