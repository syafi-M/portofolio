<template>
  <footer class="text-center py-8 md:py-12 opacity-50 text-sm">
    &copy; {{ new Date().getFullYear() }} {{ tm('another.footer') }}
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>
