<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

import useSidebarVisibility from "../../composables/sidebarVisibility";
import useIsMobile from "../../composables/isMobile";
import useData from "../../composables/data";

import NavLink from "./NavLink.vue";
import AlgoliaSearch from "./AlgoliaSearch.vue";
import SettingsButton from "./SettingsButton.vue";

const { site, theme } = useData();

const isShortTitle = useMediaQuery("(max-width: 400px)");
const isSidebarVisible = useSidebarVisibility();
const isMobile = useIsMobile();

function toggleSidebarVisibility() {
    isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
    <header class="header">
        <ul class="horizontal-nav">
            <li style="float: left; cursor: pointer">
                <a
                    style="vertical-align: middle; padding: 0px; height: 44px; width: 44px"
                    class="soundEffectBound defaultButtonSoundEffectBound"
                    aria-label="Toggle Sidebar Visibility"
                    @click="toggleSidebarVisibility"
                >
                    <div
                        class="menu_threebars_button"
                        title="Menu"
                        style="width: 30px; height: 30px"
                    ></div>
                </a>
            </li>
        </ul>
        <a class="header__title" href="/">
            <img src="/favicon.gif" alt="" />
            <span>{{ isShortTitle ? "Wiki" : site.title }}</span>
        </a>
        <div class="header__content">
            <ClientOnly>
                <ul class="horizontal-nav">
                    <li v-for="(item, i) in !isMobile ? theme.navigation : []" :key="i">
                        <NavLink
                            :link="item.link"
                            :active-match="item.activeMatch"
                            :target="item.target"
                            style="max-height: 44px"
                            >{{ item.text }}</NavLink
                        >
                    </li>
                    <SettingsButton :hide-text="isMobile" />
                </ul>
                <AlgoliaSearch />
            </ClientOnly>
        </div>
    </header>
    <!-- <header class="header">
    <a class="header__title" href="/">
      <img src="/favicon.gif" alt="" />
      <span>{{ isShortTitle ? "Wiki" : site.title }}</span>
    </a>
    <div class="header__content">
      <ul v-if="!isMobile" class="header__links">
        <li v-for="(item, i) in theme.navigation" :key="i">
          <NavLink :link="item.link" :active-match="item.activeMatch" :target="item.target">{{
            item.text
          }}</NavLink>
        </li>
      </ul>
      <ClientOnly>
        <SettingsButton />
        <AlgoliaSearch />
      </ClientOnly>
    </div>
  </header> -->
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;

    padding: 0.5em;
    padding-left: 0;

    height: var(--header-height);

    background-color: var(--nav-bg-color);
    backdrop-filter: var(--nav-bg-blur);

    &,
    &__title,
    &__content,
    &__links {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    &__menu-button {
        cursor: pointer;
        margin-right: 0.3em;
        svg {
            font-size: 1.5em;
            vertical-align: middle;
        }
    }

    &__title {
        color: inherit;
        text-decoration: none;
        font-size: 1.2rem;
        line-height: 1;
        font-weight: 600;

        & > img {
            width: 30px;
        }
    }

    &__content {
        margin-left: auto;
    }

    &__links {
        li {
            display: block;
            a {
                display: flex;
                align-items: center;
                color: inherit;
                padding: 0.5em 0.5em;
                gap: 0.1em;
                border-radius: 6px;
                line-height: 1.3;

                &:hover,
                &.active {
                    text-decoration: none;
                    background-color: var(--bg-color);
                }

                &.active {
                    font-weight: 600;
                }
            }
        }
    }
}
.header a:not(:hover) > .menu_threebars_button {
    filter: invert(1);
}
.dark .header a > .menu_threebars_button,
.header a:hover > .menu_threebars_button {
    filter: none;
}

.dark .menu_threebars_button {
    filter: invert(1);
}
</style>
