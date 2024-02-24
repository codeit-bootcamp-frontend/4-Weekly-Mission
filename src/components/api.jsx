const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

// export async function getData(headerType, userId = 1) {
//   const endpoint =
//     headerType === "shared"
//       ? `${API_BASE_URL}/sample/user`
//       : `${API_BASE_URL}/users/${userId}`;

//   const response = await fetch(endpoint);
//   if (!response.ok) {
//     throw new Error("데이터를 가져오는데 실패했습니다.");
//   }
//   const data = await response.json();
//   return data;
// }

// const getData = async () => {
//   const endpoint = `${API_BASE_URL}/sample/user`;
//   const res = await fetch(endpoint).then((res) => res.json());

//   console.log(res);
// };

// export default getData;

export async function getData() {
  const endpoint = `${API_BASE_URL}/sample/user`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }

  const body = await response.json();
  return body;
}
