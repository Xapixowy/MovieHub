<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/global/AppNavigation.vue'
import HeaderLogo from '@/components/header_components/HeaderLogo.vue'
import WrapperComponent from '@/components/ui/WrapperComponent.vue'
import SearchBar from '@/components/header_components/SearchBar.vue'

import TvShowService from './services/TvShowService'

// await TvShowService.addTvShow({
//     id: 72076,
//     url: 'https://www.tvmaze.com/shows/72076/dubu-wangu',
//     name: 'Dubu Wangu',
//     image: 'https://static.tvmaze.com/uploads/images/medium_portrait/482/1205461.jpg',
//     summary:
//         '<p>The protagonist genius, Ye Feng, was betrayed and attacked by his senior, and other evildoers, after he refines the Divine Realm pill that would lead him towards Supreme Realm. He managed to fend off and consume the pill, yet finds himself inhabiting the body of his descendant, who bears his name after 500 years later. He pledge to save his current lineage and seeks vengeance, Yefeng embarked on the path of cultivation again, practicing hard and improving while exploring the mystery of the way of heaven.</p>',
//     genres: ['Action', 'Adventure', 'Fantasy'],
//     premiered: '2023-09-29',
//     type: 'Animation',
//     status: 'Running'
// })
// await TvShowService.removeTvShow(72076)
// const likedTvShows = await TvShowService.getTvShows()

// console.log(likedTvShows)
</script>

<template>
    <header>
        <wrapper-component class="header__wrapper">
            <header-logo class="header__logo" />
            <search-bar class="header__search-bar" />
            <app-navigation class="header__navigation" />
        </wrapper-component>
    </header>
    <main>
        <router-view />
    </main>
    <footer>TVSHOWROOM &copy; 2024</footer>
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
</style>
