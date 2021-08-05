<script setup lang="ts">
  const props = defineProps({
      small: Boolean,
  })
</script>

<template>
  <p class="prototype" :style="{fontSize: small ? '0.8rem' : '1rem'}">
    <small class="title">Prototype</small>
    <slot />
  </p>
</template>

<style scoped>
  .prototype {
    padding: 1em;
      border: 1px solid #e0e0e0;
      font-size: 1.25rem;
      font-weight: bold;
      font-family: monospace;
      margin-top: 1em;
      margin-bottom: 1em;
  }
  .title {
    font-size: 0.75rem;
    display: block;
  }
</style>