export async function getData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const data = await response.json();
  return data;
}

export async function getCardData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const data = await response.json();
  return data;
}
