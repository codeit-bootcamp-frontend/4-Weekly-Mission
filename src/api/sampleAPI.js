import api from 'api/api.js';
import API from 'constants/API';

/**
 * [링크 공유 페이지] 샘플유저 정보 조회 api
 */
const getSampleUserInfo = async () => {
  return await api({
    url: API.SAMPLE.USER,
    method: 'GET',
  });
};

export default {
  getSampleUserInfo,
};
