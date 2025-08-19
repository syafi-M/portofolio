export default async function translateText(text, to) {
  const res = await fetch('https://translatorr-psi.vercel.app/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      texts: [text], // <-- harus array
      targetLang: to,
    }),
  })
  const data = await res.json()

  return data.translations[0]
}
