<template>
  <h2>Formación</h2>

  <div class="my-4">
    <v-list bg-color="transparent" lines="two">
      <v-list-item v-for="(item, i) in educationList" :key="i" class="mb-4 pa-0">
        <template v-slot:prepend>
          <div class="me-4">
            <v-avatar color="purple-darken-4" size="large">
              <v-icon :icon="item.icon" color="purple-lighten-4"></v-icon>
            </v-avatar>
          </div>
        </template>

        <v-list-item-title class="font-weight-bold text-h6 mb-1">
          {{ item.school }}
        </v-list-item-title>

        <v-list-item-subtitle class="text-body-1 text-high-emphasis mb-1">
          {{ item.degree }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-body-2 text-medium-emphasis">
          {{ item.description }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  school: string
  degree: string
  description: string
  icon: string
}

const educationList = ref<Education[]>([
  {
    school: 'Politécnico Mayor',
    degree: 'Técnico en Desarrollo de Software',
    description: 'Desarrollo de software con Java, Spring Boot, Python y JavaScript.',
    icon: 'mdi-bag-personal',
  },
])
</script>
