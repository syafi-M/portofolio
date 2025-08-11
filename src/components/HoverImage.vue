<!-- components/HoverImage.vue -->
<template>
  <div
    class="relative w-[140px] h-[140px] rounded-sm overflow-hidden"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <!-- Base image -->
    <img
      :src="src"
      alt="base"
      class="absolute inset-0 w-full h-full object-cover scale-115 transition-opacity duration-300"
      :class="{ 'opacity-0': isHovering }"
    />

    <!-- Hover image -->
    <img
      :src="hoverSrc"
      ref="hoverImageRef"
      alt="hover"
      class="absolute inset-0 w-full h-full object-cover opacity-0"
      :class="{ 'opacity-100': isHovering }"
    />

    <!-- Flash overlay -->
    <div ref="flashRef" class="absolute inset-0 bg-white opacity-0 pointer-events-none"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

defineProps({
  src: String,
  hoverSrc: String,
})

const isHovering = ref(false)
const hoverImageRef = ref(null)
const flashRef = ref(null)

const hoverTween = ref(null)
const flashTween = ref(null)

const onEnter = () => {
  isHovering.value = true

  hoverTween.value?.kill()
  flashTween.value?.kill()

  flashTween.value = gsap.fromTo(
    flashRef.value,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
    },
  )

  hoverTween.value = gsap.to(hoverImageRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out',
  })
}

const onLeave = () => {
  isHovering.value = false

  hoverTween.value?.kill()
  hoverTween.value = gsap.to(hoverImageRef.value, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
  })
}
</script>
