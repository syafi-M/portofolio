const translationCache = new Map()

export default async function translateText(text, to) {
  const cacheKey = `${to}:${text}`

  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)
  }

  const res = await fetch('https://translatorr-psi.vercel.app/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      texts: [text], // <-- harus array
      targetLang: to,
    }),
  })
  const data = await res.json()
  const translatedText = data.translations[0]

  translationCache.set(cacheKey, translatedText)

  return translatedText
}
