export async function fetchLogin() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    if (!response.ok) {
    } else {
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error('');
  }
}
