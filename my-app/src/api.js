export async function getFolders(){
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const result = await response.json();
  return result;
}

export async function getUser(){
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const result = await response.json();
  return result;
}