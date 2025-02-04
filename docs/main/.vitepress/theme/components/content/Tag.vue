<script setup lang="ts">
import { computed } from "vue";
import displayError from "../../utils/displayError";
import useData from "../../composables/data";

import Label from "./Label.vue";

const { theme } = useData();

const { name, sidebar } = defineProps<{
  name: string;
  sidebar?: boolean;
}>();

const tag = computed(() => {
  const tag = theme.value.tags[name];

  if (!tag) {
    displayError(
      new TypeError(
        `No tag with the name "${name}" exists. If you would like to add a tag, you can do so in ".vitepress/tags.ts".`
      )
    );
  }

  let { text = name, color, sidebar: sidebarOptions, displayOnPage } = tag;

  if (sidebar) {
    if (!sidebarOptions) return;

    if (typeof sidebarOptions === "object") text = sidebarOptions.text;
  }

  return { text, color, displayOnPage };
});
</script>

<template>
  <Label
    v-if="tag !== undefined && (tag.displayOnPage !== false || sidebar === true)"
    :color="tag.color"
    >{{ tag.text }}</Label
  >
</template>
