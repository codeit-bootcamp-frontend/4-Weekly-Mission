import { getFormattedFolders } from "util/getFormattedFolders";
import { useAsync } from "../hooks/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getUser);

  const folderData = getFormattedFolders(data?.folder);

  return { loading, error, data: folderData };
};
