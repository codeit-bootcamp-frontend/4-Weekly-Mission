export const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }];
export const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const DEFAULT_BORDER_COLOR = 'var(--color-gray-500)';
export const FOCUS_BORDER_COLOR = 'var(--color-primary)';
export const ERROR_BORDER_COLOR = 'var(--color-red)';
export const EMAIL_MESSAGE = {
  empty: '이메일을 입력해 주세요.',
  invalid: '올바른 이메일 주소가 아닙니다.',
  fail: '이메일 주소를 확인해 주세요.',
  exist: '이미 사용 중인 이메일입니다.'
};
export const PASSWORD_MESSAGE = {
  empty: '비밀번호를 입력해 주세요.',
  invalid: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  fail: '비밀번호를 확인해 주세요.',
  match: '비밀번호가 일치하지 않아요.'
};
export const SHOW_PASSWORD_ICON = {
  visible: { src: '../assets/icons/eye-on.svg', alt: 'eye-on' },
  invisible: { src: '../assets/icons/eye-off.svg', alt: 'eye-off' }
};

export const INPUT_IDS = {
  emailElementId: 'login-email',
  passwordElementId: 'login-password',
  passwordCheckElementId: 'login-password-check',
  emailErrorElementId: 'email-error',
  passwordErrorElementId: 'login-password-error',
  passwordCheckErrorElementId: 'login-password-check-error',
  loginFormId: 'login-form',
  passwordEyeImageId: 'eye-image-password',
  eyeImagePasswordCheckId: 'eye-image-password-check'
};

export const LGOIN_PATH = '../pages/folder.html';
export const SIGNUP_PATH = '../pages/folder.html';
