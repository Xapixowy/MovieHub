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
    class: {
        type: String,
        default: ''
    }
})

const calculatedClass = computed(() => {
    let classes: string = 'heading'
    if (props.headingType === 'h1') {
        classes += ' heading--h1'
    } else if (props.headingType === 'h2') {
        classes += ' heading--h2'
    } else if (props.headingType === 'h3') {
        classes += ' heading--h3'
    } else if (props.headingType === 'h4') {
        classes += ' heading--h4'
    } else if (props.headingType === 'h5') {
        classes += ' heading--h5'
    } else if (props.headingType === 'h6') {
        classes += ' heading--h6'
    }
    classes += ` ${props.class}`
    return classes
})
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.2;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.75rem;
}

h4 {
    font-size: 1.5rem;
}

h5 {
    font-size: 1.25rem;
}

h6 {
    font-size: 1rem;
}
</style>
