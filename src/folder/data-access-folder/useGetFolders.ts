import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

interface UseGetFoldersResponse {
  loading: boolean;
  error: any;
  data: any;
}

export const useGetFolders = (): UseGetFoldersResponse => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders = folders.sort((a, b) => a.id - b.id);

  return { loading, error, data: sortedFolders };
};