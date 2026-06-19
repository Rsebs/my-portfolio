<template>
  <v-row class="align-center py-6">
    <v-col cols="12" md="3" class="d-flex justify-center">
      <div class="avatar-wrapper rounded-circle">
        <v-img
          :width="180"
          aspect-ratio="1"
          cover
          :src="myPhoto"
          class="rounded-circle profile-img"
        />
      </div>
    </v-col>

    <v-col cols="12" md="9">
      <div class="d-flex flex-column justify-space-between h-100 ga-4 text-center text-md-start">
        <div>
          <h1 class="text-h3 text-md-h2 font-weight-black gradient-name mb-2">Sebastián Ruiz J.</h1>
          <p
            class="text-h6 font-weight-medium text-grey-lighten-1 d-flex align-center justify-center justify-md-start ga-2"
          >
            <v-icon icon="mdi-code-json" color="primary" />
            <span>{{ $t('developer_full_stack_of_software') }}</span>
          </p>
        </div>

        <p
          class="text-body-1 text-grey-lighten-2 d-flex align-center justify-center justify-md-start ga-2"
        >
          <v-icon icon="mdi-map-marker" color="secondary" />
          Medellín, Colombia
        </p>

        <div class="d-flex ga-2 align-center justify-center justify-md-start flex-wrap">
          <ChipComponent v-for="(chip, index) in chipsInfo" :key="index" v-bind="chip" />
        </div>
      </div>
    </v-col>
  </v-row>

  <!-- About Me Section -->
  <v-card class="glass-card pa-6 pa-md-8 mt-8">
    <div class="d-flex align-center mb-4">
      <v-avatar color="primary-lighten-1" variant="tonal" class="me-3" size="small">
        <v-icon icon="mdi-account" color="primary" />
      </v-avatar>
      <h2 class="text-h5 font-weight-bold mb-0 section-subtitle">{{ $t('about_me') }}</h2>
    </div>
    <p class="text-body-1 text-grey-lighten-1" style="line-height: 1.8">
      {{ $t('about_me_description') }}
    </p>
  </v-card>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from '@/components/ui/props/ChipComponentProps'
import ChipComponent from '@/components/ui/ChipComponent.vue'

import cv from '@/assets/documents/cv_rsebs.pdf'
import cv_english from '@/assets/documents/cv_rsebs_english.pdf'
import myPhoto from '@/assets/img/my-photo.png'

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const chipsInfo = computed<ChipComponentProps[]>(() => [
  {
    icon: 'mdi-email',
    text: 'sebastiantianruizj2014@gmail.com',
    variant: 'elevated',
    href: 'mailto:sebastiantianruizj2014@gmail.com',
    target: '_blank',
    color: 'primary',
  },
  {
    icon: 'mdi-file-document',
    variant: 'outlined',
    href: locale.value === 'es' ? cv : cv_english,
    target: '_blank',
    color: 'secondary',
  },
  {
    icon: 'mdi-linkedin',
    variant: 'outlined',
    href: 'https://www.linkedin.com/in/sebastianruizjaramillo/',
    target: '_blank',
    color: 'primary',
  },
  {
    icon: 'mdi-github',
    variant: 'outlined',
    href: 'https://github.com/rsebs',
    target: '_blank',
    color: 'primary',
  },
])
</script>

<style scoped>
.avatar-wrapper {
  background: rgba(212, 93, 255, 0.5);
  padding: 4px;
  box-shadow: 0 0 25px rgba(134, 58, 253, 0.35);
  display: inline-block;
  transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.4s ease;
}

.avatar-wrapper:hover {
  transform: rotate(3deg) scale(1.05);
  box-shadow: 0 0 40px rgba(212, 93, 255, 0.5);
}

.profile-img {
  background-color: #141521;
}

.section-subtitle {
  background: none !important;
  -webkit-text-fill-color: initial !important;
  background-clip: initial !important;
  color: #ffffff !important;
  font-size: 1.5rem !important;
  margin-bottom: 0 !important;
}
.section-subtitle::after {
  display: none !important;
}
</style>
