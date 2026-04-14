<template>
  <section
    v-if="showIntro"
    ref="sectionRef"
    class="fixed min-h-screen z-[100] w-full flex flex-col items-center pt-[30vh] lg:pt-0 lg:justify-center bg-gradient-to-br from-[#0e0c2a] to-[#1a133d] text-white text-center space-y-8"
  >
    <span ref="textRef">
      <!-- Glowing Icons -->
      <div class="flex space-x-6 mb-6">
        <div
          v-for="(icon, i) in icons"
          :key="i"
          class="p-4 rounded-full bg-[#1f183b] shadow-xl hover:scale-110 transition duration-300 relative"
        >
          <i :class="icon" class="text-2xl z-10 text-white"></i>
          <div class="absolute inset-0 rounded-full blur-xl opacity-60 bg-purple-700 -z-10"></div>
        </div>
      </div>

      <!-- White Headline -->
      <h1
        class="text-4xl sm:text-6xl font-extrabold flex flex-wrap justify-center gap-2 mb-2"
        ref="headlineWhite"
      >
        <span
          v-for="(word, i) in whiteWords"
          :key="'white-' + i"
          class="inline-block opacity-0 translate-x-[-60px] text-white"
        >
          <span>
            {{ word }}
          </span>
        </span>
      </h1>

      <!-- Gradient Headline -->
      <h1
        class="text-4xl sm:text-6xl font-extrabold flex flex-wrap justify-center gap-2"
        ref="headlineGradient"
      >
        <span
          v-for="(word, i) in gradientWords"
          :key="'gradient-' + i"
          class="inline-block opacity-0 translate-x-[-30px]"
        >
          <span
            class="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
          >
            {{ word }}
          </span>
        </span>
      </h1>

      <!-- Glowing Link -->
      <a
        href="https://eki.my.id"
        class="mt-6 inline-block px-6 py-3 rounded-full text-sm font-medium text-white bg-[#1f183b] relative shadow-lg hover:scale-105 transition duration-300"
      >
        <span class="typing-text z-10 relative flex items-center">
          <i class="mr-2">🌐</i>
          <span>{{ typedText }}</span>
        </span>

        <div class="absolute inset-0 bg-purple-800 blur-2xl opacity-50 rounded-full -z-10"></div>
      </a>
    </span>
  </section>
</template>

<style scoped>
.typing-text span::after {
  content: '|';
  animation: blink 0.8s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>

<script setup>
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)
const textRef = ref(null)
const headlineWhite = ref(null)
const headlineGradient = ref(null)
const showIntro = ref(false)

const fullText = 'https://syafi-m.github.io/portofolio/'
const typedText = ref('')

const icons = ['fas fa-code', 'fas fa-user', 'fab fa-github']
const whiteWords = ['Welcome', 'To', 'Our']
const gradientWords = ['Portofolio', 'Website']
const INTRO_SESSION_KEY = 'introPlayed'

let typingTimeoutId = null
let outroTimeoutId = null
let introTimeline = null

const clearTimer = (timerId) => {
  if (timerId) {
    clearTimeout(timerId)
  }
}

const scheduleTyping = (index = 0) => {
  if (!showIntro.value) {
    return
  }

  typedText.value = fullText.slice(0, index)

  if (index >= fullText.length) {
    outroTimeoutId = setTimeout(playOutro, 500)
    return
  }

  const randomDelay = 100 + Math.random() * 80
  typingTimeoutId = setTimeout(() => {
    scheduleTyping(index + 1)
  }, randomDelay)
}

const playOutro = () => {
  if (!sectionRef.value || !textRef.value) {
    showIntro.value = false
    return
  }

  const outroTimeline = gsap.timeline({
    onComplete: () => {
      showIntro.value = false
    },
  })

  outroTimeline.to(textRef.value, {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1.2,
    ease: 'power2.out',
  })

  outroTimeline.to(
    sectionRef.value,
    {
      opacity: 0,
      scale: 1.05,
      duration: 2,
      ease: 'power2.inOut',
    },
    '-=0.2',
  )
}

onMounted(async () => {
  const alreadyPlayed = sessionStorage.getItem(INTRO_SESSION_KEY)

  if (alreadyPlayed === 'true') {
    showIntro.value = false
    return
  }

  // First load in this browser tab
  sessionStorage.setItem(INTRO_SESSION_KEY, 'true')
  showIntro.value = true
  await nextTick()

  introTimeline = gsap.timeline()
  introTimeline.to(headlineWhite.value?.children ?? [], {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.1,
  })
  introTimeline.to(
    headlineGradient.value?.children ?? [],
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
    },
    0.3,
  )

  typingTimeoutId = setTimeout(() => {
    scheduleTyping()
  }, 1000)
})

onBeforeUnmount(() => {
  clearTimer(typingTimeoutId)
  clearTimer(outroTimeoutId)
  introTimeline?.kill()
  gsap.killTweensOf(textRef.value)
  gsap.killTweensOf(sectionRef.value)
  gsap.killTweensOf(headlineWhite.value?.children ?? [])
  gsap.killTweensOf(headlineGradient.value?.children ?? [])
})
</script>
