<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/global/AppNavigation.vue'
import HeaderLogo from '@/components/header_components/HeaderLogo.vue'
import TvShowService from './services/firebaseService'

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
    <header
        class="flex gap-6 justify-between items-center pb-6 mb-6 border-b border-gray-900 dark:border-gray-50"
    >
        <header-logo />
        <app-navigation />
    </header>
    <main>
        <router-view />
    </main>
</template>

<style scoped></style>
