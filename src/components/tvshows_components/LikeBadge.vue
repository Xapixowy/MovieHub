<template>
    <div :class="classes">
        <IconHeartFilled />
    </div>
</template>

<script setup lang="ts">
import { IconHeartFilled } from '@tabler/icons-vue'
import { computed } from 'vue'

const props = defineProps({
    isLiked: {
        type: Boolean,
        default: false
    },
    classes: {
        type: String,
        default: ''
    }
})

const classes = computed(() => {
    return `like-badge ${props.classes} ${props.isLiked ? 'like-badge--liked' : ''}`
})
</script>

<style scoped>
div.like-badge {
    background-color: var(--primary);
    color: var(--black);
    padding: 1rem 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    transition:
        background-color 0.3s,
        color 0.3s;
}

div.like-badge:hover,
div.like-badge--liked {
    background-color: var(--red);
    color: var(--white);
}

div.like-badge--liked:hover {
    background-color: var(--black);
    color: var(--primary);
}
</style>
