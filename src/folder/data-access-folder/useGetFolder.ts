import { mapFolderData } from "../../folder/util-map";
import { useAsync } from "../../sharing/util";
import { axiosInstance } from "../../sharing/util";
import { Folder } from "../util-map/mapFolderData";

interface FolderApiResponse {
  folder: Folder; 
}

export const useGetFolder = () => {
  const getFolder = async () => {
    const response = await axiosInstance.get<FolderApiResponse>("sample/folder");
    return response.data;
  };
  
  const { loading, error, data } = useAsync(getFolder);
  const folderData = data ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
  };
