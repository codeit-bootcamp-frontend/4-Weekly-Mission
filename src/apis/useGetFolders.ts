import { axiosInstance } from '@/apis/axiosInstance';
import { useAsync } from '@/apis/useAsync';

type FolderType = {
  created_at: string;
  favorite: boolean;
  id: number;
  link: object;
  name: string;
  user_id: number;
};

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get('users/1/folders');
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];

  const sortedFolders = folders.sort((a: FolderType, b: FolderType) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
