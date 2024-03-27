import { mapFolderData } from "../utils/mapFolderData.tsx";
import { useAsync } from "./useAsync.tsx";
import { axiosInstance } from "../utils/axiosInstance.tsx";

export function useGetFolder() {
  const getUser = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
}

export function useGetFolderById() {
  const getUserById = () => axiosInstance.get("users/4/folders");
  const { loading, error, data } = useAsync(getUserById);

  return { loading, error, data };
}
