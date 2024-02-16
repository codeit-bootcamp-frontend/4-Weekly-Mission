import baseAxios from "./baseAxios";
import useAsync from "./useAsync";

const useFolderData = () => {
  const getFolderData = () => baseAxios.get("sample/folder");
  const { loading, error, data } = useAsync(getFolderData);
  const folderData = data?.folder;
  return { loading, error, data: folderData };
};

export default useFolderData;
