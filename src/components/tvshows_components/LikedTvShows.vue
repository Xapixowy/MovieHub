<template>
    <universal-heading heading-type="h2" class="liked-shows__heading"
        >Liked Shows</universal-heading
    >
    <tv-shows-grid
        v-if="areTvShows"
        :tv-shows="props.likedTvShows"
        :on-like-click="props.onLikeClick"
    />
    <p v-else class="no-tv-shows-text">You haven't liked any shows yet</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import UniversalHeading from '@/components/ui/UniversalHeading.vue'
import TvShowsGrid from '@/components/tvshows_components/TvShowsGrid.vue'

import type TvShow from '@/types/TvShow'

const props = defineProps<{
    likedTvShows: TvShow[]
    onLikeClick: (tvShow: TvShow) => void
}>()

const areTvShows = computed(() => props.likedTvShows.length > 0)
</script>

<style scoped>
.liked-shows__heading {
    padding: 2rem;
    text-align: center;
}

.no-tv-shows-text {
    text-align: center;
    font-size: 1.25rem;
}
</style>
