import { PropsFolder, mapFolderData } from "../util-map";
import { useAsync } from "../../sharing/util";
import { axiosInstance } from "../../sharing/util";

interface PropsDate {
  folder: PropsFolder;
}

export const useGetFolder = () => {
  const getFolder = async () => {
    const response = await axiosInstance.get<PropsDate>("sample/folder");
    return response.data;
  };

  const { loading, error, data } = useAsync(getFolder);
  const folderData = data ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};
