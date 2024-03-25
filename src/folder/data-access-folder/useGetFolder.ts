import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

interface UseGetFolderResponse {
  loading: boolean;
  error: any;
  data: any;
}

export const useGetFolder = (): UseGetFolderResponse => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};