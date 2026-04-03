<script setup lang="ts">
const props = defineProps<{
    section?: string;
    details?: string;
}>();
</script>
<template>
    <div
        :class="'msgbox searchaux ' + (!!props.section ? 'msgbox-mini' : '') + ' msgbox-orange'"
        :style="'max-width: ' + (!!props.section ? '50em' : '90%') + '; image-rendering: pixelated'"
    >
        <div class="msgbox-icon">
            <div class="msgbox-image nomobile" style="">
                <span class="mw-valign-text-top" typeof="mw:File">
                    <img
                        src="/assets/images/icons/Conditional_Chain_Command_Block.gif"
                        decoding="async"
                        loading="lazy"
                        :width="!!props.section ? 16 : 32"
                        :height="!!props.section ? 16 : 32"
                        class="mw-file-element"
                    />
                </span>
            </div>
        </div>
        <div style="width: 100%">
            <div style="font-weight: bold; display: inline">
                This {{ props.section ?? "page" }} is advanced and may be too technical for some
                readers to understand.
            </div>
        </div>
    </div>
</template>
