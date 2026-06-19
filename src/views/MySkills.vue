<template>
  <div class="mb-4">
    <h2>{{ $t('technologies') }}</h2>

    <v-row class="mt-4">
      <v-col v-for="(group, idx) in skillGroups" :key="idx" cols="12" md="6" class="mb-6">
        <v-card class="glass-card pa-6 h-100 d-flex flex-column">
          <div class="d-flex align-center mb-6">
            <v-avatar size="small" color="secondary" variant="tonal" class="me-3">
              <v-icon :icon="group.icon" color="secondary" />
            </v-avatar>
            <h3 class="text-h6 font-weight-bold text-white mb-0">{{ $t(group.titleKey) }}</h3>
          </div>

          <div class="d-flex flex-wrap ga-3">
            <ChipComponent
              v-for="(chip, index) in group.skills"
              :key="index"
              v-bind="chip"
              class="skill-chip font-weight-medium"
              :style="{ '--glow-color': chip.color }"
              variant="outlined"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from '@/components/ui/props/ChipComponentProps'
import ChipComponent from '@/components/ui/ChipComponent.vue'

interface SkillGroup {
  titleKey: string
  icon: string
  skills: ChipComponentProps[]
}

const sizeChip = 'large'
const skillGroups: SkillGroup[] = [
  {
    titleKey: 'cat_frontend',
    icon: 'mdi-xml',
    skills: [
      { text: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883', size: sizeChip },
      { text: 'Vuetify', icon: 'mdi-vuetify', color: '#1867c0', size: sizeChip },
      { text: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178c6', size: sizeChip },
      { text: 'JavaScript', icon: 'mdi-language-javascript', color: '#f7df1e', size: sizeChip },
      { text: 'HTML', icon: 'mdi-language-html5', color: '#e34f26', size: sizeChip },
      { text: 'CSS', icon: 'mdi-language-css3', color: '#1572b6', size: sizeChip },
      { text: 'SCSS', icon: 'mdi-sass', color: '#cc6699', size: sizeChip },
    ],
  },
  {
    titleKey: 'cat_backend',
    icon: 'mdi-server',
    skills: [
      { text: 'PHP', icon: 'mdi-language-php', color: '#777bb4', size: sizeChip },
      { text: 'Laravel', icon: 'mdi-laravel', color: '#ff2d20', size: sizeChip },
      { text: 'Java', icon: 'mdi-language-java', color: '#007396', size: sizeChip },
      { text: 'Spring Boot', icon: 'mdi-leaf', color: '#6db33f', size: sizeChip },
      { text: 'Python', icon: 'mdi-language-python', color: '#3776ab', size: sizeChip },
    ],
  },
  {
    titleKey: 'cat_database_cloud',
    icon: 'mdi-cloud-outline',
    skills: [
      { text: 'MySQL', icon: 'mdi-database', color: '#4479a1', size: sizeChip },
      { text: 'PostgreSQL', icon: 'mdi-database', color: '#336791', size: sizeChip },
      { text: 'MongoDB', icon: 'mdi-leaf', color: '#47a248', size: sizeChip },
      { text: 'Microsoft Azure', icon: 'mdi-cloud', color: '#0089d6', size: sizeChip },
    ],
  },
  {
    titleKey: 'cat_tools',
    icon: 'mdi-wrench-outline',
    skills: [
      { text: 'Git', icon: 'mdi-git', color: '#f05032', size: sizeChip },
      { text: 'GitHub', icon: 'mdi-github', color: '#ffffff', size: sizeChip },
    ],
  },
]
</script>

<style scoped>
.skill-chip {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: var(--glow-color) !important;
}

.skill-chip:hover {
  transform: translateY(-3px) scale(1.03);
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: var(--glow-color) !important;
  box-shadow: 0 4px 15px -3px var(--glow-color) !important;
}
</style>
