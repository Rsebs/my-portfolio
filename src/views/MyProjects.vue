<template>
  <h2>Proyectos</h2>

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
            <v-tooltip
              v-for="(link, i) in project.links"
              :key="i"
              :text="link.title"
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
  title: string
  icon: string
  href: string
}

interface Project {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  technologies: ChipComponentProps[]
  links?: ProjectLink[]
  image: string
}

const projects = ref<Project[]>([
  {
    title: 'Booknest',
    subtitle: 'Ecommerce de libros',
    description:
      'Plataforma ecommerce de libros con arquitectura desacoplada (Vue 3 + Laravel API), que permite a usuarios gestionar publicaciones, compras y catálogo en tiempo real. Implementa autenticación, control de roles y persistencia en MySQL.',
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
        title: 'Url despliegue',
      },
      {
        title: 'Codigo frontend',
        icon: 'mdi-github',
        href: 'https://github.com/Rsebs/booknest-front',
      },
      {
        title: 'Codigo backend',
        icon: 'mdi-github',
        href: 'https://github.com/Rsebs/booknest-api',
      },
    ],
    image: booknestImg,
  },
  {
    title: 'Sociisoft',
    subtitle: 'Landing page para casa de software',
    description:
      'Landing page corporativa orientada a conversión para una casa de software, enfocada en presentar servicios, generar confianza y captar clientes. Desarrollada con Astro priorizando rendimiento, SEO y carga rápida.',
    icon: 'mdi-code-tags',
    color: 'primary',
    technologies: [{ text: 'Astro', icon: 'mdi-rocket-launch', color: 'secondary' }],
    links: [
      {
        href: 'https://sociisoft.com',
        icon: 'mdi-link',
        title: 'Url despliegue',
      },
    ],
    image: sociisoftImg,
  },
])
</script>
