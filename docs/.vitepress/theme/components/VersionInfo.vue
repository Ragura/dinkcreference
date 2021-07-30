<script setup lang="ts">
    const props = defineProps({
        dink: String,
        freedink: String,
        dinkhd: String
    })
</script>

<template>
    <span v-if="props.dink" class="version dink" title="Dink version">
        {{ props.dink }}
    </span>
    <span v-if="props.freedink" class="version freedink" title="FreeDink version">
        {{ props.freedink }}
    </span>
    <span v-if="props.dinkhd" class="version dinkhd" title="DinkHD version">
        {{ props.dinkhd }}
    </span>
    <slot></slot>
</template>

<style scoped>
    .version {
        display: inline-block;
        padding: 0.25em 0.5em;
        color: white;
        border-radius: 0.25em;
        margin-right:0.25em;
    }

    .dink {
        background-color: #37B24D;
    }
    .freedink {
        background-color: #339AF0;
    }
    .dinkhd {
        background-color: #FF6B6B;
    }
</style>