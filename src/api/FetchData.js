export async function fetchData(query) {
  const result = await fetch(`https://bootcamp-api.codeit.kr/api/${query}`);
  // const result = await fetch(`${process.env.REACT_APP_API_URL}${query}`);
  const body = await result.json();
  return body;
}
export default fetchData;
