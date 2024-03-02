import axios from "../util/axiosInstance";
import { useAsync } from "./useAsync";

const useGetFolder = () => {
  const getFolder = () => axios.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);
  return { loading, error, data };
};

export { useGetFolder };
