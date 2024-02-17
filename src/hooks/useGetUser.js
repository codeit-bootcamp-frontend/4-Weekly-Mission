import { useAsync } from "./useAsync";
import { axiosInstance } from "../utils/axiosInstance";

export function useGetUser() {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);

  return { loading, error, data };
}

export function useGetUserById() {
  const getUserById = () => axiosInstance.get("users/1");
  const { loading, error, data } = useAsync(getUserById);

  return { loading, error, data };
}
