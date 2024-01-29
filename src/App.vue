<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/global/AppNavigation.vue'
import UniversalHeading from '@/components/ui/UniversalHeading.vue'
</script>

<template>
  <header>
    <app-navigation />
  </header>
  <main>
    <universal-heading>Home</universal-heading>
    <router-view />
  </main>
</template>

<style scoped></style>
