import { mapLinkData } from "util/mapLinkData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const GetAllFolderLinks = () => {
  const getUser = () => axiosInstance.get("users/1/links");
  const { loading, error, data } = useAsync(getUser);
  const newData = data?.data;
  const linkData = mapLinkData(newData);
  return { loading, error, data: linkData };
};
