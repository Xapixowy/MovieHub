<template>
    <div class="search-bar">
        <button class="search-bar__button">
            <IconSearch size="1.75rem" class="search-bar__icon" />
        </button>
        <input
            type="text"
            class="search-bar__input"
            placeholder="Search for a tv show"
            v-model="searchValue"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { IconSearch } from '@tabler/icons-vue'

const props = defineProps({
    onSearch: {
        type: Function,
        required: true
    }
})

const searchValue = ref<string>('')

watch(searchValue, (newValue) => {
    props.onSearch(newValue)
})
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: var(--white);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
}

.search-bar:has(.search-bar__input:focus-within) {
    box-shadow: 0 0 1rem -0.25rem var(--primary);
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

body.dark .search-bar {
    background-color: var(--dark-gray);
    border-color: rgba(255, 255, 255, 0.2);
}
</style>
