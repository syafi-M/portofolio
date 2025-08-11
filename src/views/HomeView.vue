<script setup>
import HeroLoadSection from '@/components/HeroLoadSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ScrollStory from '@/components/ScrollStory.vue'
import AllMilestone from '@/components/AllMilestone.vue'
import PortoShowcase from '@/components/PortoShowcase.vue'
</script>

<template>
  <main>
    <HeroLoadSection />
    <HeroSection />
    <ScrollStory />
    <AllMilestone />
    <PortoShowcase />
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
