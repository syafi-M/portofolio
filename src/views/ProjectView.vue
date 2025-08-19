<script setup>
import { getImage, useFetch } from '@/composables/useFetch'
import translateText from '@/utils/translator'
import { Code as IconCode, ExternalLink as IconExternal } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()

const { tm, locale } = useI18n()
const lang = ref(locale.value)

const { data: projectData, loading } = useFetch(
  `https://porto-api.sac-po.com/api/v1/projects/${route.params.id}`,
)

console.log('API result:', projectData.value)

// Translation
const translatedProject = ref(null)

async function translateProjects(toLang = lang.value) {
  if (!projectData.value || loading.value) return

  const proj = projectData.value.data
  if (!proj) return

  const title = await translateText(proj.title, toLang)
  const description = await translateText(proj.description, toLang)
  const feature = await Promise.all((proj.feature || []).map((feat) => translateText(feat, toLang)))

  translatedProject.value = { ...proj, title, description, feature }
}

// re-run translation whenever locale or projectData changes
watch([locale, projectData], ([newLocale], [oldLocale]) => {
  if (newLocale !== oldLocale) {
    lang.value = newLocale // keep lang in sync
  }
  translateProjects()
})

const onImageError = (event) => {
  event.target.src = 'https://placehold.co/500x300'
}

// gunakan translatedProject jika ada, fallback ke original projectData
const project = computed(() => translatedProject.value || projectData.value?.data || {})
watch(project, (newVal) => {
  if (newVal) {
    console.log('Project data updated:', newVal)
  }
})
</script>
<template>
  <section class="min-h-screen w-full text-white px-6 lg:px-[10%] py-16 lg:py-28">
    <!-- Back & Breadcrumb tetap sama -->
    <!-- Back & Breadcrumb -->
    <div class="mb-10 flex items-center gap-2 text-sm md:text-base text-white/60">
      <button
        @click="$router.push('/#showcase')"
        class="border border-white/20 px-3 py-1 rounded-lg hover:bg-white/10 transition text-white"
      >
        ← {{ tm('another.back') }}
      </button>
      <span class="mx-2">/</span>
      <span class="opacity-50">{{ tm('another.projects') }}</span>
      <span class="mx-2">/</span>
      <span class="text-white font-medium capitalize">{{ project.title }}</span>
    </div>
    <!-- Skeleton Loading -->
    <template v-if="loading">
      <div class="animate-pulse space-y-6">
        <!-- Image Skeleton -->
        <div class="flex flex-col md:flex-row items-start justify-between gap-12">
          <div class="bg-gray-700 rounded-xl w-full max-w-md h-[220px]"></div>
          <div class="w-full md:w-1/2 space-y-4">
            <div class="h-12 bg-gray-700 rounded w-3/4"></div>
            <div class="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-600 rounded w-full"></div>
              <div class="h-4 bg-gray-600 rounded w-full"></div>
              <div class="h-4 bg-gray-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <!-- Bottom Details Skeleton -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-700 rounded-2xl p-6 h-48"></div>
          <div class="space-y-6 w-full">
            <div class="h-10 bg-gray-700 rounded w-32 mx-auto md:mx-0"></div>
            <div class="h-6 bg-gray-700 rounded w-full"></div>
            <div class="h-6 bg-gray-700 rounded w-full"></div>
            <div class="h-6 bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <!-- Title & Image -->
      <div class="flex flex-col md:flex-row items-start justify-between gap-12">
        <div
          class="relative group project-card md:col-span-1 col-span-2 max-w-md bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-4 shadow-lg overflow-hidden border border-white/10"
        >
          <!-- Glow -->
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 -z-10"
          ></div>

          <!-- Image -->
          <div class="rounded-lg">
            <img
              :src="getImage(project.img) || 'https://placehold.co/500x300'"
              :alt="project.title || 'Project Preview'"
              class="rounded-md object-cover w-full h-[180px] sm:h-[200px] lg:h-[220px]"
              @error="onImageError"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h1 class="text-4xl font-extrabold text-white capitalize">{{ project.title }}</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          <p class="text-white/70 leading-relaxed">
            {{ project.description }}
          </p>
        </div>
      </div>

      <!-- Details Bottom -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Features Box -->
        <div class="bg-[#1b1b30] rounded-2xl border border-white/10 p-6">
          <div class="flex items-center gap-2 mb-4 text-yellow-400">
            <span class="text-xl">⭐</span>
            <h3 class="font-semibold text-lg text-white">{{ tm('another.key') }}</h3>
          </div>
          <ul class="list-disc pl-6 text-white/70 md:text-base space-y-2">
            <li v-for="(feature, i) in project.feature || []" :key="i">
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Actions & Tech -->
        <div class="space-y-6 md:space-y-10 md:pt-4">
          <div class="flex justify-end md:justify-start lg:justify-center">
            <a
              :href="project.link || '#'"
              class="inline-flex items-center gap-2 px-5 py-2 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-md transition"
              target="_blank"
            >
              <IconExternal />
              {{ tm('another.demo') }}
            </a>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <IconCode /> {{ tm('another.tecno') }}
            </h4>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tech, i) in project.techStack || []"
                :key="i"
                class="px-4 py-1 bg-purple-800/30 text-white rounded-full text-sm md:text-base border border-purple-500 flex items-center gap-2"
              >
                <IconCode size="16" />
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
