<script setup lang="ts">
import WikiImage from "./WikiImage.vue";

const props = defineProps<{
  title: string;
  link?: string;
  image?: string | { light: string; dark: string };
  pixelated?: boolean;
}>();
</script>

<template>
  <div class="card">
    <header>
      <WikiImage
        v-if="props.image !== undefined"
        :src="image"
        alt=""
        width="60"
        height="60"
        :pixelated="props.pixelated"
      />
      <h2 v-if="props.link">
        <a :href="props.link">{{ title }}</a>
      </h2>
      <h2 v-else>
        {{ title }}
      </h2>
    </header>
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  background-color: var(--light-bg-color);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1em;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  & > header {
    display: flex;
    align-items: center;
    gap: 1em;

    h2 {
      line-height: 1;
    }
  }
}
</style>
