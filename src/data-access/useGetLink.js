import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetLink = () => {
  const getUser = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getUser);
  const linkData = data?.data;
  return { loading, error, data: linkData };
};
