import { mapFolderFromLink } from "util/mapFolderFromLink";
import { useAsync } from "./useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetFolderByLink = (id) => {
  const folderId =
    id === "0" ? "users/1/links" : `users/1/links/?folderId=${id}`;
  const getFolder = () => axiosInstance.get(folderId);
  const { loading, error, data } = useAsync(getFolder, [id]);
  const folderData = mapFolderFromLink(data?.data);

  return { loading, error, folderData };
};
