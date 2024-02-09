export async function getLinks(){
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const body = response.json();
  return body;
}