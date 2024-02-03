<template>
  <nav class="flex gap-6">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="text-xl hover:opacity-80 transition-opacity"
      active-class="text-red-400"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]
</script>

<style scoped></style>
