<template>
  <div>
    <h2>{{ $t('projects') }}</h2>

    <div class="my-6">
      <v-card
        v-for="(project, i) in projects"
        :key="i"
        class="glass-card mb-8 pa-6 project-card"
        elevation="0"
      >
        <v-row align="center">
          <!-- Left Column: Details -->
          <v-col cols="12" md="6" class="pe-md-6">
            <div class="d-flex align-center mb-4">
              <v-avatar color="primary" variant="tonal" size="large" class="me-4 rounded-lg">
                <v-icon :icon="project.icon" size="large" :color="project.color"></v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h5 font-weight-black text-white">{{ project.title }}</h3>
                <div class="text-subtitle-2 text-grey-lighten-1">{{ $t(project.subtitleKey) }}</div>
              </div>
            </div>

            <p class="text-body-1 text-grey-lighten-2 mb-6" style="line-height: 1.7">
              {{ $t(project.descriptionKey) }}
            </p>

            <div class="d-flex flex-wrap ga-2 mb-6">
              <ChipComponent
                v-for="(tech, j) in project.technologies"
                :key="j"
                v-bind="tech"
                variant="tonal"
                size="small"
                class="project-tech-chip font-weight-bold"
                :style="{
                  color: tech.color + ' !important',
                  borderColor: tech.color + '44 !important',
                }"
              />
            </div>

            <div class="d-flex ga-3">
              <v-tooltip
                v-for="(link, idx) in project.links"
                :key="idx"
                :text="$t(link.titleKey)"
                location="top"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    :href="link.href"
                    target="_blank"
                    variant="tonal"
                    :color="link.icon === 'mdi-link' ? 'secondary' : 'primary'"
                    class="rounded-pill action-btn"
                    icon
                    v-bind="props"
                  >
                    <v-icon :icon="link.icon"></v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-col>

          <!-- Right Column: Image -->
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <div class="img-container rounded-lg">
              <v-img
                :src="project.image"
                aspect-ratio="16/9"
                cover
                class="project-img"
                gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.45)"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height bg-grey-darken-4">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                </template>
              </v-img>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
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
    color: '#863add',
    technologies: [
      { text: 'Vue 3', icon: 'mdi-vuejs', color: '#42b883' },
      { text: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178c6' },
      { text: 'PHP', icon: 'mdi-language-php', color: '#777bb4' },
      { text: 'Laravel', icon: 'mdi-laravel', color: '#ff2d20' },
      { text: 'MySQL', icon: 'mdi-database', color: '#4479a1' },
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
    color: '#d45dff',
    technologies: [{ text: 'Astro', icon: 'mdi-rocket-launch', color: '#ff5d01' }],
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

<style scoped>
.project-card {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.img-container {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.project-img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-tech-chip {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.action-btn {
  transition: all 0.3s ease !important;
}

.action-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(134, 58, 253, 0.3);
}
</style>
