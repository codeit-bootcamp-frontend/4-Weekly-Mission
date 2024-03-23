import { useQuery } from '@tanstack/react-query';
import linkAPI from 'api/linkAPI';
import API from 'constants/API';

interface UserQueryParams {
  userId: number;
}

function useUserLinksQuery({ userId }: UserQueryParams) {
  return useQuery({
    queryKey: [API.LINK.USER_LINKS(userId)],
    queryFn: async () => {
      return await linkAPI.getUserLinks(userId);
    },
  });
}

export default useUserLinksQuery;
