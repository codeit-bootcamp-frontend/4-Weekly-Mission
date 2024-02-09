export const TOKEN = {
  ACCESS_TOKEN: 'accessToken',
};

export const PATH = {
  ICON_EYE_ON: '/assets/icon/eye-on.svg',
  ICON_EYE_OFF: '/assets/icon/eye-off.svg',

  PAGE_FOLDER: '/pages/folder.html',

  API_SIGNIN: '/sign-in',
  API_SIGNUP: '/sign-up',
  API_CHECK_EMAIL: '/check-email',
};

export const ERROR_MESSAGE = {
  EMPTY_EMAIL: '이메일을 입력해 주세요.',
  EMPTY_PASSWORD: '비밀번호를 입력해 주세요.',

  INVALID_EMAIL_ADDRESS: '올바른 이메일 주소가 아닙니다.',
  INVALID_EMAIL: '이메일을 확인해 주세요.',
  INVALID_PASSWORD: '비밀번호를 확인해 주세요.',

  UNAVAILABLE_EMAIL: '이미 사용 중인 이메일입니다.',
  UNAVAILABLE_PASSWORD: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  MISMATCH_PASSWORD: '비밀번호가 일치하지 않아요.',
};

export const REGEX = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /(?=.*\d)(?=.*[a-zA-Z]).{8,}/,
};