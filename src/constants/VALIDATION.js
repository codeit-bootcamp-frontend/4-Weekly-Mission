const SIGN = Object.freeze({
  REQUIRED_EMAIL: '이메일을 입력해 주세요.',
  INVALID_EMAIL_FORMAT: '올바른 이메일 주소가 아닙니다.',
  CHECK_EMAIL: '이메일을 확인해 주세요.',
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,

  REQUIRED_PASSWORD: '비밀번호를 입력해 주세요.',
  CHECK_PASSWORD: '비밀번호를 확인해 주세요.',
});

export default SIGN;
