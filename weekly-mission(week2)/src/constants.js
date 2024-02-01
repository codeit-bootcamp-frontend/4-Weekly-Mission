const MASTER_ACCOUNT = Object.freeze({
  EMAIL: 'test@codeit.com',
  PASSWORD: 'codeit101'
});

const REGEX = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
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
    PASSWORD: '비밀번호를 확인해 주세요.',
    PASSWORD_CONFIRM: '비밀번호가 일치하지 않아요',
  }
});

const ERROR_MESSAGE_V2 = Object.freeze({
  EMAIL: {
    BLANK: '이메일을 입력해 주세요.',
    INVALID: '올바른 이메일 주소가 아닙니다.',
    INCORRECT: '이메일을 확인해 주세요.',
    DUPLICATE: '이미 사용 중인 이메일입니다.',
  },
  PASSWORD: {
    BLANK: '비밀번호를 입력해 주세요.',
    INVALID: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    INCORRECT: '비밀번호를 확인해 주세요.'
  },
  PASSWORD_CONFIRM: {
    INCORRECT: '비밀번호가 일치하지 않아요.'
  },
});

const ERROR_SELECTOR = 'input-error-msg';
const $ = (selector, element = document) => element.querySelector(selector);

export { MASTER_ACCOUNT, REGEX, ERROR_MSG, ERROR_MESSAGE_V2, $};
