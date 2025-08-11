<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <!-- Blob 1 -->
    <div
      ref="blob1"
      class="absolute w-[500px] h-[800px] bg-purple-500 opacity-0 blur-[30px] rotate-[45deg]"
      style="top: 5%; left: 0%; border-radius: 50% / 50%"
    ></div>

    <!-- Blob 2 -->
    <div
      ref="blob2"
      class="absolute w-[500px] h-[800px] bg-indigo-500 opacity-0 blur-[30px] rotate-[-45deg]"
      style="top: 20%; right: 0%; border-radius: 50% / 50%"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blob1 = ref(null)
const blob2 = ref(null)

onMounted(() => {
  // Fade in all blobs
  gsap.to([blob1.value, blob2.value], {
    opacity: 0.3,
    duration: 2,
    ease: 'power2.out',
    delay: 1,
  })

  // Floating animations
  gsap.to(blob1.value, {
    x: 40,
    y: 30,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to(blob2.value, {
    x: -50,
    y: -20,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  // Scroll-linked motion
  gsap.to(blob1.value, {
    yPercent: 20,
    xPercent: 5,
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  })

  gsap.to(blob2.value, {
    yPercent: -20,
    xPercent: -5,
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  })
})
</script>

<style scoped>
div[ref='blob1'],
div[ref='blob2'],
div[ref='blob1'] {
  animation: morph 16s ease-in-out infinite;
}
div[ref='blob2'] {
  animation: morph2 18s ease-in-out infinite;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 40% 60% 65% 35% / 50% 40% 60% 50%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 40% 60% 40% 60%;
  }
}

@keyframes morph2 {
  0%,
  100% {
    border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 35% 65% 45% 55% / 60% 40% 60% 40%;
  }
}
</style>
