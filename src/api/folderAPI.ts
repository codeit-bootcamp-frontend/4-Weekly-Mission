import instance from 'api/instance';
import API from 'constants/API';

/**
 * 유저의 모든 폴더 정보 조회 api
 */
const getUserFolders = (userId: number) => {
  return instance({
    url: API.FOLDER.USER_FOLDERS(userId),
    method: 'GET',
  });
};

export default { getUserFolders };
