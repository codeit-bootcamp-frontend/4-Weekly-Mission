import { useQuery } from '@tanstack/react-query';
import userAPI from 'api/userAPI';
import API from 'constants/API';

function useUserInfoQuery({ userId }) {
  return useQuery({
    queryKey: [API.USER.DETAIL(userId)],
    queryFn: async () => {
      return await userAPI.getUserInfo(userId);
    },
  });
}

export default useUserInfoQuery;
