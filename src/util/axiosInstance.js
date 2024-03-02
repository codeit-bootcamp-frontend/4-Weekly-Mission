import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

export default instance;
