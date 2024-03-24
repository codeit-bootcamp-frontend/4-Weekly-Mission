const BASE_URL = process.env.REACT_APP_API_KEY;
interface ApiPath {
  SIGNIN: string;
  SIGNUP: string;
  CHECK_EMAIL: string;
  HEADER_USER_INFO: string;
  SAMPLE_FOLDER: string;
  USER_FOLDER: string;
  ALL_LINK: string;
  CATEGORY_LINK: string;
}

const API_PATH: ApiPath = {
  SIGNIN: `${BASE_URL}api/sign-in`,
  SIGNUP: `${BASE_URL}api/sign-up`,
  CHECK_EMAIL: `${BASE_URL}api/check-email`,
  HEADER_USER_INFO: `${BASE_URL}api/users/1`,
  SAMPLE_FOLDER: `${BASE_URL}api/sample/folder`,
  USER_FOLDER: `${BASE_URL}api/users/11/folders`,
  ALL_LINK: `${BASE_URL}api/users/11/links`,
  CATEGORY_LINK: `${BASE_URL}api/users/11/links?folderId=`
};

export { API_PATH };
