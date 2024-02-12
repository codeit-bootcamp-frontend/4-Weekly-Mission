import axios from "axios";
//axios 라이브러리를 이용해서 요청 URL 앞에 baseURL을 붙여주는 컴포넌트를 생성하고 있다.
export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});
