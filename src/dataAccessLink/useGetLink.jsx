import { useCallback, useEffect } from 'react';
import { axiosInstance } from '../utils/axiosInstance';
import useAsync from '../hooks/useAsync';

export const useGetLink = (folderId = 'all') => {
  const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get(`user/1/links${queryString}`), [queryString]);
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
  }, [folderId]);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinkData) ?? [];

  return { execute, loading, error, data: linksData };
};
