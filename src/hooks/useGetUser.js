import { useAsync } from "./useAsync";
import { axiosInstance } from "../utils/axiosInstance";

function useGetUser() {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);

  return { loading, error, data };
}

export default useGetUser;
