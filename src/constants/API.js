const SAMPLE = Object.freeze({
  FOLDER: '/sample/folder',
  USER: '/sample/user',
});

const USER = Object.freeze({
  DETAIL: (userId) => {
    return `/users/${userId}`;
  },
});

const FOLDER = Object.freeze({
  USER_FOLDERS: (userId) => {
    return `/users/${userId}/folders`;
  },
});

const LINK = Object.freeze({
  USER_LINKS: (userId) => {
    return `/users/${userId}/links`;
  },
});
export default { SAMPLE, USER, FOLDER, LINK };
