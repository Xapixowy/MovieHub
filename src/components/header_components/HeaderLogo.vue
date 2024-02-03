<template>
  <div class="header-logo relative flex gap-3 justify-center items-center overflow-hidden">
    <div class="w-8 aspect-square">
      <Transition>
        <component :is="logo" size="2rem" class="absolute" />
      </Transition>
    </div>
    <span class="text-xl">CryptoTracker</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  IconCurrencyBitcoin,
  IconCurrencyDogecoin,
  IconCurrencySolana,
  IconCurrencyLitecoin
} from '@tabler/icons-vue'

const logo = ref(IconCurrencyBitcoin)

const icons = [IconCurrencyBitcoin, IconCurrencyDogecoin, IconCurrencySolana, IconCurrencyLitecoin]

setInterval(() => {
  logo.value = icons[Math.floor(Math.random() * icons.length)]
}, 2000)
</script>

<style scoped>
.v-enter-active {
  transition: transform 0.5s ease;
}

.v-enter-from {
  transform: translateY(-100%);
}

.v-enter-to {
  transform: translateY(0);
}

.v-leave-active {
  transition: transform 0.5s ease;
}

.v-leave-from {
  transform: translateY(0);
}

.v-leave-to {
  transform: translateY(100%);
}
</style>
