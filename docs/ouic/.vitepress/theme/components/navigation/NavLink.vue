<script setup lang="ts">
import ExternalIcon from "../icons/ExternalIcon.vue";

import { watchEffect } from "vue";
import useNavLink from "../../composables/navLink";
import useIsMobile from "../../composables/isMobile";
import useSidebarVisibility from "../../composables/sidebarVisibility";

const emit = defineEmits<{
    change: [isActive: boolean];
}>();

const props = defineProps<{
    class?: string;
    link: string;
    activeMatch?: string;
    target?: string;
    rel?: string;
}>();

const { props: linkProps, isExternal } = useNavLink(props);

const isMobile = useIsMobile();
const isSidebarVisible = useSidebarVisibility();
function onNavigation() {
    if (isMobile.value) isSidebarVisible.value = false;
}

watchEffect(() => {
    emit("change", linkProps.value.class.active);
});
</script>

<template>
    <!-- HACK: There was a target="_self" property here but that makes the whole website reload when clicking on a sidebar item, I remember it was necessary to fix a problem before, but not what that problem was or if it even still exists, so it may not be necessary, so I am temporarily removing this to see if it works fine, if things start behaving weird, try adding this back. -->
    <a
        :class="props.class"
        v-bind="linkProps"
        :rel="props.rel"
        :target="props.target"
        @click="onNavigation"
    >
        <slot />
        <ExternalIcon v-if="isExternal" />
    </a>
</template>
