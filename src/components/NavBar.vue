<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[99] transition-all duration-300',
      scrolled || menuOpen
        ? 'bg-gradient-to-b from-[#0e0c2a]/50 md:from-[#0e0c2a]/90 to-transparent backdrop-blur-sm'
        : 'bg-transparent backdrop-blur-none shadow-none',
    ]"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <div class="text-white text-xl font-bold tracking-wide relative">
        <a
          href="#home"
          class="relative text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition"
        >
          Portofolio
        </a>
      </div>

      <!-- Hamburger button (mobile only) -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-white focus:outline-none drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop menu -->
      <div
        class="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium text-white"
      >
        <a href="#about" class="hover:text-purple-400 transition-colors">{{
          tm('another.about')
        }}</a>
        <a href="#milestone" class="hover:text-purple-400 transition-colors">{{
          tm('another.milestone')
        }}</a>
        <a href="#showcase" class="hover:text-purple-400 transition-colors">{{
          tm('another.showcase')
        }}</a>
        <button
          @click="toggleLanguage"
          class="p-2 bg-white/10 rounded hover:bg-white/20 transition"
        >
          <Languages class="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden px-4 pt-4 pb-10 text-white text-sm font-medium drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition"
      >
        <a
          href="#about"
          class="block py-2 text-lg hover:text-purple-400"
          @click="menuOpen = false"
          >{{ tm('another.about') }}</a
        >
        <a
          href="#milestone"
          class="block py-2 text-lg hover:text-purple-400"
          @click="menuOpen = false"
          >{{ tm('another.milestone') }}</a
        >
        <a
          href="#showcase"
          class="block py-2 text-lg hover:text-purple-400"
          @click="menuOpen = false"
          >{{ tm('another.showcase') }}</a
        >
        <div class="w-full flex justify-center mt-5">
          <button
            @click="toggleLanguage"
            class="p-2 px-4 bg-white/10 flex items-center gap-2 rounded hover:bg-white/20 transition"
          >
            <Languages class="max-w-5 max-h-5 text-white" />
            <p>{{ tm('another.translate') }}</p>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { Languages } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()

const scrolled = ref(false)
const menuOpen = ref(false)

async function toggleLanguage() {
  const newLang = locale.value === 'en' ? 'id' : 'en'
  locale.value = newLang
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
