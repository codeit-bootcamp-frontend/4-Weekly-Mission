//EMAIL_REGEX
export const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

export const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-zA-Z]).{8,}/;

//USER_INFO
export const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }];

//STATE_OF_ELEMENTS
export const VISIABLE_STATE = {
  invisiable: './assets/logo/eye-off.svg',
  visiable: './assets/logo/eye-on.svg',
};

export const EMAIL_ERROR_MESSAGE = {
  isEmpty: '이메일을 입력해 주세요.',
  isNotRightFormat: '올바른 이메일 주소가 아닙니다.',
  haveToCheck: '이메일을 확인해 주세요.',
  isUsing: '이미 사용중인 이메일 입니다.',
};

export const PASSWORD_ERROR_MESSAGE = {
  isEmpty: '비밀번호를 입력해 주세요.',
  haveToCheck: '비밀번호를 확인해 주세요.',
  isNotRightFormat: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
};

export const PASSWORD_CONFIRM_ERROR_MESSAGE = {
  isNotMatch: '비밀번호가 일치하지 않아요.',
};
