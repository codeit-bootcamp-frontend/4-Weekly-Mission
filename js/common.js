const $ = (select, el = document) => el.querySelector(select);

const SIGN_INFO_REGEX = {
  email: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
  password: /^[A-Za-z0-9]{8,15}$/,
};

export { $, SIGN_INFO_REGEX };
