const BASE_API_URL = "https://bootcamp-api.codeit.kr/api/";

const acceptDataFromApi = async function (parameter: string) {
  const response = await fetch(BASE_API_URL + parameter);
  if (!response.ok) {
    throw new Error("정보를 받아오는데 실패하였습니다.");
  }
  const convertedResponse = await response.json();
  return convertedResponse;
};

export { acceptDataFromApi };
