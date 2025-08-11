<template>
  <section
    id="home"
    ref="heroRef"
    class="lg:h-screen lg:max-h-screen flex flex-col lg:flex-row items-start justify-between px-[10%] md:py-24 lg:pt-14 py-16 relative overflow-hidden cursor-hover"
  >
    <div ref="parallaxText" class="space-y-4 relative z-10 w-full">
      <p class="text-5xl md:text-7xl font-extrabold tracking-tight">Fullstack</p>
      <p
        class="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-extrabold tracking-tight"
      >
        Developer
      </p>
      <p class="text-lg md:text-2xl text-white font-mono h-6 my-5">
        <span>{{ typedText }}</span
        ><span class="blinking-cursor">|</span>
      </p>
      <p
        class="md:text-xl lg:text-lg font-light text-gray-300 max-w-xl md:max-w-2xl lg:max-w-xl mb-6"
      >
        Membuat website yang inovatif, fungsional, dan ramah pengguna, dengan fokus pada pengalaman
        visual yang memukau dan performa yang optimal
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-3 mb-[18rem] md:mb-[18rem] lg:mb-0">
        <span
          v-for="tech in ['React', 'Vue', 'Node.js', 'Laravel', 'Tailwind CSS']"
          :key="tech"
          class="px-4 py-1 bg-white/10 text-white rounded-full text-xs md:text-base lg:text-sm font-medium backdrop-blur hover:bg-white/20 transition"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="overflow-hidden h-full absolute top-0 left-0 lg:left-auto right-0 z-0 mt-[6rem] md:mt-[8rem] lg:mt-0"
      >
        <Vue3Lottie
          :animationData="Gif"
          class="max-w-[220px] md:max-w-[280px] lg:max-w-[340px] h-auto"
          :loop="true"
          :autoplay="true"
        />
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-wrap md:gap-6 gap-1 justify-center lg:justify-start my-8 relative z-10">
        <!-- Projects Button -->
        <div class="relative group">
          <div
            class="absolute inset-0 rounded-lg bg-purple-500 opacity-50 blur-md -z-10 transition group-hover:opacity-80"
          ></div>
          <a
            href="#"
            class="inline-flex items-center gap-2 px-8 py-3 border border-purple-500 text-purple-300 rounded-lg bg-black/80 backdrop-blur z-10 relative whitespace-nowrap"
          >
            <span
              class="transform transition-transform duration-300 group-hover:translate-x-[-0.25rem] md:text-xl"
            >
              Projects
            </span>
            <SquareArrowOutUpRight
              class="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:translate-x-1.5"
            />
          </a>
        </div>

        <!-- Contacts Button -->
        <div class="relative group">
          <div
            class="absolute inset-0 rounded-lg bg-indigo-500 opacity-50 blur-md -z-10 transition group-hover:opacity-80"
          ></div>

          <a
            href="#"
            class="inline-flex items-center gap-2 px-8 py-3 border border-indigo-500 text-indigo-300 rounded-lg bg-black/80 backdrop-blur z-10 relative whitespace-nowrap transition-all duration-300"
          >
            <span
              class="transform transition-transform duration-300 group-hover:translate-x-[-0.25rem] md:text-xl"
            >
              Contacts
            </span>
            <MailPlus
              class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12"
            />
          </a>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center lg:justify-start gap-6 text-white text-xl">
        <!-- GitHub -->
        <div class="relative group flex flex-col items-center">
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm whitespace-nowrap text-purple-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            syafi-M
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-purple-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Github
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-purple-400 z-10 relative"
            />
          </div>
        </div>

        <!-- Instagram -->
        <div class="relative group flex flex-col items-center">
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            Instagram
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-indigo-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Instagram
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-indigo-400 z-10 relative"
            />
          </div>
        </div>

        <!-- Divider -->
        <span class="text-white/50 mx-2">|</span>

        <!-- Instagram (Again) -->
        <div class="relative group flex flex-col items-center">
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            Instagram
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-indigo-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Instagram
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-indigo-400 z-10 relative"
            />
          </div>
        </div>

        <!-- GitHub (Again) -->
        <div class="relative group flex flex-col items-center">
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm text-purple-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            aditlfp
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-purple-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Github
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-purple-400 z-10 relative"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Github, Instagram, MailPlus, SquareArrowOutUpRight } from 'lucide-vue-next'
import Gif from '../assets/Coding.json'
import { Vue3Lottie } from 'vue3-lottie'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const parallaxText = ref(null)

const typedText = ref('')
const phrases = ['Web Development', 'Tech Enthusiast', 'Fullstack Engineer']
let currentPhrase = 0
let currentChar = 0
let isDeleting = false

function typeLoop() {
  const current = phrases[currentPhrase]

  if (!isDeleting) {
    typedText.value = current.slice(0, currentChar++)
    if (currentChar > current.length) {
      isDeleting = true
      setTimeout(typeLoop, 1200) // pause before deleting
      return
    }
  } else {
    typedText.value = current.slice(0, currentChar--)
    if (currentChar < 0) {
      isDeleting = false
      currentChar = 0
      currentPhrase = (currentPhrase + 1) % phrases.length
      setTimeout(typeLoop, 400) // short pause before next typing starts
      return
    }
  }

  const delay = isDeleting ? 50 : 100 + Math.random() * 50
  setTimeout(typeLoop, delay)
}

onMounted(() => {
  const alreadyPlayed = sessionStorage.getItem('introPlayed')
  if (alreadyPlayed === 'false') {
    // blur fade-in animation
    gsap.from(heroRef.value, {
      opacity: 0,
      y: 0,
      filter: 'blur(10px)',
      duration: 2,
      ease: 'power2.out',
      delay: 0.5,
      onUpdate: function () {
        gsap.set(heroRef.value, {
          filter: 'blur(' + (10 - this.progress() * 10) + 'px)',
        })
      },
    })
  }

  // start typing loop
  typeLoop()
})
</script>

<style scoped>
.blinking-cursor {
  animation: blink 1s step-end infinite;
  font-weight: bold;
  color: white;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
