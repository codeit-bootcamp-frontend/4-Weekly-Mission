import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

export default baseAxios;
