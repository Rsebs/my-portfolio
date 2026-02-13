<template>
  <h2>Tecnologías</h2>

  <div class="my-4">
    <v-row align-content="center" justify="start">
      <v-col v-for="(chip, index) in chipsTechnologies" :key="index" cols="auto">
        <ChipComponent v-bind="chip" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from '@/components/ui/props/ChipComponentProps'
import ChipComponent from '@/components/ui/ChipComponent.vue'

const sizeChip = 'x-large'
const chipsTechnologies: ChipComponentProps[] = [
  {
    text: 'PHP',
    icon: 'mdi-language-php',
    color: 'purple',
    size: sizeChip,
  },
  {
    text: 'Laravel',
    icon: 'mdi-laravel',
    color: 'red',
    size: sizeChip,
  },
  {
    text: 'Vue.js',
    icon: 'mdi-vuejs',
    color: 'green',
    size: sizeChip,
  },
  {
    text: 'Vuetify',
    icon: 'mdi-vuetify',
    color: 'blue',
    size: sizeChip,
  },
  {
    text: 'TypeScript',
    icon: 'mdi-language-typescript',
    color: 'blue',
    size: sizeChip,
  },
  {
    text: 'JavaScript',
    icon: 'mdi-language-javascript',
    color: 'yellow',
    size: sizeChip,
  },
  {
    text: 'HTML',
    icon: 'mdi-language-html5',
    color: 'orange',
    size: sizeChip,
  },
  {
    text: 'CSS',
    icon: 'mdi-language-css3',
    color: 'blue',
    size: sizeChip,
  },
  {
    text: 'SCSS',
    icon: 'mdi-sass',
    color: 'pink',
    size: sizeChip,
  },
  {
    text: 'Git',
    icon: 'mdi-git',
    color: 'orange',
    size: sizeChip,
  },
  {
    text: 'GitHub',
    icon: 'mdi-github',
    color: 'white',
    size: sizeChip,
  },
]
</script>
