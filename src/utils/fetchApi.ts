export async function fetchAPI(url: string, options = {}): Promise<any> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : '오류 발생';
    return { error: true, message: message };
  }
}
