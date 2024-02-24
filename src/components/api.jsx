// const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

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
