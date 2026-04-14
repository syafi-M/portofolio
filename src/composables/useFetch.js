// /src/composables/useFetch.js
import axios from 'axios'
import { ref } from 'vue'

const requestCache = new Map()
let csrfPromise = null

const ensureCsrfCookie = async () => {
  if (!csrfPromise) {
    csrfPromise = axios.get('https://porto-api.sac-po.com/sanctum/csrf-cookie').catch((error) => {
      csrfPromise = null
      throw error
    })
  }

  return csrfPromise
}

export function useFetch(url) {
  const cachedState = requestCache.get(url)

  if (cachedState) {
    return cachedState
  }

  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const state = { data, loading, error }
  requestCache.set(url, state)

  const fetchData = async () => {
    try {
      await ensureCsrfCookie()
      const res = await axios.get(url)

      data.value = res.data
    } catch (err) {
      error.value = err
      data.value = null
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return state
}

export function getImage(name) {
  return `https://porto-api.sac-po.com/storage/public/images/${name}`
}
