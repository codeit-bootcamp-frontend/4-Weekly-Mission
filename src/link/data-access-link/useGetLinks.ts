import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { mapLinksData } from "link/util-map/mapLinksData";
import { useAsync } from "sharing/util";
import { ALL_LINKS_ID } from "./constant";
import { Link } from "@/types/link";

interface LinkFormat extends Omit<Link, "createdAt" | "imageSource"> {
  created_at: string;
  image_source: string;
}

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    url,
    image_source,
    title,
    description,
  }: LinkFormat) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
