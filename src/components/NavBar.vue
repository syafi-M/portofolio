<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[99] transition-all duration-300',
      scrolled
        ? 'bg-[#0e0c2a]/70 backdrop-blur-md shadow-sm'
        : 'bg-transparent backdrop-blur-none shadow-none',
    ]"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <div class="text-white text-xl font-bold tracking-wide">
        <a href="#home">Porto</a>
      </div>

      <!-- Hamburger button (mobile only) -->
      <button @click="menuOpen = !menuOpen" class="md:hidden text-white focus:outline-none">
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
        <a href="#about" class="hover:text-purple-400 transition-colors">About</a>
        <a href="#milestone" class="hover:text-purple-400 transition-colors">Milestone</a>
        <a href="#showcase" class="hover:text-purple-400 transition-colors">Showcase</a>
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
        class="md:hidden px-4 pt-4 pb-10 text-white text-sm font-medium bg-[#0e0c2a]/70 backdrop-blur-md"
      >
        <a href="#about" class="block py-2 text-lg hover:text-purple-400" @click="menuOpen = false"
          >About</a
        >
        <a
          href="#milestone"
          class="block py-2 text-lg hover:text-purple-400"
          @click="menuOpen = false"
          >Milestone</a
        >
        <a
          href="#showcase"
          class="block py-2 text-lg hover:text-purple-400"
          @click="menuOpen = false"
          >Showcase</a
        >
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, Transition } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

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
