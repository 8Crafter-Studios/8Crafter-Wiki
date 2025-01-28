<script setup lang="ts">
const props = defineProps<{
  name: string;
  aliases: string[];
  ultraSecurityModeSecurityLevel: string;
  requiredTags: string[];
  functional: boolean;
  deprecated: boolean;
  categories: string[];
  version: string;
  /**
   * -2: Unknown
   *
   * -1: Not applicable
   *
   * 0: Not supported
   *
   * 1: Supported
   */
  undoSupported: -2 | -1 | 0 | 1;
  formattingCode?: string;
  notes?: string;
}>();
</script>

<template>
  <div class="command-details-table">
    <table>
      <thead>
        <tr>
          <th colspan="2">{{ props.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props.aliases.length > 0">
          <td>Aliases:</td>
          <td>
            <code v-for="(entry, i) in props.aliases" :key="i"
              >{{ entry }}{{ i === props.aliases.length - 1 ? "" : `&#10;` }}<br
            /></code>
          </td>
        </tr>
        <tr>
          <td><a href="/andexdb/usm/command-required-permission-levels">Dflt USM Sec Lvl</a>:</td>
          <td>
            {{ props.ultraSecurityModeSecurityLevel }}
          </td>
        </tr>
        <tr>
          <td>Dflt Required Tags:</td>
          <td>{{ props.requiredTags.join(", ") }}</td>
        </tr>
        <tr>
          <td>Categories:</td>
          <td>{{ props.categories.join(", ") }}</td>
        </tr>
        <tr>
          <td>Version:</td>
          <td>{{ props.version }}</td>
        </tr>
        <tr>
          <td>Undo Supported:</td>
          <td>
            {{
              props.undoSupported === -1
                ? "N/A"
                : props.undoSupported == 0
                  ? "No"
                  : props.undoSupported === 1
                    ? "Yes"
                    : "?"
            }}
          </td>
        </tr>
        <tr>
          <td>Functional:</td>
          <td>
            {{ props.functional ? "Yes" : "No" }}
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>Deprecated:</td>
          <td>
            {{ props.deprecated ? "Yes" : "No" }}
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.command-details-table {
  float: right;
  clear: right;
  width: 300px;
}
</style>
