<template>
  <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
    <ais-search-box />
    <ais-hits>
      <template #item="{ item }">
        <h2>{{ item.name }}</h2>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  data() {
    return {
      searchClient: algoliasearch("B1G2GM9NG0", "aadef574be1f9252bb48d4ea09b5cfe5"),
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
</style>
