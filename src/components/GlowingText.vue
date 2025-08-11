<template>
  <p class="glow-text" ref="container">
    <span v-for="(char, i) in textChars" :key="i" class="char" ref="chars">
      {{ char }}
    </span>
  </p>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const container = ref(null)
const chars = ref([])
const textChars = ref([])

onMounted(() => {
  textChars.value = props.text.split('')
  chars.value = container.value.querySelectorAll('.char')

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY

    chars.value.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const dx = x - cx
      const dy = y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 100

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist
        const offsetX = -dx * 0.1 * force
        const offsetY = -dy * 0.1 * force

        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        el.style.textShadow = `0 0 ${10 * force}px white`
      } else {
        el.style.transform = 'translate(0, 0)'
        el.style.textShadow = 'none'
      }
    })
  })
})
</script>

<style scoped>
.glow-text {
  font-size: 2rem;
  font-family: 'IBM Plex Mono', monospace;
  color: white;
  display: inline-block;
  white-space: pre-wrap;
}

.char {
  display: inline-block;
  transition:
    transform 0.15s ease,
    text-shadow 0.15s ease;
}
</style>
