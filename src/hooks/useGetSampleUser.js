import useAsync from "../utils/useAsync";
import axios from "axios";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const useGetSampleUser = () => {
  const getProfileData = () => axios.get(`${BASE_URL}/sample/user`);
  const { pending, error, data } = useAsync(getProfileData);

  return { pending, error, data };
};
