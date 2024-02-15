import { mapFolderData } from "../utils/mapFolderData";
import { useAsync } from "./useAsync";
import { axiosInstance } from "../utils/axiosInstance";

function useGetFolder() {
  const getUser = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
}

export default useGetFolder;
