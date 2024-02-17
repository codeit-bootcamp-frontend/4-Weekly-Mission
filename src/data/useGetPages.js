import { mapFolderData } from "../util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetPages = () => {
  const getUser = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getUser);

  const pagesData = mapFolderData(data?.folder);

  return { loading, error, data: pagesData };
};
