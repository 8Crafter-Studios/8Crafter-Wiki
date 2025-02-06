<script setup lang="ts">
const props = defineProps<{
  name: string;
  aliases?: string[];
  ultraSecurityModeSecurityLevel?: string;
  requiredTags?: string[];
  functional: boolean;
  deprecated: boolean;
  categories?: string[];
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
    <div class="command-details-table-header">
      <code>{{ props.name }}</code>
    </div>
    <table cellspacing="1" cellpadding="4">
      <tbody>
        <tr v-if="(props.aliases ?? []).length > 0">
          <th>Aliases:</th>
          <td>
            <code v-for="(entry, i) in props.aliases" :key="i">{{ entry }}<br /></code>
          </td>
        </tr>
        <tr v-if="!!props.ultraSecurityModeSecurityLevel">
          <th
            title="The default security level of this command when Ultra Security Mode is enabled."
          >
            <a href="/andexdb/usm/command-required-permission-levels" style="text-wrap: none">
              Dflt USM Sec Lvl</a
            >:
          </th>
          <td>
            <code>{{ props.ultraSecurityModeSecurityLevel }}</code>
          </td>
        </tr>
        <tr>
          <th
            title="The default list of tags the players need to use this command when Ultra Security Mode is disabled."
          >
            Dflt Required Tags:
          </th>
          <td>
            <code v-for="(entry, i) in props.requiredTags" :key="i">{{ entry }}<br /></code>
            <span v-if="(props.requiredTags ?? []).length === 0">None</span>
          </td>
        </tr>
        <tr>
          <th>Categories:</th>
          <td>{{ (props.categories ?? ["None"]).join(", ") }}</td>
        </tr>
        <tr>
          <th>Version:</th>
          <td>{{ props.version }}</td>
        </tr>
        <tr>
          <th>Undo Supported:</th>
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
          <th>Functional:</th>
          <td>
            {{ props.functional ? "Yes" : "No" }}
          </td>
        </tr>
        <tr></tr>
        <tr>
          <th>Deprecated:</th>
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
  border: 1px solid #0e6a3b !important;
  position: relative;
  clear: right;
  margin: 0 0 1em 1em;
  width: 306px;
  font-size: 90%;
  background: var(--light-bg-color);
  float: right;
  padding: 2px;
  overflow: auto;
  & > table {
    font-size: 12.6px;
    margin: 0;
    width: 100%;
    border: none;
    border-radius: 0px;
    display: table;
  }
  & > .command-details-table-header {
    font-size: 120%;
    padding: 5px;
    font-weight: bold;
    text-shadow: 2px 2px 0 #084023;
    margin: 1px 2px 0;
    background-color: #0e6a3b;
    border-inline: 3px solid #075032 !important;
    border-top: 3px solid #328058 !important;
    border-bottom: 3px solid #084023 !important;
    text-align: center;
    & > code {
      text-shadow: none;
    }
  }
  & > tr,
  td,
  th {
    border: none;
    text-align: left !important;
  }
}
@media (max-width: 600px) {
  .command-details-table {
    width: auto;
    margin-left: 0;
    float: none;
  }
}
</style>
