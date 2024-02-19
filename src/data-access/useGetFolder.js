import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getUser);
  const newData = data?.data;
  return { loading, error, data: newData };
};