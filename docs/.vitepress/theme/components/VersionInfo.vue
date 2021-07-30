<script setup lang="ts">
    const props = defineProps({
        dink: String,
        freedink: String,
        dinkhd: String
    })
</script>

<template>
    <div class="version dink" v-if="props.dink" title="Dink">
        <div class="title">
            Dink
        </div>
        <div class="number">
            {{ props.dink }}
        </div>
    </div>
    <div class="version freedink" v-if="props.freedink" title="Freedink">
        <div class="title">
            Freedink
        </div>
        <div class="number">
            {{ props.freedink }}
        </div>
    </div>
    <div class="version dinkhd" v-if="props.dinkhd" title="DinkHD">
        <div class="title">
            DinkHD
        </div>
        <div class="number">
            {{ props.dinkhd }}
        </div>
    </div>
    <slot />
</template>

<style scoped>
    .version {
        display: inline-block;
        padding: 0.20em 0.5em 0.35em 0.5em;
        color: white;
        border-radius: 0.25em;
        margin:0.25em 0.3em 0em 0em;
        line-height: 0.9em;
        font-size: 0.75em;
        text-align: center;
        font-weight: bold;
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

    .title {
        font-size: 0.6em;
    }
</style>