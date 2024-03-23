import instance from 'api/instance';
import API from 'constants/API';

type Id = number;

/**
 * 유적가 가지고 있는 링크들 정보 조회 api
 */
const getUserLinks = (userId: Id) => {
  return instance({
    url: API.LINK.USER_LINKS(userId),
    method: 'GET',
  });
};

/**
 * 유적가 가지고 있는 링크들 정보 조회 api[특정폴더]
 */
const getUserSpecipicLink = (userId: Id, folderId: Id) => {
  return instance({
    url: API.LINK.USER_SPECIFIC_LINKS(userId, folderId),
    method: 'GET',
  });
};

export default { getUserLinks, getUserSpecipicLink };
