<template>
  <section id="milestone">
    <div class="flex flex-col items-center justify-center my-10 md:my-0 md:min-h-screen">
      <h1
        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent pb-4"
      >
        {{ tm('milestone.title') }}
      </h1>
      <p class="text-center text-lg md:text-xl opacity-70 mb-6 lg:mb-10 mx-10 lg:max-w-3xl">
        {{ tm('milestone.desc') }}
      </p>
      <div class="grid grid-cols-2 gap-8 w-full max-w-4xl px-4 md:px-16">
        <div
          class="relative group div-card bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 col-span-2 lg:col-span-1 p-4 rounded-lg shadow-lg"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-105 -z-10"
          ></div>
          <div class="flex items-center justify-between space-x-4 mb-5">
            <Code class="bg-violet-600/40 rounded-full p-3 w-14 md:w-16 h-auto" />
            <span class="text-4xl font-semibold">
              {{ totalProjects }}
            </span>
          </div>
          <p class="text-lg md:text-xl">{{ tm('milestone.projCount') }}</p>
          <p class="text-sm md:text-base">{{ tm('milestone.subProj') }}</p>
        </div>

        <div
          class="relative group div-card bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 col-span-2 lg:col-span-1 p-4 rounded-lg shadow-lg"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-105 -z-10"
          ></div>
          <div class="flex items-center justify-between space-x-4 mb-5">
            <BadgeCheck class="bg-violet-600/40 rounded-full p-3 w-14 md:w-16 h-auto" />
            <span class="text-4xl font-semibold">
              {{ totalCertificates }}
            </span>
          </div>
          <p class="text-lg md:text-xl">{{ tm('milestone.certCount') }}</p>
          <p class="text-sm md:text-base">{{ tm('milestone.subCert') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { BadgeCheck, Code } from 'lucide-vue-next'
import { useFetch } from '@/composables/useFetch'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Ambil data dari API
const { data: projectData } = useFetch('https://porto-api.sac-po.com/api/v1/projects')
const { data: certificatesData } = useFetch('https://porto-api.sac-po.com/api/v1/certificates')

// Gunakan computed untuk menghitung total
const totalProjects = computed(() => projectData.value?.data?.total || 0)
const totalCertificates = computed(() => certificatesData.value?.data?.total || 0)

onMounted(() => {})
</script>

<style scoped>
.div-card {
  will-change: transform, opacity;
}
</style>
