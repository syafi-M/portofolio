<template>
  <Vue3Lottie
    :animationData="animationData"
    class="max-w-[220px] md:max-w-[280px] lg:max-w-[340px] h-auto"
    :loop="true"
    :autoplay="true"
  />
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '@/assets/Coding.json'
</script>
