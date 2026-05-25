<template>
  <h2>{{ $t('projects') }}</h2>

  <div class="my-4">
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
              <div class="text-subtitle-1 text-grey">{{ $t(project.subtitleKey) }}</div>
            </div>
          </div>

          <div class="text-body-1 mb-4">
            {{ $t(project.descriptionKey) }}
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
            <v-tooltip
              v-for="(link, i) in project.links"
              :key="i"
              :text="$t(link.titleKey)"
              location="bottom"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  :href="link.href"
                  target="_blank"
                  variant="tonal"
                  color="primary"
                  class="me-2"
                  rounded="pill"
                  :icon="link.icon"
                  v-bind="props"
                />
              </template>
            </v-tooltip>
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
                <v-progress-circular indeterminate color="grey-lighten-4" />
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

// Images
import booknestImg from '@/assets/img/projects/booknest.png'
import sociisoftImg from '@/assets/img/projects/sociisoft.png'

import { ref } from 'vue'

interface ProjectLink {
  titleKey: string
  icon: string
  href: string
}

interface Project {
  title: string
  subtitleKey: string
  descriptionKey: string
  icon: string
  color: string
  technologies: ChipComponentProps[]
  links?: ProjectLink[]
  image: string
}

const projects = ref<Project[]>([
  {
    title: 'Booknest',
    subtitleKey: 'project_subtitle_booknest',
    descriptionKey: 'project_desc_booknest',
    icon: 'mdi-bookshelf',
    color: 'primary',
    technologies: [
      { text: 'Vue 3', icon: 'mdi-vuejs', color: 'secondary' },
      { text: 'Typescript', icon: 'mdi-language-typescript', color: 'secondary' },
      { text: 'PHP', icon: 'mdi-language-php', color: 'secondary' },
      { text: 'Laravel', icon: 'mdi-language-php', color: 'secondary' },
      { text: 'MySQL', icon: 'mdi-database', color: 'secondary' },
    ],
    links: [
      {
        icon: 'mdi-link',
        href: 'https://booknestrsebs.netlify.app',
        titleKey: 'project_link_deploy',
      },
      {
        titleKey: 'project_link_front',
        icon: 'mdi-github',
        href: 'https://github.com/Rsebs/booknest-front',
      },
      {
        titleKey: 'project_link_back',
        icon: 'mdi-github',
        href: 'https://github.com/Rsebs/booknest-api',
      },
    ],
    image: booknestImg,
  },
  {
    title: 'Sociisoft',
    subtitleKey: 'project_subtitle_sociisoft',
    descriptionKey: 'project_desc_sociisoft',
    icon: 'mdi-code-tags',
    color: 'primary',
    technologies: [{ text: 'Astro', icon: 'mdi-rocket-launch', color: 'secondary' }],
    links: [
      {
        href: 'https://sociisoft.com',
        icon: 'mdi-link',
        titleKey: 'project_link_deploy',
      },
    ],
    image: sociisoftImg,
  },
])
</script>
