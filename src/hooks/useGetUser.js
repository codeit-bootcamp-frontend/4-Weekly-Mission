import axios from "../util/axiosInstance";
import { useAsync } from "./useAsync";

const useGetUser = () => {
  const getUser = () => axios.get("users/1");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};

export { useGetUser };
