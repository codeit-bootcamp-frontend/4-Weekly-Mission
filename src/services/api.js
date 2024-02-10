export async function getFolder() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('통신 오류');
  }
}
export async function getUser() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('통신 오류');
  }
}
