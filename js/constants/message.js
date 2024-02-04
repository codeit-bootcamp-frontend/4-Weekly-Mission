const ERROR_MESSAGE = {
  emptyEmail: '이메일을 입력해주세요.',
  checkEmail: '이메일을 확인해 주세요.',
  emptyPassword: '비밀번호를 입력해주세요.',
  checkPassword: '비밀번호를 확인해 주세요.',
  rightEmail: '올바른 이메일 주소가 아닙니다.',
  emailInUse: '이미 사용 중인 이메일입니다.',
};

const LOGIN_ATTEMPT = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export { ERROR_MESSAGE, LOGIN_ATTEMPT, REGEX };
