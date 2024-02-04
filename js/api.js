export const API = (() => {
  const URL = 'https://bootcamp-api.codeit.kr/';
  const URL_API = 'api';
  const CHECK_EMAIL = '/check-email';
  const SIGN_IN = '/sign-in';
  const SIGN_UP = '/sign-up';
  return {
    getCheckEmailURl() {
      return URL + URL_API + CHECK_EMAIL;
    },
    getSignInUrl() {
      return URL + URL_API + SIGN_IN;
    },
    getSignUpUrl() {
      return URL + URL_API + SIGN_UP;
    },
  };
})();
