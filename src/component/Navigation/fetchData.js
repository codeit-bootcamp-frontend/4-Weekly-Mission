export const fetchData = () => {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/user")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    }, []);
};
