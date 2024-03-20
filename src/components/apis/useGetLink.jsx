import { useCallback, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import { DEFAULT_FOLDER } from '../../utils/constant';
import { useAsync } from '../../hooks/useAsync';
import format from 'date-fns/format';
import { getElapsedTime } from '../../utils/getElapsedTime';

const mapLinksData = link => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), 'yyyy. MM. dd'),
  };
};

const useGetLink = (folderId = DEFAULT_FOLDER.id) => {
  const queryString = folderId === DEFAULT_FOLDER.id ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get(`users/1/links${queryString}`), [queryString]);
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

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];
  return { execute, loading, error, data: linksData };
};

export default useGetLink;
