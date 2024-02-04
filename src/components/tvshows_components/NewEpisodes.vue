<template>
    <universal-heading heading-type="h2" class="new-episodes__heading"
        >New Episodes</universal-heading
    >
    <episode-preview
        :name="currentEpisode?.name ?? 'Episode name'"
        :air-date="currentEpisode?.airDate ?? 'Air date'"
        :air-time="currentEpisode?.airTime ?? 'Air time'"
        :episode-number="currentEpisode?.episodeNumber ?? 0"
        :tv-show-name="currentEpisode?.tvShow.name ?? 'TV Show name'"
    />
    <episode-carousel
        :episodes="newEpisodes"
        :on-episode-click="onEpisodeClick"
        :on-like-click="onLikeClick"
    />
</template>

<script setup lang="ts">
import UniversalHeading from '@/components/ui/UniversalHeading.vue'
import EpisodePreview from '@/components/tvshows_components/EpisodePreview.vue'
import EpisodeCarousel from '@/components/tvshows_components/EpisodeCarousel.vue'

import type TvShowEpisode from '@/types/TvShowEpisode'
import type TvShow from '@/types/TvShow'

const props = defineProps<{
    newEpisodes: TvShowEpisode[]
    currentEpisode: TvShowEpisode | null
    onEpisodeClick: (episode: TvShowEpisode) => void
    onLikeClick: (tvShow: TvShow) => void
}>()
</script>

<style scoped>
.new-episodes__heading {
    padding-left: 2rem;
    text-align: center;
}
</style>
