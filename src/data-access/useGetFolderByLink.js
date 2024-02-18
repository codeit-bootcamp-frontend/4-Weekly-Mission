import { mapFolderFromLink } from "util/mapFolderFromLink";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolderByLink = (id) => {
  const folderId = id ? "users/1/links" : `users/1/links/?folderId=${id}`;
  const getUser = () => axiosInstance.get(folderId);
  const { loading, error, data } = useAsync(getUser);
  const folderData = mapFolderFromLink(data?.data);

  return { loading, error, folderData };
};
