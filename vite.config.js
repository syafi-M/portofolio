import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
  base: '/portofolio/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return
          }

          if (id.includes('vue3-lottie') || id.includes('lottie-web')) {
            return 'vendor-lottie'
          }

          if (id.includes('vue-router') || id.includes('vue-i18n')) {
            return 'vendor-routing'
          }

          if (id.includes('/vue/') || id.includes('@vue/')) {
            return 'vendor-vue'
          }

          if (id.includes('gsap')) {
            return 'vendor-gsap'
          }

          if (id.includes('axios')) {
            return 'vendor-network'
          }
        },
      },
    },
  },
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
})
