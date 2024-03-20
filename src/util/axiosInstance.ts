import axios from "axios";

export const axiosInstance: any = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});
