<template>
  <component :is="headingType" :class="calculatedClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  headingType: {
    type: String,
    default: 'h1'
  },
  className: {
    type: String,
    default: ''
  }
})

const calculatedClass = computed(() => {
  return `header ${props.className}`
})
</script>

<style scoped></style>
