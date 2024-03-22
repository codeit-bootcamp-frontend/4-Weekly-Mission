import { useAsync } from "./useAsync.tsx";
import { axiosInstance } from "../utils/axiosInstance.tsx";

export function useGetUser() {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);

  return { loading, error, data };
}

export function useGetUserById() {
  const getUserById = () => axiosInstance.get("users/4");
  const { loading, error, data } = useAsync(getUserById);

  return { loading, error, data };
}
