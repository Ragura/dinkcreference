<script setup lang="ts">
    const props = defineProps({
        dink: String,
        freedink: String,
        dinkhd: String,
        yedink: String,
        standalone: Boolean,
    })
</script>

<template>
    <!-- Standalone version tags -->
    <template v-if="standalone">
        <span class="version dink" v-if="props.dink !== undefined" title="Dink">
            <span class="title" :class="{ 'title-only': props.dink === '' }">
                Dink
            </span>
            <span class="number" v-if="props.dink !== ''">
                {{ props.dink }}
            </span>
        </span>

        <span class="version freedink" v-if="props.freedink !== undefined" title="Freedink">
            <span class="title" :class="{ 'title-only': props.freedink === '' }">
                Freedink
            </span>
            <span class="number" v-if="props.freedink !== ''">
                {{ props.freedink }}
            </span>
        </span>

        <span class="version dinkhd" v-if="props.dinkhd !== undefined" title="DinkHD">
            <span class="title" :class="{ 'title-only': props.dinkhd === '' }">
                DinkHD
            </span>
            <span class="number" v-if="props.dinkhd !== ''">
                {{ props.dinkhd }}
            </span>
        </span>

        <span class="version yedink" v-if="props.yedink !== undefined" title="YeDink">
            <span class="title" :class="{ 'title-only': props.yedink === '' }">
                YeDink
            </span>
            <span class="number" v-if="props.yedink !== ''">
                {{ props.yedink }}
            </span>
        </span>
    </template>

    <!-- Original infoblock structure -->
    <div v-else class="infoblock">
        <div class="versions">
            <div class="version dink" v-if="props.dink !== undefined" title="Dink">
                <div class="title" :class="{ 'title-only': props.dink === '' }">
                    Dink
                </div>
                <div class="number" v-if="props.dink !== ''">
                    {{ props.dink }}
                </div>
            </div>

            <div class="version freedink" v-if="props.freedink !== undefined" title="Freedink">
                <div class="title" :class="{ 'title-only': props.freedink === '' }">
                    Freedink
                </div>
                <div class="number" v-if="props.freedink !== ''">
                    {{ props.freedink }}
                </div>
            </div>

            <div class="version dinkhd" v-if="props.dinkhd !== undefined" title="DinkHD">
                <div class="title" :class="{ 'title-only': props.dinkhd === '' }">
                    DinkHD
                </div>
                <div class="number" v-if="props.dinkhd !== ''">
                    {{ props.dinkhd }}
                </div>
            </div>

            <div class="version yedink" v-if="props.yedink !== undefined" title="YeDink">
                <div class="title" :class="{ 'title-only': props.yedink === '' }">
                    YeDink
                </div>
                <div class="number" v-if="props.yedink !== ''">
                    {{ props.yedink }}
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
        min-width: 4.5em;
        width: auto;
        align-self: center;
        flex-shrink: 0;
    }

    .infocontent {
        border-left: 1px solid #ccc;
        padding-left: 1rem;
    }

    /* Base version styles */
    .version {
        min-width: min-content;
        width: auto;
        display: inline-block;
        padding: 0.20em 0.5em 0.35em 0.5em;
        color: white;
        border-radius: 0.25em;
        line-height: 0.9em;
        font-size: 0.8em;
        text-align: center;
        font-weight: bold;
    }

    /* Styles specific to standalone version tags */
    :deep(.version):not(.infoblock .version) {
        display: inline-block;
        vertical-align: middle;
        margin: 0 0.25rem;
    }

    /* Styles specific to infoblock version tags */
    .infoblock .version {
        display: block;
        margin: 0 1rem 0.25rem 0;
    }

    .dink {
        background-color: #37B24D;
    }
    .freedink {
        background-color: #339AF0;
    }
    .dinkhd {
        background-color: #E09500;
    }
    .yedink {
        background-color: #6b32c5;
    }

    .title {
        font-size: 1em;
        padding-bottom: 0.1em
    }
    .title-only {
        font-size: 1em;
        padding-top: 0.1em
    }
</style>