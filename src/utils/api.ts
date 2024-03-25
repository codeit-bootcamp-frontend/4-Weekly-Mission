const api = async (query: string) => {
  const result = await fetch(`https://bootcamp-api.codeit.kr/api/${query}`)
  const body = await result.json()
  return body
}

export default api
