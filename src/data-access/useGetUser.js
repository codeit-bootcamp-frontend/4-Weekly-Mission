import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("users/1");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
