<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import AppNavigation from '@/components/global/AppNavigation.vue'
import HeaderLogo from '@/components/header_components/HeaderLogo.vue'
import WrapperComponent from '@/components/ui/WrapperComponent.vue'
import SearchBar from '@/components/header_components/SearchBar.vue'

import SearchBarModal from '@/components/global/SearchBarModal.vue'

const isSearchBarModalOpen = ref(false)

const openSearchBarModal = () => {
    isSearchBarModalOpen.value = true
}

const closeSearchBarModal = () => {
    isSearchBarModalOpen.value = false
}
</script>

<template>
    <header>
        <wrapper-component class="header__wrapper">
            <header-logo class="header__logo" />
            <search-bar class="header__search-bar" @click="openSearchBarModal" />
            <app-navigation class="header__navigation" />
        </wrapper-component>
    </header>
    <transition name="fade">
        <main v-if="!isSearchBarModalOpen">
            <wrapper-component>
                <router-view />
            </wrapper-component>
        </main>
    </transition>
    <footer>TVSHOWROOM &copy; 2024</footer>
    <transition name="fade">
        <search-bar-modal v-if="isSearchBarModalOpen" :on-close="closeSearchBarModal" />
    </transition>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    margin-bottom: 6rem;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    z-index: 100;
}

.header__wrapper {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 6rem;
    padding: 0.5rem;
}

.header__logo {
    grid-column: 1/2;
    grid-row: 1/2;
}

.header__search-bar {
    grid-column: 2/3;
    grid-row: 1/2;
}

.header__navigation {
    grid-column: 3/4;
    grid-row: 1/2;
}

main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    margin-bottom: 6rem;
}

footer {
    padding: 1rem;
    text-align: center;
    background-color: var(--black);
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    box-shadow: 0 -0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
    .header__wrapper {
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
        gap: 1rem;
    }

    .header__logo {
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .header__search-bar {
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .header__navigation {
        grid-column: 2/3;
        grid-row: 1/2;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
