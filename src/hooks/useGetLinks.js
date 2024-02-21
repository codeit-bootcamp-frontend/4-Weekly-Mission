import axios from "../util/axiosInstance";
import { useCallback, useEffect } from "react";
import { useAsync } from "./useAsync";

export const useGetLinks = (folderId = "ALL") => {
  const queryString = folderId === "ALL" ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axios.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { executor, isLoading, error, data } = useAsync(getLinks);

  useEffect(() => {
    executor();
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    url,
    description,
    image_source,
  }) => ({
    id,
    createdAt: created_at,
    url,
    description,
    imageSource: image_source,
  });

  const linksData = data?.data.map(mapDataFormat) ?? [];

  return { executor, isLoading, error, data: linksData };
};
