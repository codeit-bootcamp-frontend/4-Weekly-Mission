import { axiosInstance } from "../../sharing/util";
import { useAsync } from "../../sharing/util";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders = folders.sort((a:any, b:any) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
