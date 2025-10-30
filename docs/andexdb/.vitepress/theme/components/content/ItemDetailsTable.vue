<script setup lang="ts">
const props = defineProps<{
    name: string;
    image?: string | string[];
    altText?: string | string[];
    minetip?: string;
    itemID?: string | string[];
    rarity?: string;
    hoverTextColor?: string;
    durability?: string;
    renewable?: string;
    stackable?: string;
    dyeable?: string;
    invslotItems?: { minetip: string; image?: string; altText?: string }[];
    tabberEnabled?: boolean | "true" | "false" | 0 | 1;
    tabberItems?: { tabberTitle: string; images?: { image: string; altText?: string }[] }[];
}>();
const images = (typeof props.image === "string" ? [props.image] : (props.image ?? [])).map(
    (v, i) => ({
        image: v,
        altText:
            typeof props.altText === "string" ?
                props.altText
            :   ((props.altText ?? [])[i] ?? props.altText?.[0]),
        minetip:
            typeof props.minetip === "string" ?
                props.minetip
            :   ((props.minetip ?? [])[i] ?? props.minetip?.[0]),
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
        images:
            v.image ?
                [
                    {
                        image: v.image,
                        altText: v.altText,
                    },
                ]
            :   undefined,
    })) ??
    [];
</script>

<template>
    <div class="item-details-table">
        <div class="item-details-table-header">
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
                    (tabberItemsList.length > 1 &&
                        String(props.tabberEnabled).toLowerCase() !== 'false')
                "
            >
                <div
                    :id="'tabber-' + (Date.now() * Math.random() * 1000).toString(16)"
                    class="tabber"
                >
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
                        ><span
                            class="invslot-item invslot-item-image"
                            :data-minetip-title="entry.minetip"
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
                <tr v-if="!!props.itemID">
                    <th title="The namespaced ID of the item.">Item ID:</th>
                    <td>
                        <code
                            v-for="(entry, i) in typeof props.itemID === 'string' ?
                                [props.itemID]
                            :   props.itemID"
                            :key="i"
                            >{{ entry }}<br
                        /></code>
                    </td>
                </tr>
                <tr v-if="!!props.rarity">
                    <th title="The rarity tier of the item.">Rarity tier:</th>
                    <td>
                        {{ props.rarity }}
                    </td>
                </tr>
                <tr v-if="!!props.hoverTextColor">
                    <th title="The hover text color of the item.">Hover text color:</th>
                    <td>
                        {{ props.hoverTextColor }}
                    </td>
                </tr>
                <tr v-if="!!props.durability">
                    <th title="The maximum durability of the item.">Durability:</th>
                    <td>
                        {{ props.durability }}
                    </td>
                </tr>
                <tr v-if="!!props.renewable">
                    <th title="Whether or not the item is renewable.">Renewable:</th>
                    <td>
                        {{ props.renewable }}
                    </td>
                </tr>
                <tr v-if="!!props.stackable">
                    <th title="Whether or not the item is stackable.">Stackable:</th>
                    <td>
                        {{ props.stackable }}
                    </td>
                </tr>
                <tr v-if="!!props.dyeable">
                    <th title="Whether or not the item can be dyed.">Dyeable:</th>
                    <td>
                        {{ props.dyeable }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
.item-details-table {
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
    & > .item-details-table-header {
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
    .item-details-table {
        width: auto;
        margin-left: 0;
        float: none;
    }
}
</style>
