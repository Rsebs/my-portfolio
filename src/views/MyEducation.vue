<template>
  <div>
    <h2>{{ $t('education') }}</h2>

    <v-row class="mt-4">
      <v-col v-for="(item, i) in educationList" :key="i" cols="12" md="6" class="mb-4">
        <v-card class="glass-card pa-6 h-100 education-card d-flex align-start ga-4">
          <v-avatar color="secondary" variant="tonal" size="large" class="rounded-lg">
            <v-icon :icon="item.icon" color="secondary" size="large"></v-icon>
          </v-avatar>
          <div>
            <h3 class="text-h6 font-weight-black text-white mb-1">
              {{ item.school }}
            </h3>
            <div class="text-subtitle-1 text-primary font-weight-bold mb-2">
              {{ $t(item.degreeKey) }}
            </div>
            <p class="text-body-2 text-grey-lighten-2 mb-0" style="line-height: 1.6">
              {{ $t(item.descriptionKey) }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  school: string
  degreeKey: string
  descriptionKey: string
  icon: string
}

const educationList = ref<Education[]>([
  {
    school: 'Universidad Pascual Bravo',
    degreeKey: 'education_degree_pascual',
    descriptionKey: 'education_desc_pascual',
    icon: 'mdi-school',
  },
  {
    school: 'Politécnico Mayor',
    degreeKey: 'education_degree_politecnico',
    descriptionKey: 'education_desc_politecnico',
    icon: 'mdi-bag-personal',
  },
])
</script>

<style scoped>
.education-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.education-card:hover {
  transform: translateY(-4px) !important;
}
</style>
