import { useQuery } from '@tanstack/react-query';
import folderAPI from 'api/folderAPI';
import API from 'constants/API';

function useUserInfoQuery({ userId }) {
  return useQuery({
    queryKey: [API.USER.DETAIL(userId)],
    queryFn: async () => {
      return await folderAPI.getUserInfo(userId);
    },
  });
}

export default useUserInfoQuery;
