<template>
  <div>
    <h2>{{ $t('experience') }}</h2>

    <div class="my-6">
      <v-timeline align="start" density="compact" side="end">
        <v-timeline-item
          v-for="(experience, i) in experiences"
          :key="i"
          :dot-color="experience.color"
          size="small"
        >
          <v-card class="glass-card pa-5 mb-4 me-md-6 timeline-card">
            <div
              class="d-flex flex-column flex-sm-row justify-space-between align-start align-sm-center mb-2 ga-2"
            >
              <div>
                <h3 class="text-h6 font-weight-bold text-white mb-0">
                  {{ $t(experience.titleKey) }}
                </h3>
                <div class="text-subtitle-1 text-primary font-weight-bold">
                  {{ experience.companyKey ? $t(experience.companyKey) : experience.company }}
                </div>
              </div>
              <div
                v-if="experience.dateKey"
                class="date-badge text-caption font-weight-medium px-3 py-1 rounded-pill"
              >
                {{ $t(experience.dateKey) }}
              </div>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mt-3 mb-0" style="line-height: 1.7">
              {{ $t(experience.descriptionKey) }}
            </p>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
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
    color: '#863add',
  },
  {
    titleKey: 'experience_title_neurologico',
    company: 'Neurológico de Colombia',
    dateKey: 'experience_date_neurologico',
    descriptionKey: 'experience_desc_neurologico',
    color: '#d45dff',
  },
  {
    titleKey: 'experience_title_freelance',
    companyKey: 'experience_company_freelance',
    descriptionKey: 'experience_desc_freelance',
    color: '#2196f3',
  },
])
</script>

<style scoped>
.timeline-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.timeline-card:hover {
  transform: translateX(5px) translateY(-2px) !important;
}
.date-badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}
</style>
