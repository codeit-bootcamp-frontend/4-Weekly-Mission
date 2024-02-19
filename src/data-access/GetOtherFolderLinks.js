import { mapLinkData } from "util/mapLinkData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const GetOtherFolderLinks = ({ id }) => {
  const getUser = () => axiosInstance.get(`"users/1/links/links?folderId="${id}`);
  const { loading, error, data } = useAsync(getUser);
  const newData = data?.data;
  const linkData = mapLinkData(newData);
  return { loading, error, data: linkData };
};
