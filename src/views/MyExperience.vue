<template>
  <h2>Experiencia</h2>

  <div class="my-4">
    <v-timeline align="start" density="compact">
      <v-timeline-item
        v-for="(experience, i) in experiences"
        :key="i"
        :dot-color="experience.color"
        size="x-small"
      >
        <div class="mb-4">
          <div class="font-weight-normal">
            <strong>{{ experience.title }}</strong> @ {{ experience.company }}
          </div>
          <div class="text-caption text-grey">{{ experience.date }}</div>
          <div class="mt-2">{{ experience.description }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Experience {
  title: string
  company: string
  date: string
  description: string
  color: string
}

const experiences = ref<Experience[]>([
  {
    title: 'Desarrollador de software fullstack',
    company: 'Psicol SA',
    date: 'Diciembre 2023 - Abril 2026',
    description:
      'Principalmente dando mantenimiento a un sistema legacy en PHP puro y también desarrollando proyectos API en PHP Laravel con conexión a un frontend en Vue.js.',
    color: 'purple',
  },
  {
    title: 'Desarrollador Pasante',
    company: 'Neurológico de Colombia',
    date: 'Marzo 2023 - Noviembre 2023',
    description:
      'Desarrollo de aplicaciones con JAVA Spring Boot. Realizando mantenimiento a sistemas legacy y desarrollando nuevas funcionalidades.',
    color: 'blue',
  },
  {
    title: 'Desarrollador Web Freelance',
    company: 'Independiente',
    date: 'Enero 2023 - Diciembre 2023',
    description:
      'Desarrollo de aplicaciones web personalizadas y sitios corporativos. Especializado en la creación de interfaces responsivas con Vue.js y consumo de APIs REST.',
    color: 'green',
  },
])
</script>
