export async function fetchLogin() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    if (!response.ok) {
      throw new Error('');
    } else {
    }
    const body = await response.json();
    return body;
  } catch (error) {
    throw new Error('');
  }
}
