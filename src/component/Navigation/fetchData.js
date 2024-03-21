export const apiURL = "https://bootcamp-api.codeit.kr/api/sample/user";

export const fetchData = () => {
  return fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("서버에 에러가 있습니다.");
      }
      return response.json();
    })
    .catch((error) => console.error("Error:", error), []);
};
