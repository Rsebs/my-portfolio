import { createI18n } from 'vue-i18n'
import messages from '@/lang'

const getBrowserLanguage = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedLang = window.localStorage.getItem('portfolio_lang')
    if (savedLang === 'en' || savedLang === 'es') {
      return savedLang
    }
  }

  if (typeof navigator !== 'undefined') {
    const lang = navigator.language || (navigator as { userLanguage?: string }).userLanguage
    if (lang && lang.startsWith('es')) {
      return 'es'
    }
  }

  return 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
