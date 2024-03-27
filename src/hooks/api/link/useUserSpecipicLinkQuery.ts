import { useQuery } from '@tanstack/react-query';

import linkAPI from 'api/linkAPI';
import API from 'constants/API';

interface UserQueryParams {
  userId: number;
  folderId: number;
}

function useUserSpecipicLinkQuery({ userId, folderId }: UserQueryParams) {
  return useQuery({
    queryKey: [API.LINK.USER_SPECIFIC_LINKS(userId, folderId)],
    queryFn: async () => {
      return await linkAPI.getUserSpecipicLink(userId, folderId);
    },
  });
}

export default useUserSpecipicLinkQuery;
