<template>
    <router-link to="/" :class="classes">
        <IconDeviceTvOld size="3rem" class="header-logo__logo" />
        <h1 class="header-logo__text">TvShowRoom</h1>
    </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { IconDeviceTvOld } from '@tabler/icons-vue'
import { computed } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})

const classes = computed(() => `header-logo ${props.class}`)
</script>

<style scoped>
.header-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
}

.header-logo__logo {
    color: var(--primary);
}
</style>
