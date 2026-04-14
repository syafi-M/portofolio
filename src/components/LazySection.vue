<template>
  <div ref="sectionRef">
    <slot v-if="isVisible" />
    <div v-else :style="{ minHeight }" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  minHeight: {
    type: String,
    default: '40vh',
  },
  rootMargin: {
    type: String,
    default: '300px 0px',
  },
})

const isVisible = ref(false)
const sectionRef = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
        observer = null
      }
    },
    {
      rootMargin: props.rootMargin,
    },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
