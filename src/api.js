export async function getUserData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body.folder;
  } catch (error) {
    console.error(error);
  }
}
