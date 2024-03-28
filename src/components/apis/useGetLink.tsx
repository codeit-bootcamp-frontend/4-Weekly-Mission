import { useCallback, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import DEFAULT_FOLDER from '../../utils/constant/folder';
import { useAsync } from '../../hooks/useAsync';
import { format } from 'date-fns/format';
import { getElapsedTime } from '../../utils/getElapsedTime';

export interface LinkData {
  id?: string | number;
  name?: string | number;
  created_at: string;
  createdAt?: string;
  url: string;
  image_source?: string;
  imageSource?: string;
  title?: string;
  description?: string;
  owner?: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

const mapLinksData = (link: LinkData) => {
  const { id, created_at, url, image_source, title, description } = link;
  return {
    id,
    url,
    image_source,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(created_at),
    description,
    created_at: format(new Date(created_at), 'yyyy. MM. dd'),
  };
};

const useGetLink = (folderId = DEFAULT_FOLDER.id) => {
  const queryString = folderId === DEFAULT_FOLDER.id ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get<LinkData>(`users/4/links${queryString}`), [queryString]);
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
  }, [folderId]);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }: LinkData) => ({
    id,
    created_at,
    image_source,
    url,
    title,
    description,
  });

  const linksData = (data || []).map(mapDataFormat).map(mapLinksData);
  return { execute, loading, error, data: linksData };
};

export default useGetLink;
