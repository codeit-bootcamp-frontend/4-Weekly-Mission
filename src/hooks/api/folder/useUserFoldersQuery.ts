import { useQuery } from '@tanstack/react-query';
import folderAPI from 'api/folderAPI';
import API from 'constants/API';

interface UserQueryParams {
  userId: number;
}

function useUserFoldersQuery({ userId }: UserQueryParams) {
  return useQuery({
    queryKey: [API.FOLDER.USER_FOLDERS(userId)],
    queryFn: async () => {
      return await folderAPI.getUserFolders(userId);
    },
  });
}

export default useUserFoldersQuery;
