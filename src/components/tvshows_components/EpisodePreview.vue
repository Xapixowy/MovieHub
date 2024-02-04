<template>
    <div class="episode-preview">
        <universal-heading heading-type="h3">{{ props.name }}</universal-heading>
        <universal-heading heading-type="h4">{{ props.tvShowName }}</universal-heading>
        <p>{{ props.airDate }} at {{ props.airTime }}</p>
        <p>Episode {{ props.episodeNumber }}</p>
    </div>
</template>

<script setup lang="ts">
import UniversalHeading from '@/components/ui/UniversalHeading.vue'

const props = defineProps<{
    name: string
    airDate: string
    airTime: string
    episodeNumber: number
    tvShowName: string
}>()
</script>

<style scoped>
.episode-preview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem 2rem 0 2rem;
}

.episode-preview > h3 {
    font-weight: bold;
}
</style>
