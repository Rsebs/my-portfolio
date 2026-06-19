<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      flat
      class="glass-navbar px-md-12 px-4"
      :sticky="true"
      style="position: fixed; top: 0; left: 0; z-index: 1000"
    >
      <template v-slot:prepend v-if="$vuetify.display.mobile">
        <v-btn icon="mdi-menu" variant="text" @click="drawer = !drawer" />
      </template>

      <v-app-bar-title
        class="font-weight-bold gradient-text"
        style="cursor: pointer; max-width: fit-content"
        @click="scrollTo('about')"
      >
        SR.
      </v-app-bar-title>

      <v-spacer />

      <!-- Desktop Links -->
      <div v-if="!$vuetify.display.mobile" class="d-flex ga-6 align-center me-6">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link text-decoration-none text-body-1"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id)"
        >
          {{ $t(item.labelKey) }}
        </a>
      </div>

      <!-- Language Toggle -->
      <v-btn
        variant="tonal"
        color="secondary"
        prepend-icon="mdi-translate"
        size="small"
        class="text-none rounded-pill font-weight-bold"
        @click="toggleLanguage"
      >
        {{ locale === 'es' ? 'Español' : 'English' }}
      </v-btn>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="glass-card"
      style="background: rgba(11, 12, 16, 0.9) !important; backdrop-filter: blur(20px)"
      width="280"
    >
      <v-list nav class="py-6 px-4">
        <v-list-item class="mb-4">
          <div class="text-h5 font-weight-bold gradient-text">SR.</div>
          <div class="text-subtitle-2 text-grey">Sebastián Ruiz J.</div>
        </v-list-item>
        <v-divider class="mb-4" />
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          link
          :active="activeSection === item.id"
          active-color="primary"
          class="rounded-lg mb-2"
          @click="
            () => {
              scrollTo(item.id)
              drawer = false
            }
          "
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" class="me-2" />
          </template>
          <v-list-item-title class="text-body-1 font-weight-semibold">
            {{ $t(item.labelKey) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main style="padding-top: 80px">
      <v-container class="my-6 px-4" :max-width="$vuetify.display.mobile ? '100%' : '75%'">
        <!-- Profile Section -->
        <section id="about" class="section-container">
          <MyProfile />
        </section>

        <v-divider class="my-12 opacity-10" />

        <!-- Skills Section -->
        <section id="skills" class="section-container">
          <MySkills />
        </section>

        <v-divider class="my-12 opacity-10" />

        <!-- Experience Section -->
        <section id="experience" class="section-container">
          <MyExperience />
        </section>

        <v-divider class="my-12 opacity-10" />

        <!-- Projects Section -->
        <section id="projects" class="section-container">
          <MyProjects />
        </section>

        <v-divider class="my-12 opacity-10" />

        <!-- Education Section -->
        <section id="education" class="section-container">
          <MyEducation />
        </section>

        <v-divider class="my-12 opacity-10" />

        <!-- Footer -->
        <footer class="mt-12 mb-6 text-center">
          <div class="glass-card pa-6 d-flex flex-column align-center ga-4">
            <h4 class="text-h6 font-weight-bold gradient-text">Sebastián Ruiz Jaramillo</h4>
            <p class="text-body-2 text-grey-darken-1">
              {{ $t('developer_full_stack_of_software') }}
            </p>
            <div class="d-flex ga-3 flex-wrap justify-center">
              <ChipComponent v-for="(chip, index) in chipsInfo" :key="index" v-bind="chip" />
            </div>
            <v-divider class="w-50 my-2 opacity-10" />
            <p class="text-caption text-grey-darken-2">
              &copy; {{ new Date().getFullYear() }} &bull; Medellín, Colombia. All rights reserved.
            </p>
          </div>
        </footer>
      </v-container>
    </v-main>

    <!-- Scroll to Top Button -->
    <v-fade-transition>
      <v-btn
        v-show="showScrollTop"
        icon="mdi-arrow-up"
        color="primary"
        elevation="8"
        size="large"
        class="position-fixed"
        style="bottom: 32px; right: 32px; z-index: 99; border-radius: 50%"
        @click="scrollTo('about')"
      />
    </v-fade-transition>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import MyProfile from '@/views/MyProfile.vue'
import MySkills from '@/views/MySkills.vue'
import MyExperience from './views/MyExperience.vue'
import MyProjects from './views/MyProjects.vue'
import MyEducation from './views/MyEducation.vue'

import ChipComponent from '@/components/ui/ChipComponent.vue'
import type { ChipComponentProps } from './components/ui/props/ChipComponentProps'

import cv from '@/assets/documents/cv_rsebs.pdf'
import cv_english from '@/assets/documents/cv_rsebs_english.pdf'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  localStorage.setItem('portfolio_lang', locale.value)
}

const drawer = ref(false)
const activeSection = ref('about')
const showScrollTop = ref(false)

const navItems = [
  { id: 'about', labelKey: 'nav_about', icon: 'mdi-account-outline' },
  { id: 'skills', labelKey: 'nav_skills', icon: 'mdi-code-tags' },
  { id: 'experience', labelKey: 'nav_experience', icon: 'mdi-briefcase-outline' },
  { id: 'projects', labelKey: 'nav_projects', icon: 'mdi-xml' },
  { id: 'education', labelKey: 'nav_education', icon: 'mdi-school-outline' },
]

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400

  const scrollPosition = window.scrollY + 120 // Offset for sticky navbar

  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = item.id
        break
      }
    }
  }
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const navbarOffset = 70
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Trigger once initially
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
.section-container {
  padding-top: 3rem;
  padding-bottom: 2rem;
}
.opacity-10 {
  opacity: 0.1 !important;
}
</style>
