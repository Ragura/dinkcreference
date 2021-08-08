<script setup lang="ts">
    const props = defineProps({
        dink: String,
        freedink: String,
        dinkhd: String
    })
</script>

<template>
    <div class="infoblock">
        <div class="versions">
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
        </div>
        <div class="infocontent">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .infoblock {
        display: flex;
        align-items: stretch;
        margin: 0.5rem 0;
    }

    .versions {
        min-width: 4.5rem;
        align-self: center;
    }

    .infocontent {
        border-left: 1px solid #ccc;
        padding-left: 1rem;
    }

    .version {
        padding: 0.20em 0.5em 0.35em 0.5em;
        color: white;
        border-radius: 0.25em;
        margin: 0 1rem 0.25rem 0;
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