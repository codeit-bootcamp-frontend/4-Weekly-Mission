import { useAsync } from '../util/useAsync';
import { axiosInstance } from 'util/axiosInstance';

export const useGetUserFolders = () => {
  const getUser = () => axiosInstance.get('users/1/folders');
  const { loading, error, data: foldersData } = useAsync(getUser);

  return { loading, error, foldersData };
};
