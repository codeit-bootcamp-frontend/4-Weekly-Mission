interface Data {
  query: string;
}
async function fetchData(query: Data) {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/${query.query}`,
  );
  const body = await result.json();
  return body;
}
export default fetchData;
