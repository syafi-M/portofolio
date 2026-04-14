<template>
  <section id="about" ref="storyRef" class="space-y-6 py-4 px-[2.5%] md:px-[10%] scroll-mt-[2rem]">
    <div class="text-center">
      <p
        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
      >
        {{ tm('about.title') }}
      </p>
      <div class="flex items-center justify-center space-x-4 mt-4 md:text-xl">
        <Brain class="text-purple-400" />
        <p>"{{ tm('about.subTitle') }}"</p>
        <Gift class="text-indigo-500" />
      </div>
    </div>
    <div class="story-shell min-h-full py-4 bg-[#0e0c2a]/50 text-white">
      <div class="container mx-auto px-2 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <!-- Optional center divider line -->
          <div class="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>
          <div class="md:hidden block absolute top-1/2 h-[4px] w-full bg-white/10"></div>
          <!-- Frontend Developer -->
          <div class="story-card text-center md:text-right space-y-4 z-10">
            <HoverImage :src="Front" :hoverSrc="FrontHover" class="mx-auto md:ml-auto" />
            <p class="text-lg font-semibold cursor-hover text-center">syafi-M</p>
            <h2
              class="text-2xl md:text-4xl font-bold cursor-hover bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
            >
              Frontend Developer
            </h2>
            <p class="text-base md:text-lg max-w-md md:ml-auto opacity-80 cursor-hover">
              {{ tm('about.frontDesc') }}
            </p>
          </div>
          <!-- Backend Developer -->
          <div class="story-card text-center md:text-left space-y-4 z-10">
            <HoverImage :src="Back" :hoverSrc="BackHover" class="mx-auto md:ml-auto" />
            <p class="text-lg font-semibold cursor-hover text-center">aditlfp</p>
            <h2
              class="text-2xl md:text-4xl font-bold cursor-hover bg-gradient-to-r to-purple-400 from-indigo-500 bg-clip-text text-transparent"
            >
              Backend Developer
            </h2>
            <p class="text-base md:text-lg max-w-md md:mr-auto opacity-80 cursor-hover">
              {{ tm('about.backDesc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-center md:text-lg opacity-70">
        {{ tm('about.desc') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Front from '../assets/front.webp'
import FrontHover from '../assets/front2.webp'
import Back from '../assets/back.webp'
import BackHover from '../assets/back2.webp'
import { Brain, Gift } from 'lucide-vue-next'
import HoverImage from './HoverImage.vue'
import { useI18n } from 'vue-i18n'

gsap.registerPlugin(ScrollTrigger)
const { tm } = useI18n()
const storyRef = ref(null)
let storyContext = null

const preloadImage = (src) => {
  const image = new Image()
  image.src = src
  return image
}

onMounted(() => {
  preloadImage(FrontHover)
  preloadImage(BackHover)

  storyContext = gsap.context(() => {
    const cards = gsap.utils.toArray('.story-card')

    cards.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      })
    })
  }, storyRef.value)
})

onBeforeUnmount(() => {
  storyContext?.revert()
})
</script>

<style scoped>
.story-card {
  transition: transform 0.3s ease;
}
.story-card:hover {
  transform: translateY(-4px);
}
section {
  font-family: 'IBM Plex Mono', monospace;
}
</style>
