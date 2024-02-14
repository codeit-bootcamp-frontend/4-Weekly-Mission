const API = "https://bootcamp-api.codeit.kr";

export async function getUserData(url) {
  const response = await fetch(API + `${url}`);
  const result = await response.json();
  return result;
}
