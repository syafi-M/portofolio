<template>
  <div class="relative">
    <BackgroundBlob />
    <main class="bg-gradient-to-br from-[#0e0c2a]/70 to-[#1a133d]/70">
      <Navbar />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Footer from './components/MainFooter.vue'
import BackgroundBlob from './components/BackgroundBlob.vue'
import Navbar from './components/NavBar.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #000;
  color: white;
  overflow-x: hidden;
}
</style>
