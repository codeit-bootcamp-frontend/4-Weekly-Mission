export const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }];
export const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
export const DEFAULT_BORDER_COLOR = 'var(--color-gray-500)';
export const FOCUS_BORDER_COLOR = 'var(--color-primary)';
export const ERROR_BORDER_COLOR = 'var(--color-red)';
export const EMAIL_MESSAGE = {
  empty: '이메일을 입력해 주세요.',
  invalid: '올바른 이메일 주소가 아닙니다.',
  fail: '이메일 주소를 확인해 주세요.'
};
export const PASSWORD_MESSAGE = {
  empty: '비밀 번호를 입력해 주세요.',
  fail: '비밀 번호를 확인해 주세요.'
};
export const SHOW_PASSWORD_ICON = {
  visible: { src: '../assets/icons/eye-on.svg', alt: 'eye-on' },
  invisible: { src: '../assets/icons/eye-off.svg', alt: 'eye-off' }
};

export const loginAction = () => {
  return (window.location.href = '../pages/folder.html');
};
