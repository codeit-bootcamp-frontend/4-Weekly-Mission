import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = data?.folder ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};
