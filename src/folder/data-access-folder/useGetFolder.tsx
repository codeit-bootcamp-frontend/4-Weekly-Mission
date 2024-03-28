import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data }: any = useAsync(getFolder); //fixme

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
