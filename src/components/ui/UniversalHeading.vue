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
  let classes: string = 'heading'
  classes += ` ${props.className}`
  if (props.headingType === 'h1') {
    classes += ' heading--h1 text-4xl'
  } else if (props.headingType === 'h2') {
    classes += ' heading--h2 text-3xl'
  } else if (props.headingType === 'h3') {
    classes += ' heading--h3 text-2xl'
  } else if (props.headingType === 'h4') {
    classes += ' heading--h4 text-xl'
  } else if (props.headingType === 'h5') {
    classes += ' heading--h5 text-lg'
  } else if (props.headingType === 'h6') {
    classes += ' heading--h6 text-base'
  }
  return classes
})
</script>

<style scoped></style>
