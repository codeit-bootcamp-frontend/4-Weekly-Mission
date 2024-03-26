import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { mapLinksData } from "link/util-map/mapLinksData";
import { useAsync } from "sharing/util";
import { ALL_LINKS_ID } from "./constant";

interface MapDataFormatProps {
  id: string | number;
  created_at: string | number;
  url: string;
  image_source: string;
  title: string;
  description: string;
}
interface AsyncProps {
  execute: any;
  loading: boolean;
  data: any;
}
export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, data }: AsyncProps = useAsync(getLinks);

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
  }: MapDataFormatProps) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, data: linksData };
};
