<template>
    <nav :class="classes">
        <theme-switcher />
    </nav>
</template>

<script setup lang="ts">
import ThemeSwitcher from '@/components/header_components/ThemeSwitcher.vue'
import { computed } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})

const classes = computed(() => `app-navigation ${props.class}`)
</script>

<style scoped>
nav {
    display: flex;
    gap: 6rem;
    align-items: center;
}

.navigation__link {
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s;
}

.navigation__link:hover {
    opacity: 0.8;
}

.navigation__link--active {
    color: var(--primary);
}
</style>
