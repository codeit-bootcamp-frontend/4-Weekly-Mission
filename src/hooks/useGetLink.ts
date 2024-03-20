import { useAsync } from "./useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetLink = () => {
  const getLink = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getLink);
  const linkData = data?.data;
  return { loading, error, data: linkData };
};
