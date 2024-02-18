import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("users/1");
  const { loading, error, data } = useAsync(getUser);
  const newData = data?.data?.[0];
  return { loading, error, newData };
};