// /src/composables/useFetch.js
import axios from 'axios'
import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
    try {
      await axios.get('https://porto-api.sac-po.com/sanctum/csrf-cookie')
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

  return { data, loading, error }
}

export function getImage(name) {
  return `https://porto-api.sac-po.com/storage/public/images/${name}`
}
