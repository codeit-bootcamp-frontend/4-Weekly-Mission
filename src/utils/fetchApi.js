export async function fetchAPI(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
}
