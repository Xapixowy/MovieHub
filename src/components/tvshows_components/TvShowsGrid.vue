<template>
    <div class="tv-shows">
        <tv-show-card
            v-for="tvShow in props.tvShows"
            :key="tvShow.id"
            :tvShow="tvShow"
            :on-like-click="props.onLikeClick"
        />
    </div>
</template>

<script setup lang="ts">
import TvShowCard from '@/components/tvshows_components/TvShowCard.vue'

import type TvShow from '@/types/TvShow'

const props = defineProps<{
    tvShows: TvShow[]
    onLikeClick: (tvShow: TvShow) => void
}>()
</script>

<style scoped>
.tv-shows {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 2rem 1rem;
    padding: 2rem;
    justify-items: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
