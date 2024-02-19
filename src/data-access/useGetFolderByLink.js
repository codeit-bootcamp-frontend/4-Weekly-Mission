import { mapFolderFromLink } from "util/mapFolderFromLink";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolderByLink = () => {
  const getUser = () => axiosInstance.get("users/1/links");
  const { loading, error, data } = useAsync(getUser);
  const folderData = mapFolderFromLink(data?.data);

  return { loading, error, folderData };
};
