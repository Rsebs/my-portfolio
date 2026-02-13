<template>
  <v-app>
    <v-main>
      <v-container class="my-12" :max-width="$vuetify.display.mobile ? '100%' : '65%'">
        <MyProfile />

        <v-divider />

        <section>
          <MySkills />
        </section>

        <section>
          <MyExperience />
        </section>

        <section>
          <MyProjects />
        </section>

        <section>
          <MyEducation />
        </section>

        <v-divider />

        <section>
          <h4 class="my-3">Sebastián Ruiz Jaramillo</h4>
          <div class="d-flex ga-2" :class="{ 'flex-wrap': $vuetify.display.mobile }">
            <ChipComponent v-for="(chip, index) in chipsInfo" :key="index" v-bind="chip" />
          </div>
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MyProfile from '@/views/MyProfile.vue'
import MySkills from '@/views/MySkills.vue'
import MyExperience from './views/MyExperience.vue'
import MyProjects from './views/MyProjects.vue'
import MyEducation from './views/MyEducation.vue'

import ChipComponent from '@/components/ui/ChipComponent.vue'
import type { ChipComponentProps } from './components/ui/props/ChipComponentProps'

import cv from '@/assets/documents/cv_rsebs.pdf'

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

<style scoped>
section {
  margin: 2rem 0;
}
</style>
