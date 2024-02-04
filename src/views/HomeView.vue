<template>
    <div class="home-page">
        <universal-heading></universal-heading>
        <new-episodes
            :new-episodes="newEpisodesArr"
            :current-episode="currentEpisode"
            :on-episode-click="setCurrentEpisode"
            :on-like-click="likeTvShow"
        ></new-episodes>
        <liked-tv-shows
            :liked-tv-shows="likedTvShowsArr"
            :on-like-click="likeTvShow"
        ></liked-tv-shows>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

import UniversalHeading from '@/components/ui/UniversalHeading.vue'
import NewEpisodes from '@/components/tvshows_components/NewEpisodes.vue'
import LikedTvShows from '@/components/tvshows_components/LikedTvShows.vue'

import TvShowService from '@/services/TvShowService'
import LikedTvShowService from '@/services/LikedTvShowService'

import type TvShowEpisode from '@/types/TvShowEpisode'
import type TvShow from '@/types/TvShow'

const newEpisodesArr = ref<TvShowEpisode[]>([])
const likedTvShowsArr = ref<TvShow[]>([])
const currentEpisode = ref<TvShowEpisode | null>(null)

const setCurrentEpisode = (episode: TvShowEpisode) => {
    currentEpisode.value = episode
}

const likeTvShow = async (tvShow: TvShow) => {
    if (tvShow.isLiked) {
        LikedTvShowService.removeTvShow(tvShow.id)
    } else {
        LikedTvShowService.addTvShow(tvShow)
    }
    likedTvShowsArr.value = await LikedTvShowService.getTvShows()
    hydrateNewEpisodesWithLikedTvShows()
}

const hydrateNewEpisodesWithLikedTvShows = () => {
    newEpisodesArr.value = newEpisodesArr.value.map((episode) => {
        const isLiked = likedTvShowsArr.value.some((tvShow) => tvShow.id === episode.tvShow.id)
        const newEpisode = { ...episode }
        newEpisode.tvShow.isLiked = isLiked
        return newEpisode
    })
}

onMounted(async () => {
    newEpisodesArr.value = await TvShowService.getSchedule()
    likedTvShowsArr.value = await LikedTvShowService.getTvShows()
    hydrateNewEpisodesWithLikedTvShows()
    setCurrentEpisode(newEpisodesArr.value[0])
})

watchEffect(() => {
    console.log(likedTvShowsArr.value)
})
</script>

<style scoped>
div.home-page {
    width: 100%;
    height: 100%;
}
</style>
