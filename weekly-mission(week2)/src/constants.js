const MASTER_ACCOUNT = Object.freeze({
  EMAIL: 'test@codeit.com',
  PASSWORD: 'codeit101'
});

const REGEX = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: '',
});

const ERROR_MSG = Object.freeze({
  BLANK: {
    EMAIL: '이메일을 입력해 주세요.',
    PASSWORD: '비밀번호를 입력해 주세요.'
  },
  INVALID: {
    EMAIL: '올바른 이메일 주소가 아닙니다.'
  },
  INCORRECT:{
    EMAIL: '이메일을 확인해 주세요.',
    PASSWORD: '비밀번호를 확인해 주세요.'
  }
});

export { MASTER_ACCOUNT, REGEX, ERROR_MSG };
