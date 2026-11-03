<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'

const { store, state } = useColorMode({
  attribute: 'class',
  modes: {
    light: '',
    dark: 'dark',
  },
  storageKey: 'portfolio-color-mode',
})

const toggleColorMode = () => {
  store.value = state.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    type="button"
    :aria-label="state === 'dark' ? 'Use light theme' : 'Use dark theme'"
    :title="state === 'dark' ? 'Use light theme' : 'Use dark theme'"
    @click="toggleColorMode"
  >
    <Sun v-if="state === 'dark'" class="size-4" />
    <Moon v-else class="size-4" />
  </Button>
</template>
