import { useEffect } from "react";
import axios from "axios";
import processLinkData from "../utils/processLinkData";
import useAsync from "../utils/useAsync";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const useGetFolderLinks = (folderId = "all") => {
  const getLinkData = () =>
    axios.get(`${BASE_URL}/users/4/links${folderId === "all" ? "" : `?folderId=${folderId}`}`);

  const { run, pending, error, data } = useAsync(getLinkData);

  useEffect(() => {
    run();
  }, [folderId]);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(processLinkData) ?? [];

  return { run, pending, error, data: linksData };
};
