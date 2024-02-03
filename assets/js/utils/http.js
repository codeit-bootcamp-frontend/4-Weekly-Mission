export const requestHTTP = async (url, options) => {
  const response = await fetch(url, {
    method: options?.method || "GET",
    body: options?.body || null,
    headers: options?.headers || undefined,
  })

  const responseData = await response.json()
  return responseData
}
