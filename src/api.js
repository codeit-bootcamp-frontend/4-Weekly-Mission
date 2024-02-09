const url = "https://bootcamp-api.codeit.kr";

//todo: path로 prop으로 받아서 경로 나눠주기
const getData = async ({ path = "" }) => {
  const detailPath = path && `api/sample/${path}`;
  const response = await fetch(`${url}/${detailPath}`);
  const body = await response.json();
  return body;
};

export default getData;
