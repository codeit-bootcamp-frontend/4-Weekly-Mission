export const fetchData = () => {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
    .then((response) => {
      if (!response.ok) {
        throw new Error("서버에 에러가 있습니다.");
      }
      return response.json();
    })
    .then((data) => data.folder.links)
    .catch((error) => console.error("Error:", error));
};
