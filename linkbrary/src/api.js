export async function getAPI(query) {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api${query}`);
  const body = await response.json();

  return body;
}
