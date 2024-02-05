<template>
    <div class="search-bar__modal">
        <wrapper-component>
            <header>
                <search-bar-input class="modal__search-bar" :on-search="searchHandler" />
                <button @click="closeHandler">Close</button>
            </header>
            <tv-shows-grid
                v-if="areTvShows"
                :tv-shows="searchedTvShowsArr"
                :on-like-click="likeTvShowHandler"
            />
            <p v-else class="no-tv-shows-text">No tv shows found</p>
        </wrapper-component>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

import SearchBarInput from '@/components/searchbar_components/SearchBarInput.vue'
import WrapperComponent from '@/components/ui/WrapperComponent.vue'
import TvShowsGrid from '../tvshows_components/TvShowsGrid.vue'
import type TvShow from '@/types/TvShow'

import TvShowService from '@/services/TvShowService'
import LikedTvShowService from '@/services/LikedTvShowService'

const props = defineProps({
    onClose: {
        type: Function,
        required: true
    }
})

const searchedTvShowsArr = ref<TvShow[]>([])
const likedTvShowsArr = ref<TvShow[]>([])

const areTvShows = computed(() => searchedTvShowsArr.value.length > 0)

const closeHandler = () => {
    props.onClose()
}

const searchHandler = async (searchTerm: string) => {
    searchedTvShowsArr.value = await TvShowService.searchTvShows(searchTerm)
    hydrateTvShowsWithLikedTvShows()
}

const likeTvShowHandler = async (tvShow: TvShow) => {
    if (tvShow.isLiked) {
        await LikedTvShowService.removeTvShow(tvShow.id)
    } else {
        await LikedTvShowService.addTvShow(tvShow)
    }
    likedTvShowsArr.value = await LikedTvShowService.getTvShows()
    hydrateTvShowsWithLikedTvShows()
}

const hydrateTvShowsWithLikedTvShows = () => {
    searchedTvShowsArr.value = searchedTvShowsArr.value.map((tvShow) => {
        const isLiked = likedTvShowsArr.value.some((likedTvShow) => likedTvShow.id === tvShow.id)
        const newTvShow = { ...tvShow }
        newTvShow.isLiked = isLiked
        return newTvShow
    })
}

onMounted(async () => {
    likedTvShowsArr.value = await LikedTvShowService.getTvShows()
})
</script>

<style scoped>
.search-bar__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: var(--white);
    z-index: 200;
    overflow-y: auto;
}

body.dark .search-bar__modal {
    background-color: var(--dark-gray);
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem;
}

header .modal__search-bar {
    flex: 1 0 auto;
}

header button {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    border-radius: 0.25rem;
    font-weight: semi-bold;
}

header button:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

body.dark header button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.no-tv-shows-text {
    text-align: center;
    font-size: 1.25rem;
}
</style>
