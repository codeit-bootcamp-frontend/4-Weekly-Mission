import { mapFolderData } from "../util/mapFolderData";
import { useAsync } from "./useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
