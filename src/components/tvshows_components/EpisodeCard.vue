<template>
    <div class="episode-card" @click="clickHandler">
        <div class="episode-card__image">
            <img :src="props.episode.tvShow.image" :alt="props.episode.tvShow.name" />
            <like-badge
                class="episode-card__like-badge"
                @click="likeHandler"
                :is-liked="props.episode.tvShow.isLiked"
            />
        </div>
        <div class="episode-card__show-name">
            <h3>{{ props.episode.tvShow.name }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import LikeBadge from './LikeBadge.vue'

import type TvShowEpisode from '@/types/TvShowEpisode'
import type TvShow from '@/types/TvShow'

const props = defineProps<{
    episode: TvShowEpisode
    onEpisodeClick: (episode: TvShowEpisode) => void
    onLikeClick: (tvShow: TvShow) => void
}>()

const clickHandler = () => {
    props.onEpisodeClick(props.episode)
}

const likeHandler = () => {
    props.onLikeClick(props.episode.tvShow)
}
</script>

<style scoped>
div.episode-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
}

div.episode-card:hover > div.episode-card__image > img {
    transform: scale(1.05);
}

div.episode-card__image {
    position: relative;
    overflow: hidden;
    width: 10rem;
    aspect-ratio: 11 / 16;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

div.episode-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

div.episode-card__like-badge {
    position: absolute;
    top: 0;
    right: 0;
}

div.episode-card__show-name {
    text-align: center;
}
</style>
