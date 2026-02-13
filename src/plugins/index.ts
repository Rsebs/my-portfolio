import type { App } from 'vue'
import vuetify from './vuetify'

export default function registerPlugins(app: App) {
  app.use(vuetify)
}
