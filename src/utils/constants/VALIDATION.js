export const ERROR_MESSAGES = Object.freeze({
  email_empty: '이메일을 입력해 주세요.',
  email_invalid: '올바른 이메일 형식이 아닙니다.',
  email_check: '이메일을 확인해 주세요.',
  email_duplicate: '이미 사용 중인 이메일입니다.',

  password_empty: '비밀번호를 입력해 주세요.',
  password_invalid: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  password_check: '비밀번호를 확인해 주세요.',

  pwConfirm_empty: '비밀번호 확인을 입력해 주세요.',
  pwConfirm_check: '비밀번호가 일치하지 않아요.',
});

export const REGEX = Object.freeze({
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  pw: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
});
