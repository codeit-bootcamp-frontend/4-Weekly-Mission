import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("/api/users/1/folders");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
