export const EMAIL_ERROR_MESSAGE = {
  empty: '이메일을 입력해 주세요.',
  invalid: '올바른 이메일 주소가 아닙니다.',
  validation: '이메일 주소를 확인해 주세요.'
};
export const PASSWORD_ERROR_MESSAGE = {
  empty: '비밀번호를 입력해 주세요.',
  validation: '비밀번호를 확인해 주세요.',
  agreement: '비밀번호가 일치하지 않아요.'
};
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }];
export const PASSWORD_EYE_ICON = {
  textType: {src: '../../images/eye-on.svg', alt: 'eye-on'},
  passwordType: {src: '../../images/eye-off.svg', alt: 'eye-off'}
}
