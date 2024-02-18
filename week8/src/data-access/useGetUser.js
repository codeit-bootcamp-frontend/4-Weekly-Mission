import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export const useGetUser = async () => {
  const response = await fetch(`${BASE_URL}users/1`);
  const result = await response.json();
  return result;

  // const getUser = () => axiosInstance.get("users/1");
  // const { loading, error, data } = useAsync(getUser);
  // return { loading, error, data };
};
