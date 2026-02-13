<template>
  <v-row class="align-center">
    <v-col cols="12" md="2">
      <v-img :width="200" aspect-ratio="1/1" cover :src="myPhoto" class="rounded-circle" />
    </v-col>
    <v-col cols="12" md="10">
      <div class="d-flex flex-column justify-space-between h-100 ga-3">
        <h1 class="text-h3 font-weight-bold">Sebastián Ruiz J.</h1>
        <p class="text-h6"><v-icon icon="mdi-developer-board" /> Desarrollador de software</p>
        <p><v-icon icon="mdi-map-marker" /> Medellín, Colombia</p>

        <div class="d-flex ga-2" :class="{ 'flex-wrap': $vuetify.display.mobile }">
          <ChipComponent v-for="(chip, index) in chipsInfo" :key="index" v-bind="chip" />
        </div>
      </div>
    </v-col>
  </v-row>

  <section class="my-9">
    <h2>Sobre mí</h2>
    <p class="mt-2">
      Soy un programador inquieto con una doble vida, ya que trabajo en una prestigiosa empresa de
      software pero también he cometido todos los crímenes informáticos que existen. Tengo la
      sensación de que nada es lo que parece ser.
    </p>
  </section>
</template>

<script setup lang="ts">
import type { ChipComponentProps } from '@/components/ui/props/ChipComponentProps'
import ChipComponent from '@/components/ui/ChipComponent.vue'

import cv from '@/assets/documents/cv_rsebs.pdf'
import myPhoto from '@/assets/img/my-photo.jpg'

const chipsInfo: ChipComponentProps[] = [
  {
    icon: 'mdi-email',
    text: 'sebastiantianruizj2014@gmail.com',
    variant: 'elevated',
    href: 'mailto:sebastiantianruizj2014@gmail.com',
    target: '_blank',
  },
  {
    icon: 'mdi-file-document',
    variant: 'outlined',
    href: cv,
    target: '_blank',
  },
  {
    icon: 'mdi-linkedin',
    variant: 'outlined',
    href: 'https://www.linkedin.com/in/sebastianruizjaramillo/',
    target: '_blank',
  },
  {
    icon: 'mdi-github',
    variant: 'outlined',
    href: 'https://github.com/rsebs',
    target: '_blank',
  },
]
</script>
