<template>
    <div class="search-bar">
        <button class="search-bar__button">
            <IconSearch size="1.5rem" class="search-bar__icon" />
        </button>
        <input type="text" class="search-bar__input" placeholder="Search for a tv show" />
    </div>
</template>

<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--white);
    overflow: hidden;
}

.search-bar__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0 0.25rem;
}

.search-bar__icon {
    color: var(--primary);
}

.search-bar__input {
    flex: 1 0 auto;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    width: 100%;
}

.search-bar__input:focus {
    outline: none;
}
</style>
