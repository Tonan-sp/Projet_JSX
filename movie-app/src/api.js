export async function getJSON(url, options) {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status} : ${response.statusText}`)
  }

  return response.json()
}
