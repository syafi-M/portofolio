<template>
  <div ref="cursor" class="cursor-ring"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const cursor = ref(null)

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    cursor.value.style.left = `${e.clientX}px`
    cursor.value.style.top = `${e.clientY}px`
  })
})
</script>

<style scoped>
.cursor-ring {
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.05s ease;
}
</style>
