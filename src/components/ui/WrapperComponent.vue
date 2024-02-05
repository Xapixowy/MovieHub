<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})

const classes = computed(() => `wrapper ${props.class}`)
</script>
<style scoped>
.wrapper {
    width: 100%;
    max-width: var(--website-width);
    margin: 0 auto;
}
</style>
