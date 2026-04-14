<script setup>
import { defineAsyncComponent } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import HeroLoadSection from '@/components/HeroLoadSection.vue'
import LazySection from '@/components/LazySection.vue'

const ScrollStory = defineAsyncComponent(() => import('@/components/ScrollStory.vue'))
const AllMilestone = defineAsyncComponent(() => import('@/components/AllMilestone.vue'))
const PortoShowcase = defineAsyncComponent(() => import('@/components/PortoShowcase.vue'))
</script>

<template>
  <main>
    <HeroLoadSection />
    <HeroSection />
    <LazySection min-height="32rem">
      <ScrollStory />
    </LazySection>
    <LazySection min-height="24rem">
      <AllMilestone />
    </LazySection>
    <LazySection min-height="48rem">
      <PortoShowcase />
    </LazySection>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #000;
  color: white;
  overflow-x: hidden;
}
</style>
