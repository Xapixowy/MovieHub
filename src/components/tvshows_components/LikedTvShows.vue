<template>
    <universal-heading heading-type="h2" class="liked-shows__heading"
        >Liked Shows</universal-heading
    >
    <tv-shows-grid :liked-tv-shows="props.likedTvShows" :on-like-click="props.onLikeClick" />
</template>

<script setup lang="ts">
import UniversalHeading from '@/components/ui/UniversalHeading.vue'
import TvShowsGrid from '@/components/tvshows_components/TvShowsGrid.vue'

import type TvShow from '@/types/TvShow'

const props = defineProps<{
    likedTvShows: TvShow[]
    onLikeClick: (tvShow: TvShow) => void
}>()
</script>

<style scoped>
.liked-shows__heading {
    padding-left: 2rem;
    text-align: center;
}
</style>
