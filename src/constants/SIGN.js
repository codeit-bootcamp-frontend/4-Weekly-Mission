const MESSAGE = Object.freeze({
  REQUIRED_EMAIL: '이메일을 입력해 주세요.',
  INVALID_EMAIL_FORMAT: '올바른 이메일 주소가 아닙니다.',
  CHECK_EMAIL: '이메일을 확인해 주세요.',

  REQUIRED_PASSWORD: '비밀번호를 입력해 주세요.',
  INVALID_PW_FORMAT: '8~20자 공백없이 영문/숫자/특수문자를 포함해 주세요.',
  CHECK_PASSWORD: '비밀번호를 확인해 주세요.',
});

const REGEX = Object.freeze({
  EMAIL_REGEX: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  PW_REGEX: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
});

const ACTION = Object.freeze({
  EMAIL: 'EMAIL',
  PW: 'PW',
});

export { MESSAGE, REGEX, ACTION };
