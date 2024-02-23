export async function getFetchData(url) {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr${url}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
