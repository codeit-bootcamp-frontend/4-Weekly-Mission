import { mapFolderData } from '@/apis/mapFolderData';
import { useAsync } from '@/apis/useAsync';
import { axiosInstance } from '@/apis/axiosInstance';

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get('sample/folder');
  const { loading, error, data } = useAsync(getFolder);

  const folderData = data?.folder ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};
