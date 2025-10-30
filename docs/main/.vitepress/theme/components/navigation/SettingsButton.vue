<script setup lang="ts">
const props = defineProps<{
    hideText?: boolean;
}>();
</script>

<template>
    <li style="float: right; cursor: pointer; max-height: 44px">
        <a
            v-if="!props.hideText"
            onclick="$('#settings_menu').slideToggle()"
            style="vertical-align: middle"
            class="soundEffectBound defaultButtonSoundEffectBound"
            ><div
                class="settings_button"
                title="Settings Icon"
                style="width: 30px; height: 30px; margin-right: 5px; position: relative; top: 4px"
            ></div>
            Settings</a
        >
        <a
            v-if="props.hideText"
            onclick="$('#settings_menu').slideToggle()"
            style="vertical-align: middle; padding: 0; height: 44px; width: 44px"
            class="soundEffectBound defaultButtonSoundEffectBound"
            ><div
                class="settings_button"
                title="Settings Icon"
                style="width: 30px; height: 30px; margin: auto"
            ></div
        ></a>
    </li>
</template>

<style lang="scss">
.appearance-control {
    display: flex;

    align-items: center;
    position: relative;

    select {
        display: block;
        appearance: none;
        user-select: none;
        outline: none;
        height: 36px;
        padding-inline: 2em;
        cursor: pointer;
        font-weight: 500;

        background-color: var(--bg-color);
        border: var(--border);
        border-radius: var(--border-radius);

        color: rgb(150, 159, 175);

        &:hover,
        &:focus {
            background-color: var(--light-bg-color);
            color: inherit;
        }
    }

    & > img {
        position: absolute;
        pointer-events: none;
    }

    & > :first-child {
        left: 0.5rem;
        font-size: 1.3rem;
    }

    & > :last-child {
        transform: rotate(90deg);
        right: 0.5rem;
    }
}
</style>
