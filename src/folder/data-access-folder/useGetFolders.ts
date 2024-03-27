import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, data } = useAsync(getFolders);

  const folders = (data as any)?.data ?? [];
  const sortedFolders = folders.sort((a: any, b: any) => a?.id - b?.id);

  return { loading, data: sortedFolders };
};
