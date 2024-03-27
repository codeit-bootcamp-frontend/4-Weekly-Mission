import instance from 'api/instance';
import API from 'constants/API';

/**
 * [링크 공유 페이지] 샘플유저 정보 조회 api
 */
const getSampleUserInfo = () => {
  return instance({
    url: API.SAMPLE.USER,
    method: 'GET',
  });
};

/**
 * [링크 공유 페이지] 샘플폴더 정보 조회 api
 */
const getSampleFolderInfo = () => {
  return instance({
    url: API.SAMPLE.FOLDER,
    method: 'GET',
  });
};

export default {
  getSampleUserInfo,
  getSampleFolderInfo,
};
