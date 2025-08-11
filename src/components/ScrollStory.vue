<template>
  <section id="about" ref="storyRef" class="space-y-6 py-4 px-[2.5%] md:px-[10%] scroll-mt-[2rem]">
    <div class="text-center">
      <p
        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
      >
        About Us
      </p>
      <div class="flex items-center justify-center space-x-4 mt-4 md:text-xl">
        <Brain class="text-purple-400" />
        <p>"Mengubah ide menjadi karya"</p>
        <Gift class="text-indigo-500" />
      </div>
    </div>
    <div class="story-block min-h-full py-4 bg-[#0e0c2a]/50 text-white">
      <div class="container mx-auto px-2 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <!-- Optional center divider line -->
          <div class="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>
          <div class="md:hidden block absolute top-1/2 h-[4px] w-full bg-white/10"></div>
          <!-- Frontend Developer -->
          <div class="story-block text-center md:text-right space-y-4 z-10">
            <HoverImage :src="Front" :hoverSrc="FrontHover" class="mx-auto md:ml-auto" />
            <p class="text-lg font-semibold cursor-hover text-center">syafi-M</p>
            <h2
              class="text-2xl md:text-4xl font-bold cursor-hover bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
            >
              Frontend Developer
            </h2>
            <p class="text-base md:text-lg max-w-md md:ml-auto opacity-80 cursor-hover">
              Membuat website modern, sistem desain yang konsisten, dan pengalaman pengguna berbasis
              riset.
            </p>
          </div>
          <!-- Backend Developer -->
          <div class="story-block text-center md:text-left space-y-4 z-10">
            <HoverImage :src="Back" :hoverSrc="BackHover" class="mx-auto md:ml-auto" />
            <p class="text-lg font-semibold cursor-hover text-center">aditlfp</p>
            <h2
              class="text-2xl md:text-4xl font-bold cursor-hover bg-gradient-to-r to-purple-400 from-indigo-500 bg-clip-text text-transparent"
            >
              Backend Developer
            </h2>
            <p class="text-base md:text-lg max-w-md md:mr-auto opacity-80 cursor-hover">
              Membangun sistem yang efisien, aman, dan scalable dengan struktur data yang rapi dan
              optimal.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-center md:text-lg opacity-70">
        Kami adalah tim pengembang web yang berkomitmen untuk menciptakan solusi digital yang
        inovatif dan fungsional. Dengan pengalaman di berbagai teknologi, kami siap membantu Anda
        mewujudkan proyek impian Anda.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Front from '../assets/front.png'
import FrontHover from '../assets/front2.jpg'
import Back from '../assets/back.png'
import BackHover from '../assets/g2.jpeg'
import { Brain, Gift } from 'lucide-vue-next'
import HoverImage from './HoverImage.vue'

gsap.registerPlugin(ScrollTrigger)
const preload = new Image()
preload.src = FrontHover
preload.src = BackHover

const storyRef = ref(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray('.story-block').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
      })
    })
  }, storyRef.value)

  onUnmounted(() => {
    ctx.revert()
  })
})
</script>

<style scoped>
.story-block {
  transition: transform 0.3s ease;
}
.story-block:hover {
  transform: translateY(-4px);
}
section {
  font-family: 'IBM Plex Mono', monospace;
}
</style>
