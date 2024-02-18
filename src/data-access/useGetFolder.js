import { mapFolderData } from "util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("users/1/links");
  const { loading, error, data } = useAsync(getUser);
  const newData = data?.data;
  console.log(newData)
  const folderData = mapFolderData(newData);
  return { loading, error, data: folderData };
};
