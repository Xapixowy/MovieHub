<template>
    <div class="episode-carousel" ref="episodeCarouselRef">
        <div class="episode-carousel__episodes">
            <div class="episode-carousel__episode-cards" :style="[episodeCardsTransformX]">
                <EpisodeCard
                    v-for="episode in episodes"
                    :key="episode.id"
                    :episode="episode"
                    :on-episode-click="onEpisodeClick"
                    :on-like-click="onLikeClick"
                />
            </div>
        </div>
        <button class="episode-carousel__previous-episode" @click="previousEpisode">
            <IconChevronLeft />
        </button>
        <button class="episode-carousel__next-episode" @click="nextEpisode">
            <IconChevronRight />
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-vue'
import EpisodeCard from './EpisodeCard.vue'

import type TvShowEpisode from '@/types/TvShowEpisode'
import type TvShow from '@/types/TvShow'

const episodeCardWidth = 160
const episodeCardGap = 32

const props = defineProps<{
    episodes: TvShowEpisode[]
    onEpisodeClick: (episode: TvShowEpisode) => void
    onLikeClick: (tvShow: TvShow) => void
}>()

const offsetPx = ref(0)

const episodeCarouselRef = ref<HTMLElement | null>(null)

const maxOffsetPx = computed(() => {
    const episodes = props.episodes.length
    return (
        episodes * episodeCardWidth +
        episodes * episodeCardGap +
        episodeCardGap -
        episodeCarouselRef.value?.clientWidth!
    )
})

const episodeCardsTransformX = computed(() => {
    return `transform: translateX(-${offsetPx.value}px)`
})

const nextEpisode = () => {
    if (offsetPx.value < maxOffsetPx.value) {
        const nextOffsetPx = offsetPx.value + episodeCardWidth + episodeCardGap
        if (nextOffsetPx > maxOffsetPx.value) {
            offsetPx.value = maxOffsetPx.value
        } else {
            offsetPx.value = nextOffsetPx
        }
    }
}

const previousEpisode = () => {
    if (offsetPx.value > 0) {
        const nextOffsetPx = offsetPx.value - episodeCardWidth - episodeCardGap
        if (nextOffsetPx < 0) {
            offsetPx.value = 0
        } else {
            offsetPx.value = nextOffsetPx
        }
    }
}
</script>

<style scoped>
div.episode-carousel {
    position: relative;
    width: 100%;
}

div.episode-carousel__episodes {
    overflow: hidden;
}

div.episode-carousel__episode-cards {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    transition: transform 0.3s;
}

button:where(.episode-carousel__previous-episode, .episode-carousel__next-episode) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary);
    color: var(--black);
    border: none;
    border-radius: 50%;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:where(.episode-carousel__previous-episode, .episode-carousel__next-episode):hover {
    background-color: var(--primary-light);
}

button.episode-carousel__previous-episode {
    left: 0.5rem;
}

button.episode-carousel__next-episode {
    right: 0.5rem;
}
</style>
