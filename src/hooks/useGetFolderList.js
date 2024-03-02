import axios from "../util/axiosInstance";
import { useAsync } from "./useAsync";

export const useGetFolderList = () => {
  const getFolderList = () => axios.get("users/1/folders");
  const { isLoading, error, data } = useAsync(getFolderList);

  const folders = data?.data ?? [];

  return { isLoading, error, data: folders };
};
