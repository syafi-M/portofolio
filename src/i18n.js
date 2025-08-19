// src/i18n.js
import { createI18n } from 'vue-i18n'

// Fungsi untuk load semua file JSON di folder locales/<lang>
function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/**/*.json', { eager: true })
  const messages = {}

  for (const path in locales) {
    const matched = path.match(/\.\/locales\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+)\.json$/)
    if (matched) {
      const lang = matched[1] // contoh: 'en', 'id'
      const section = matched[2] // contoh: 'hero', 'footer'

      if (!messages[lang]) {
        messages[lang] = {}
      }

      // Masukkan langsung ke section
      messages[lang][section] = locales[path].default
    }
  }

  return messages
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'id',
  messages: loadLocaleMessages(),
})
