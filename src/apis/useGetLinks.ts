import { useCallback, useEffect } from 'react';
import { axiosInstance } from '@/apis/axiosInstance';
import { mapLinksData } from '@/apis/mapLinksData';
import { useAsync } from '@/apis/useAsync';
import { ALL_LINKS_ID } from '@/utils/constant';

type mapDataFormatType = {
  id: number;
  created_at: string;
  image_source: string;
  url: string;
  title: string;
  description: string;
};

export const useGetLinks = (folderId = ALL_LINKS_ID as string | number) => {
  const queryString = folderId === ALL_LINKS_ID ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString],
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
  }: mapDataFormatType) => ({
    id,
    createdAt: new Date(created_at),
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
