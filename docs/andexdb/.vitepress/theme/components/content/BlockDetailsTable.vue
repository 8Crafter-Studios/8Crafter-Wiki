<script setup lang="ts">
import * as md from "markdown-it";
const props = defineProps<{
  name: string;
  image?: string | string[];
  altText?: string | string[];
  minetip?: string;
  blockID?: string | string[];
  rarity?: string;
  renewable?: string;
  stackable?: string;
  blastResistance?: string;
  hardness?: string;
  luminous?: string;
  transparent?: string;
  waterloggable?: string;
  flammable?: string;
  catchesFireFromLava?: string;
  mapColor?: string;
  invslotItems?: { minetip: string; image?: string; altText?: string }[];
  tabberEnabled?: boolean | "true" | "false" | 0 | 1;
  tabberItems?: { tabberTitle: string; images?: { image: string; altText?: string }[] }[];
}>();
const images = (typeof props.image === "string" ? [props.image] : (props.image ?? [])).map(
  (v, i) => ({
    image: v,
    altText:
      typeof props.altText === "string"
        ? props.altText
        : ((props.altText ?? [])[i] ?? props.altText?.[0]),
    minetip:
      typeof props.minetip === "string"
        ? props.minetip
        : ((props.minetip ?? [])[i] ?? props.minetip?.[0]),
  })
);
const invslotItemsList: { minetip: string; image?: string; altText?: string }[] = [];
if (props.minetip !== undefined) {
  invslotItemsList.push({
    minetip: props.minetip,
    image: typeof props.image === "string" ? props.image : props.image?.[0],
    altText: typeof props.altText === "string" ? props.altText : props.altText?.[0],
  });
}
if (props.invslotItems !== undefined) {
  invslotItemsList.push(...props.invslotItems);
}
const tabberItemsList =
  props.tabberItems ??
  props.invslotItems?.map((v) => ({
    tabberTitle: v.minetip,
    images: v.image
      ? [
          {
            image: v.image,
            altText: v.altText,
          },
        ]
      : undefined,
  })) ??
  [];
</script>

<template>
  <div class="command-details-table">
    <div class="command-details-table-header">
      {{ props.name }}
    </div>
    <div class="infobox-imagearea animated-container">
      <div v-for="(entry, i) in images" :key="i">
        <span class="pixel-image" typeof="mw:File"
          ><a :href="entry.image" class="mw-file-description" title=""
            ><img
              :alt="entry.altText"
              :src="entry.image"
              decoding="async"
              loading="lazy"
              width="160"
              height="160"
              class="mw-file-element"
              data-file-width="160"
              data-file-height="160" /></a
        ></span>
      </div>
      <div
        v-if="
          String(props.tabberEnabled).toLowerCase() === 'true' ||
          ((props.tabberItems?.length ?? 0) > 0 &&
            String(props.tabberEnabled).toLowerCase() !== 'false') ||
          (tabberItemsList.length > 1 && String(props.tabberEnabled).toLowerCase() !== 'false')
        "
      >
        <div :id="'tabber-' + (Date.now() * Math.random() * 1000).toString(16)" class="tabber">
          <div
            v-for="(entry, i) in tabberItemsList"
            :key="i"
            class="tabbertab"
            :data-title="entry.tabberTitle"
          >
            <p class="mw-empty-elt"></p>
            <div v-for="(img, iB) in entry.images ?? []" :key="iB">
              <span class="pixel-image" typeof="mw:File">
                <a :href="img.image" class="mw-file-description">
                  <img
                    :alt="img.altText"
                    :src="img.image"
                    decoding="async"
                    loading="lazy"
                    width="150"
                    height="150"
                    class="mw-file-element"
                    data-file-width="300"
                    data-file-height="300"
                  />
                </a>
              </span>
            </div>
            <p class="mw-empty-elt"></p>
          </div>
        </div>
      </div>
      <div v-if="invslotItemsList.length > 0" class="infobox-invimages">
        <div>
          <span v-for="(entry, i) in invslotItemsList" :key="i" class="invslot"
            ><span class="invslot-item invslot-item-image" :data-minetip-title="entry.minetip"
              ><span typeof="mw:File"
                ><span
                  ><img
                    :alt="entry.altText"
                    :src="entry.image"
                    decoding="async"
                    loading="lazy"
                    width="32"
                    height="32"
                    class="mw-file-element"
                    data-file-width="32"
                    data-file-height="32" /></span></span></span
          ></span>
        </div>
      </div>
    </div>
    <table cellspacing="1" cellpadding="4">
      <tbody>
        <tr v-if="!!props.blockID">
          <th title="The namespaced ID of the block.">Block ID</th>
          <td>
            <code
              v-for="(entry, i) in typeof props.blockID === 'string'
                ? [props.blockID]
                : props.blockID"
              :key="i"
              >{{ entry }}<br
            /></code>
          </td>
        </tr>
        <tr v-if="!!props.rarity">
          <th title="The rarity tier of the block.">
            <a href="https://minecraft.wiki/w/Rarity" target="_blank">Rarity tier</a>
          </th>
          <td>
            {{ props.rarity }}
          </td>
        </tr>
        <tr v-if="!!props.renewable">
          <th title="Whether or not the block is renewable.">
            <a href="https://minecraft.wiki/w/Renewable_resource" target="_blank">Renewable</a>
          </th>
          <td>
            {{ props.renewable }}
          </td>
        </tr>
        <tr v-if="!!props.stackable">
          <th title="Whether or not the block is stackable.">Stackable</th>
          <td>
            {{ props.stackable }}
          </td>
        </tr>
        <tr v-if="!!props.blastResistance">
          <th title="The block's blast resistance.">
            <a href="https://minecraft.wiki/w/Explosion#Blast_resistance" target="_blank">
              Blast resistance
            </a>
          </th>
          <td>
            {{ props.blastResistance }}
          </td>
        </tr>
        <tr v-if="!!props.hardness">
          <th title="The block's hardness.">
            <a href="https://minecraft.wiki/w/Breaking#Blocks_by_hardness" target="_blank">
              Hardness
            </a>
          </th>
          <td>
            {{ props.hardness }}
          </td>
        </tr>
        <!-- eslint-disable vue/no-v-html -->
        <tr v-if="!!props.luminous">
          <th title="Whether or not the block emits light.">
            <a href="https://minecraft.wiki/w/Light" target="_blank">Luminous</a>
          </th>
          <td v-html="md.default().render(props.luminous)"></td>
        </tr>
        <tr v-if="!!props.transparent">
          <th title="Whether or not the block is transparent.">
            <a href="https://minecraft.wiki/w/Opacity" target="_blank">Transparent</a>
          </th>
          <td v-html="md.default().render(props.transparent)"></td>
        </tr>
        <tr v-if="!!props.waterloggable">
          <th title="Whether or not the block is waterloggable.">
            <a href="https://minecraft.wiki/w/Waterlogging" target="_blank">Waterloggable</a>
          </th>
          <td v-html="md.default().render(props.waterloggable)"></td>
        </tr>
        <tr v-if="!!props.flammable">
          <th title="Whether or not the block is flammable.">
            <a href="https://minecraft.wiki/w/Flammable" target="_blank">Flammable</a>
          </th>
          <td>
            {{ props.flammable }}
          </td>
        </tr>
        <tr v-if="!!props.catchesFireFromLava">
          <th title="Whether or not the block catches fire from lava.">
            Catches fire from <a href="https://minecraft.wiki/w/Lava" target="_blank">lava</a>
          </th>
          <td>
            {{ props.catchesFireFromLava }}
          </td>
        </tr>
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
    & > tbody {
      border-top: var(--border);
    }
  }
  & > .command-details-table-header {
    color: #fff;
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
  & > table > tbody > tr > td > * {
    overflow-wrap: anywhere;
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
