import { mapFolderData } from "util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetCategory = () => {
  const getCategory = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getCategory);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
