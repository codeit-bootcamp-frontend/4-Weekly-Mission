const SAMPLE = Object.freeze({
  FOLDER: '/sample/folder',
  USER: '/sample/user',
});

const USER = Object.freeze({
  DETAIL: (userId) => {
    return `/users/${userId}`;
  },
});

export default { SAMPLE, USER };
