<template>
  <section
    id="home"
    ref="heroRef"
    class="lg:h-screen lg:max-h-screen flex flex-col lg:flex-row items-start justify-between px-[10%] md:py-24 lg:pt-20 py-16 relative overflow-hidden cursor-hover"
  >
    <div class="space-y-2 md:space-y-4 relative z-10 w-full pt-6 md:pt-0">
      <p class="text-5xl md:text-7xl font-extrabold tracking-tight">{{ t('hero.title1') }}</p>
      <p
        class="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-extrabold tracking-tight"
      >
        {{ t('hero.title2') }}
      </p>
      <p class="text-lg md:text-2xl text-white font-mono h-6 my-4 lg:my-8">
        <span>{{ typedText }}</span
        ><span class="blinking-cursor">|</span>
      </p>
      <p
        class="md:text-xl lg:text-lg font-light text-gray-300 max-w-xl md:max-w-2xl lg:max-w-xl mb-2 md:mb-6"
      >
        {{ $t('hero.desc') }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-3 mb-[15rem] md:mb-[18rem] lg:mb-0">
        <span
          v-for="tech in techs"
          :key="tech"
          class="px-4 py-1 bg-white/10 text-white rounded-full text-xs md:text-base lg:text-sm font-medium backdrop-blur hover:bg-white/20 transition"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="overflow-hidden h-full absolute top-0 left-0 lg:left-auto right-0 z-0 mt-[6rem] md:mt-[8rem] lg:mt-0"
      >
        <Suspense>
          <component :is="HeroLottie" v-if="showLottie" />
          <template #fallback>
            <div class="w-[220px] md:w-[280px] lg:w-[340px] h-[220px] md:h-[280px] lg:h-[340px]"></div>
          </template>
        </Suspense>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-wrap md:gap-6 gap-1 justify-center lg:justify-start my-8 relative z-10">
        <!-- Projects Button -->
        <div class="relative group">
          <div
            class="absolute inset-0 rounded-lg bg-purple-500 opacity-50 blur-md -z-10 transition group-hover:opacity-80"
          ></div>
          <a
            href="#showcase"
            class="inline-flex items-center gap-2 px-8 py-3 border border-purple-500 text-purple-300 rounded-lg bg-black/80 backdrop-blur z-10 relative whitespace-nowrap"
          >
            <span
              class="transform transition-transform duration-300 group-hover:translate-x-[-0.25rem] md:text-xl"
            >
              {{ tm('hero.projects') }}
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
              {{ tm('hero.contacts') }}
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
        <a href="https://github.com/syafi-M" class="relative group flex flex-col items-center">
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
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/sy4fx_xd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          class="relative group flex flex-col items-center"
        >
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            sy4fx_xd
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-indigo-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Instagram
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-indigo-400 z-10 relative"
            />
          </div>
        </a>

        <!-- Divider -->
        <span class="text-white/50 mx-2">|</span>

        <!-- Instagram (Again) -->
        <a
          href="https://www.instagram.com/dityurbae/?utm_source=ig_web_button_share_sheet"
          class="relative group flex flex-col items-center"
        >
          <div
            class="absolute top-8 text-xs md:text-base lg:text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition duration-300"
          >
            dityurbae
          </div>
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full bg-indigo-500 opacity-40 blur-md -z-10 transition group-hover:opacity-80"
            ></div>
            <Instagram
              class="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white hover:text-indigo-400 z-10 relative"
            />
          </div>
        </a>

        <!-- GitHub (Again) -->
        <a href="https://github.com/aditlfp" class="relative group flex flex-col items-center">
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
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { Github, Instagram, MailPlus, SquareArrowOutUpRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const techs = computed(() => tm('hero.techs'))
const HeroLottie = defineAsyncComponent(() => import('@/components/HeroLottie.vue'))

const heroRef = ref(null)
const INTRO_SESSION_KEY = 'introPlayed'

const typedText = ref('')
const showLottie = ref(false)
const phrases = ['Web Development', 'Tech Enthusiast', 'Fullstack Engineer']
let currentPhrase = 0
let currentChar = 0
let isDeleting = false
let typingTimeoutId = null
let lottieTimeoutId = null
let heroIntroTween = null

const clearTypingTimeout = () => {
  if (typingTimeoutId) {
    clearTimeout(typingTimeoutId)
  }
}

const queueTypeLoop = (delay) => {
  clearTypingTimeout()
  typingTimeoutId = setTimeout(typeLoop, delay)
}

function typeLoop() {
  const current = phrases[currentPhrase]

  if (!isDeleting) {
    typedText.value = current.slice(0, currentChar++)
    if (currentChar > current.length) {
      isDeleting = true
      queueTypeLoop(1200)
      return
    }
  } else {
    typedText.value = current.slice(0, currentChar--)
    if (currentChar < 0) {
      isDeleting = false
      currentChar = 0
      currentPhrase = (currentPhrase + 1) % phrases.length
      queueTypeLoop(400)
      return
    }
  }

  const delay = isDeleting ? 50 : 100 + Math.random() * 50
  queueTypeLoop(delay)
}

onMounted(() => {
  const alreadyPlayed = sessionStorage.getItem(INTRO_SESSION_KEY)

  if (alreadyPlayed === 'true' && heroRef.value) {
    heroIntroTween = gsap.fromTo(
      heroRef.value,
      {
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.2,
      },
    )
  } else if (heroRef.value) {
    gsap.set(heroRef.value, {
      opacity: 1,
      filter: 'blur(0px)',
    })
  }

  const loadLottie = () => {
    showLottie.value = true
  }

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(loadLottie, { timeout: 1200 })
  } else {
    lottieTimeoutId = setTimeout(loadLottie, 300)
  }

  typeLoop()
})

onBeforeUnmount(() => {
  clearTypingTimeout()
  if (lottieTimeoutId) {
    clearTimeout(lottieTimeoutId)
  }
  heroIntroTween?.kill()
  gsap.killTweensOf(heroRef.value)
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
