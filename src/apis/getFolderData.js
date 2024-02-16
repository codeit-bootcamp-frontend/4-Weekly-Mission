import baseAxios from "./baseAxios";
import useAsync from "./useAsync";
import mapFolderData from "../mapFolderData";

const useFolderData = () => {
  const getFolderData = () => baseAxios.get("sample/folder");
  const { loading, error, data } = useAsync(getFolderData);
  const folderData = mapFolderData(data?.folder);
  return { loading, error, data: folderData };
};

export default useFolderData;
