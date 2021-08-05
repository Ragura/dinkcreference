
<script setup lang="ts">
  import { computed } from "vue"
  const props = defineProps({
      code: String,
      custom: String,
      border: Boolean
  })

  const colorcodes = [
    {
      code: "1",
      color: "rgb(255, 198, 255)"
    },
    {
      code: "2",
      color: "rgb(131, 181, 74)"
    },
    {
      code: "3",
      color: "rgb(99, 242, 247)"
    },
    {
      code: "4",
      color: "rgb(255, 156, 74)"
    },
    {
      code: "5",
      color: "rgb(222, 173, 255)"
    },
    {
      code: "6",
      color: "rgb(244, 188, 73)"
    },
    {
      code: "7",
      color: "rgb(171, 173, 173)"
    },
    {
      code: "8",
      color: "rgb(85, 85, 85)"
    },
    {
      code: "9",
      color: "rgb(148, 198, 255)"
    },
    {
      code: "0",
      color: "rgb(0, 255, 0)"
    },
    {
      code: "!",
      color: "rgb(255, 255, 2)"
    },
    {
      code: "@",
      color: "rgb(255, 255, 2)"
    },
    {
      code: "#",
      color: "rgb(255, 132, 132)"
    },
    {
      code: "$",
      color: "rgb(255, 255, 2)"
    },
    {
      code: "%",
      color: "rgb(255, 255, 255)"
    },
  ]

  const backgroundColor = computed(() => {
    return props.custom || colorcodes.find(c => c.code === props.code)?.color
  })    
</script>

<template>
  <div class="colorblock">
  </div>
</template>

<style scoped>
  .colorblock {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: v-bind(backgroundColor);
    margin-right: 0.25rem;
    vertical-align: -0.1rem;
  }
  
</style>