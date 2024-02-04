<template>
    <button class="theme-switcher" @click="toggleTheme">
        <IconSunFilled v-show="isDarkMode" class="theme-switcher__icon" />
        <IconMoonFilled v-show="!isDarkMode" class="theme-switcher__icon" />
    </button>
</template>

<script setup lang="ts">
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-vue'

import { onMounted, ref, watch, watchEffect } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    setLocalStorage(isDarkMode.value)
    checkTheme()
}
const checkTheme = () => {
    const preferedThemeSet = localStorage.getItem('theme')
    if (preferedThemeSet !== null) {
        isDarkMode.value = localStorage.getItem('theme') === 'dark'
        if (isDarkMode.value) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    } else {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
        if (isDarkMode.value) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }
}

const setLocalStorage = (isDarkMode: boolean) => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
}

onMounted(() => {
    checkTheme()
})
</script>

<style scoped>
.theme-switcher {
    background-color: var(--primary);
    color: var(--black);
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.theme-switcher__icon {
    transition: transform 0.3s;
}

.theme-switcher:hover {
    background-color: var(--primary-light);
}

.theme-switcher:hover > .theme-switcher__icon {
    transform: rotate(-15deg);
}
</style>
