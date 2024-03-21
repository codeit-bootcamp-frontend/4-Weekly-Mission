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
  SIGNIN: 'https://bootcamp-api.codeit.kr/api/sign-in',
  SIGNUP: 'https://bootcamp-api.codeit.kr/api/sign-up',
  CHECK_EMAIL: 'https://bootcamp-api.codeit.kr/api/check-email',
  HEADER_USER_INFO: 'https://bootcamp-api.codeit.kr/api/users/1',
  SAMPLE_FOLDER: 'https://bootcamp-api.codeit.kr/api/sample/folder',
  USER_FOLDER: 'https://bootcamp-api.codeit.kr/api/users/11/folders',
  ALL_LINK: 'https://bootcamp-api.codeit.kr/api/users/11/links',
  CATEGORY_LINK: 'https://bootcamp-api.codeit.kr/api/users/11/links?folderId='
};

export { API_PATH };
