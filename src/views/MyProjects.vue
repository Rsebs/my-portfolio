<template>
  <h2>Proyectos</h2>

  <div class="my-4">
    <v-card class="mb-8 pa-4 bg-transparent" elevation="0">
      <v-card-title>Próximamente...</v-card-title>
    </v-card>
    <v-card
      v-for="(project, i) in projects"
      :key="i"
      :class="['mb-8', 'pa-4', 'bg-transparent']"
      elevation="0"
    >
      <v-row align="center">
        <!-- Left Column: Details -->
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-4">
            <v-avatar color="transparent" size="x-large" class="me-4" rounded="0">
              <v-icon :icon="project.icon" size="x-large" :color="project.color"></v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h5 font-weight-bold">{{ project.title }}</h3>
              <div class="text-subtitle-1 text-grey">{{ project.subtitle }}</div>
            </div>
          </div>

          <div class="text-body-1 mb-4">
            {{ project.description }}
          </div>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <ChipComponent
              v-for="(tech, j) in project.technologies"
              :key="j"
              v-bind="tech"
              variant="tonal"
              size="small"
              class="me-2 mb-2"
            />
          </div>

          <div class="d-flex gap-4">
            <v-btn
              v-if="project.deployLink"
              :href="project.deployLink"
              target="_blank"
              variant="tonal"
              color="primary"
              class="me-2"
              rounded="pill"
              icon="mdi-link"
            />
            <v-btn
              v-if="project.githubLink"
              :href="project.githubLink"
              target="_blank"
              variant="tonal"
              color="primary"
              class="me-2"
              rounded="pill"
              icon="mdi-github"
            />
          </div>
        </v-col>

        <!-- Right Column: Image -->
        <v-col cols="12" md="6">
          <v-img
            :src="project.image"
            aspect-ratio="16/9"
            cover
            class="rounded-lg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from '@/components/ui/props/ChipComponentProps'
import ChipComponent from '@/components/ui/ChipComponent.vue'

import { ref } from 'vue'

interface Project {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  technologies: ChipComponentProps[]
  deployLink?: string
  githubLink?: string
  image: string
}

const projects = ref<Project[]>([
  // {
  //   title: 'Software random',
  //   subtitle: 'Hazte rico y más rico',
  //   description: 'Software para vender productos.',
  //   icon: 'mdi-chart-bar',
  //   color: 'primary',
  //   technologies: [
  //     { text: 'PHP', icon: 'mdi-language-php', color: 'secondary' },
  //     { text: 'Laravel', icon: 'mdi-language-php', color: 'secondary' },
  //   ],
  //   deployLink: 'https://example.com',
  //   githubLink: 'https://github.com',
  //   image: 'https://picsum.photos/id/1/800/450',
  // },
  // {
  //   title: 'Ecommerce random',
  //   subtitle: 'Tienda virtual',
  //   description: 'Ecommerce para vender productos.',
  //   icon: 'mdi-bug',
  //   color: 'primary',
  //   technologies: [{ text: 'Vue JS', icon: 'mdi-vuejs', color: 'secondary' }],
  //   deployLink: 'https://example.com',
  //   githubLink: 'https://github.com',
  //   image: 'https://picsum.photos/id/2/800/450',
  // },
])
</script>
