<template>
    <div class="tv-show-card">
        <div class="tv-show-card__image">
            <img :src="props.tvShow.image" :alt="props.tvShow.name" />
        </div>
        <like-badge
            class="tv-show-card__like-badge"
            @click="likeHandler"
            :is-liked="props.tvShow.isLiked"
        />
        <div class="tv-show-card__show-name">
            <h3>{{ props.tvShow.name }}</h3>
        </div>
        <div class="tv-show-card__info">
            <div>
                <a class="tv-show__url" :href="props.tvShow.url" target="_blank">
                    <icon-info-circle-filled />
                    Click for more
                </a>
            </div>
            <div class="separator"></div>
            <div>
                <span class="tv-show__type">{{ props.tvShow.type }}</span>
            </div>
            <p class="tv-show__summary">{{ stripHtmlText(props.tvShow.summary) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type TvShow from '@/types/TvShow'
import LikeBadge from './LikeBadge.vue'
import { IconInfoCircleFilled } from '@tabler/icons-vue'

const props = defineProps<{
    tvShow: TvShow
    onLikeClick: (tvShow: TvShow) => void
}>()

const likeHandler = () => {
    props.onLikeClick(props.tvShow)
}

const stripHtmlText = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
}
</script>

<style scoped>
div.tv-show-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 16rem;
    aspect-ratio: 11 / 16;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

div.tv-show-card:hover img {
    transform: scale(1.05);
}

div.tv-show-card:hover > div.tv-show-card__show-name {
    transform: translateY(100%);
}

div.tv-show-card:hover > div.tv-show-card__info {
    transform: translateX(0);
}

div.tv-show-card__image {
    width: 100%;
    height: 100%;
}

div.tv-show-card__image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

div.tv-show-card__like-badge {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 50;
}

div.tv-show-card__show-name {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    transition: transform 0.3s;
    color: var(--white);
}

div.tv-show-card__info {
    overflow-y: auto;
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;
    transform: translateX(-100%);
    transition: transform 0.3s;
    color: var(--white);
}

div.tv-show-card__info a.tv-show__url {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
}

div.tv-show-card__info a.tv-show__url:hover {
    color: var(--primary);
}

span.tv-show__type {
    background-color: var(--primary);
    color: var(--black);
    padding: 0.25rem 0.5rem;
    border-radius: 100rem;
    font-weight: bold;
}

div.separator {
    flex: 1;
}
</style>
