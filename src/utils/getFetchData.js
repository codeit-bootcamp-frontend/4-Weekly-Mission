export async function getFetchData(url) {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr${url}`);
    return response.json();
  } catch (error) {
    console.error(error);
    console.log(`getFetchData를 확인해 주세요`);
  }
}
