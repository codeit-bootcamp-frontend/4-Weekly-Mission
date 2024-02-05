// Login
const API_PATH_SIGNIN = "https://bootcamp-api.codeit.kr/api/sign-in";
// SignUp
const API_PATH_SIGNUP = "https://bootcamp-api.codeit.kr/api/sign-up";
const API_PATH_CHECK_EMAIL = "https://bootcamp-api.codeit.kr/api/check-email";
// Header
const API_PATH_SAMPLE_USER_INFO = "https://bootcamp-api.codeit.kr/api/sample/user";
// Share
const API_PATH_SAMPLE_FOLDER = "https://bootcamp-api.codeit.kr/api/sample/folder";
// folder
const API_PATH_USER_FOLDER = "https://bootcamp-api.codeit.kr/api/users/10/folders";
const API_PATH_ALL_LINK = "https://bootcamp-api.codeit.kr/api/users/10/links";
const API_PATH_CATEGORY_LINK = (id) => {
    return `https://bootcamp-api.codeit.kr/api/users/10/links?folderId=${id}`;
}
export {API_PATH_SIGNIN, API_PATH_SIGNUP, API_PATH_CHECK_EMAIL,
     API_PATH_SAMPLE_USER_INFO, API_PATH_SAMPLE_FOLDER, API_PATH_USER_FOLDER,
     API_PATH_ALL_LINK, API_PATH_CATEGORY_LINK}

