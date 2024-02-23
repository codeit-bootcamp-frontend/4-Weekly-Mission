import { mapFolderData } from "../util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetTag = () => {
  const getTag = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getTag);

  const pagesData = mapFolderData(data);

  return { loading, error, tagData: pagesData };
};
