<template>
  <h2>{{ $t('experience') }}</h2>

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
            <strong>{{ $t(experience.titleKey) }}</strong> @ {{ experience.companyKey ? $t(experience.companyKey) : experience.company }}
          </div>
          <div v-if="experience.dateKey" class="text-caption text-grey">{{ $t(experience.dateKey) }}</div>
          <div class="mt-2">{{ $t(experience.descriptionKey) }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Experience {
  titleKey: string
  companyKey?: string
  company?: string
  dateKey?: string
  descriptionKey: string
  color: string
}

const experiences = ref<Experience[]>([
  {
    titleKey: 'experience_title_psicol',
    company: 'Psicol SA',
    dateKey: 'experience_date_psicol',
    descriptionKey: 'experience_desc_psicol',
    color: 'purple',
  },
  {
    titleKey: 'experience_title_neurologico',
    company: 'Neurológico de Colombia',
    dateKey: 'experience_date_neurologico',
    descriptionKey: 'experience_desc_neurologico',
    color: 'blue',
  },
  {
    titleKey: 'experience_title_freelance',
    companyKey: 'experience_company_freelance',
    descriptionKey: 'experience_desc_freelance',
    color: 'green',
  },
])
</script>
