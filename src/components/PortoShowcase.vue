<template>
  <section id="showcase" class="scroll-mt-[3rem]">
    <div class="flex flex-col items-center justify-start min-h-screen px-[5%] lg:px-[10%]">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-0 md:mb-8 text-center">
        Portofolio Showcase
      </h1>
      <div class="mb-6 border border-white/10 rounded-lg p-2">
        <div class="flex justify-center space-x-4">
          <button
            @click="activeTab = 'projects'"
            :class="[
              'px-4 py-2 rounded-lg shadow-lg transition text-sm md:text-lg',
              activeTab === 'projects'
                ? 'bg-gradient-to-br from-purple-600/30 to-indigo-600/30 text-white'
                : 'text-white/50 hover:text-white',
            ]"
          >
            {{ tm('showcase.proj') }}
          </button>
          <button
            @click="activeTab = 'certificates'"
            :class="[
              'px-4 py-2 rounded-lg shadow-lg transition text-sm md:text-lg',
              activeTab === 'certificates'
                ? 'bg-gradient-to-br from-purple-600/30 to-indigo-600/30 text-white'
                : 'text-white/50 hover:text-white',
            ]"
          >
            {{ tm('showcase.cert') }}
          </button>
          <button
            @click="activeTab = 'techStack'"
            :class="[
              'px-4 py-2 rounded-lg shadow-lg transition text-sm md:text-lg',
              activeTab === 'techStack'
                ? 'bg-gradient-to-br from-purple-600/30 to-indigo-600/30 text-white'
                : 'text-white/50 hover:text-white',
            ]"
          >
            {{ tm('showcase.tech') }}
          </button>
        </div>
      </div>
      <!-- Projects Grid -->
      <div
        v-show="activeTab === 'projects'"
        ref="projectsRef"
        class="grid grid-cols-2 gap-8 w-full px-0 md:px-4"
      >
        <!-- Skeleton Loading -->
        <template v-if="loading">
          <div
            v-for="n in 2"
            :key="n"
            class="animate-pulse relative group project-card md:col-span-1 col-span-2 max-w-md bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-6 shadow-lg overflow-hidden border border-white/10"
          >
            <div class="rounded-lg mb-4 bg-gray-700 h-[180px] sm:h-[200px] lg:h-[220px]"></div>
            <div class="h-6 bg-gray-600 rounded mb-2 w-3/4"></div>
            <div class="h-4 bg-gray-600 rounded mb-4 w-full"></div>
            <div class="h-4 bg-gray-600 rounded mb-1 w-full"></div>
            <div class="h-4 bg-gray-600 rounded w-5/6"></div>
            <div class="flex justify-between items-center mt-4">
              <div class="h-6 bg-gray-600 rounded w-20"></div>
              <div class="h-8 bg-gray-600 rounded w-24"></div>
            </div>
          </div>
        </template>
        <!-- Actual Project Cards -->
        <template v-else>
          <div
            v-for="proj in translatedProjects || []"
            :key="proj.id"
            class="relative group project-card md:col-span-1 col-span-2 max-w-md bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-6 shadow-lg overflow-hidden border border-white/10"
          >
            <!-- Glow -->
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 -z-10"
            ></div>
            <!-- Image -->
            <div class="rounded-lg mb-4">
              <img
                :src="proj.image || 'https://placehold.co/600x400'"
                :alt="proj.title"
                class="rounded-md object-cover w-full h-[180px] sm:h-[200px] lg:h-[220px]"
              />
            </div>
            <!-- Title + Desc -->
            <h3 class="text-lg font-semibold text-white mb-1">{{ proj.title }}</h3>
            <p class="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
              {{ proj.description }}
            </p>
            <!-- Links -->
            <div class="flex justify-between items-center">
              <a
                v-if="proj.link"
                :href="proj.link"
                class="text-sm text-blue-400 hover:underline flex items-center gap-1"
              >
                Live Demo
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
                  />
                </svg>
              </a>
              <div class="relative group">
                <div
                  class="absolute inset-0 rounded-lg bg-purple-500 opacity-50 blur-md -z-10 transition group-hover:opacity-80"
                ></div>
                <router-link
                  :to="`/projects/${proj.id}`"
                  class="inline-flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-300 rounded-lg bg-black/80 backdrop-blur z-10 relative whitespace-nowrap"
                >
                  <span
                    class="transform text-sm transition-transform duration-300 group-hover:translate-x-[-0.15rem]"
                  >
                    Details
                  </span>
                  <ArrowRight
                    class="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- Certificates Grid -->
      <div
        v-show="activeTab === 'certificates'"
        ref="certificatesRef"
        class="grid grid-cols-2 gap-8 w-full px-0 md:px-4"
      >
        <!-- Skeleton Loading -->
        <template v-if="loading2">
          <div
            v-for="n in 4"
            :key="n"
            class="animate-pulse relative group certificate-card md:col-span-1 col-span-2 max-w-md bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-4 shadow-lg overflow-hidden border border-white/10"
          >
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 -z-10"
            ></div>
            <div class="rounded-lg relative overflow-hidden mb-4">
              <div class="bg-gray-700 rounded-md w-full h-[180px] sm:h-[200px] lg:h-[220px]"></div>
            </div>
            <div class="h-6 bg-gray-600 rounded w-24 mb-2"></div>
            <div class="h-8 bg-gray-600 rounded w-20"></div>
          </div>
        </template>
        <!-- Actual Certificate Cards -->
        <template v-else>
          <div
            class="relative group certificate-card md:col-span-1 col-span-2 max-w-md bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-4 shadow-lg overflow-hidden border border-white/10"
            v-for="cert in certificatesData.data.data || []"
            :key="cert.id"
          >
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 -z-10"
            ></div>
            <div
              @click="openModal(cert.img)"
              class="rounded-lg relative overflow-hidden cursor-pointer"
            >
              <img
                :src="getImage(cert.img) || 'https://placehold.co/400x400'"
                alt="Certificate"
                class="rounded-md object-cover w-full h-[180px] sm:h-[200px] lg:h-[220px] transition duration-300"
                @error="onImageError"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
              ></div>
            </div>
            <div
              class="flex justify-between items-center absolute top-[40%] left-[40%] group-hover:opacity-100 opacity-0 transition-all duration-300"
            >
              <button
                @click.prevent="openModal(cert.img)"
                class="text-base font-semibold text-white hover:underline flex flex-col justify-center items-center gap-1 cursor-pointer"
                aria-label="See full certificate"
                type="button"
              >
                <Maximize2 /> See More
              </button>
            </div>
          </div>
        </template>
      </div>
      <!-- Tech Stack Grid -->
      <div
        v-show="activeTab === 'techStack'"
        ref="techStackRef"
        class="grid grid-cols-2 lg:grid-cols-6 gap-8 w-full px-0 md:px-4"
      >
        <!-- Tech Stack Card -->
        <div
          v-for="tech in techStack"
          :key="tech.name"
          class="relative group tech-card bg-gradient-to-br from-[#1b0c37]/60 to-[#281d5e]/60 rounded-xl p-4 shadow-lg overflow-hidden border border-white/10"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 -z-10"
          ></div>
          <div class="rounded-lg flex items-center justify-center">
            <img
              :src="tech.icon"
              :alt="tech.name"
              class="rounded-md object-cover w-[100px] min-h-[100px] sm:min-h-[100px] lg:min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <transition name="modal-fade">
      <div
        v-if="showModal"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[100]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div
          class="relative max-w-xl w-[90%] p-4 bg-gradient-to-br from-[#1b0c37]/80 to-[#281d5e]/80 rounded-xl border-white/10"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-lg scale-105 transition-all duration-500 -z-10"
          ></div>
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute -top-2 -right-2 w-11 h-11 flex items-center justify-center text-white text-2xl rounded-full bg-red-500 hover:bg-red-600 transition duration-300 shadow-lg"
            aria-label="Close modal"
            type="button"
          >
            &times;
          </button>
          <!-- Image -->
          <img
            :src="getImage(modalImage) || 'https://placehold.co/600x400'"
            alt="Full view certificate"
            class="rounded-lg max-h-[70vh] w-full object-contain"
            @error="onImageError"
          />
        </div>
      </div>
    </transition>
  </section>
</template>
<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Maximize2 } from 'lucide-vue-next'
import { getImage, useFetch } from '@/composables/useFetch'
import { useI18n } from 'vue-i18n'
import translateText from '@/utils/translator'

gsap.registerPlugin(ScrollTrigger)

const { tm, locale } = useI18n()
const lang = ref(locale.value)

const activeTab = ref('projects')
const projectsRef = ref(null)
const certificatesRef = ref(null)
const techStackRef = ref(null)

const showModal = ref(false)
const modalImage = ref('')

const techStack = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  { name: 'Laravel', icon: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' },
  {
    name: 'Tailwind CSS',
    icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
]

const { data: projectData, loading } = useFetch('https://porto-api.sac-po.com/api/v1/projects')
const { data: certificatesData, loading: loading2 } = useFetch(
  'https://porto-api.sac-po.com/api/v1/certificates',
)

// Translation
const translatedProjects = ref([])

async function translateProjects(toLang = lang.value) {
  if (!projectData.value || loading.value) return

  const results = await Promise.all(
    projectData.value.data.data.map(async (proj) => {
      const title = await translateText(proj.title, toLang)
      const description = await translateText(proj.description, toLang)

      // console.log(title, description, '')

      return { ...proj, title, description }
    }),
  )

  translatedProjects.value = results
}

watch([locale, projectData], ([newLocale], [oldLocale]) => {
  if (newLocale !== oldLocale) {
    lang.value = newLocale // keep lang in sync
  }
  // re-run translation whenever locale or projectData changes
  translateProjects()
})

// Modal
const openModal = (imgUrl) => {
  modalImage.value = imgUrl
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
const onImageError = (event) => {
  event.target.src = 'https://placehold.co/600x400'
}

// Animations
const animateItems = (container, direction = 'x') => {
  const items = container.querySelectorAll('.project-card, .certificate-card, .tech-card')

  items.forEach((el, i) => {
    gsap.set(el, {
      opacity: 0,
      x: direction === 'x' ? (i % 2 === 0 ? -50 : 50) : 0,
      y: direction === 'y' ? 50 : 0,
    })

    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      delay: i * 0.05,
      duration: 0.7,
      ease: 'power2.out',
    })
  })
}

// Mounted animations
onMounted(() => {
  nextTick(() => {
    animateItems(projectsRef.value, 'x')
  })
})

// Tabs switching animation
watch(activeTab, async (newTab) => {
  await nextTick()
  if (newTab === 'projects') {
    animateItems(projectsRef.value, 'x')
  } else if (newTab === 'certificates') {
    animateItems(certificatesRef.value, 'x')
  } else if (newTab === 'techStack') {
    animateItems(techStackRef.value, 'y')
  }
})
</script>

<style scoped>
.project-card,
.certificate-card,
.tech-card {
  will-change: transform, opacity;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
