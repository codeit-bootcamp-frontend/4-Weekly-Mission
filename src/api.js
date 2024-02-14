export async function User() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample`);
  const body = await response.json();
  return body;
}
