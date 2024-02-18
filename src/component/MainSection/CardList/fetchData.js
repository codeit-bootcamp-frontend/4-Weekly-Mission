export const fetchData = () => {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 연결에 문제가 있습니다.");
      }
      return response.json();
    })
    .then((data) => data.folder.links)
    .catch((error) => console.error("Error:", error), []);
};
