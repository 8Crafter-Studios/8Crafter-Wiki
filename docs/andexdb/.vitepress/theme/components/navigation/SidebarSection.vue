<script setup lang="ts">
import { SidebarSection } from "../../types";
import RightChevron from "../icons/RightChevron.vue";
import SidebarLink from "./SidebarLink.vue";
import SidebarCategory from "./SidebarCategory.vue";

const emit = defineEmits(["click"]);

defineProps<SidebarSection & { open: boolean }>();
</script>

<template>
  <details class="sidebar__section" :open>
    <summary @click.prevent.exact="emit('click')">
      {{ title }}
      <RightChevron />
    </summary>
    <ul>
      <SidebarLink v-for="link in links" :key="link.link" v-bind="link" />
      <SidebarCategory v-for="category in categories" :key="category.title" v-bind="category" />
    </ul>
  </details>
</template>

<style lang="scss">
.sidebar__section {
  summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 6px 12px;

    img {
      margin-left: auto;
    }

    &:hover {
      background-color: #00000044;
    }
  }

  & > ul {
    display: none;
  }

  &[open] {
    & > summary {
      background-color: #00000022;
      font-weight: 600;

      &:hover {
        background-color: #00000044;
      }

      img {
        transform: rotate(90deg);
      }
    }
    & > ul {
      display: block;
    }
    & > ul {
      display: block;
    }
  }
}
</style>
