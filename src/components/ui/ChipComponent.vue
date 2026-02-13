<template>
  <v-chip :color="color" :variant="variant" :size="size" :href="href" :target="target">
    <v-icon v-if="icon" :icon="icon" :class="[text ? 'me-2' : '']" />
    <p v-if="text">{{ text }}</p>
  </v-chip>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from './props/ChipComponentProps'

withDefaults(defineProps<ChipComponentProps>(), {
  color: 'primary',
})
</script>
