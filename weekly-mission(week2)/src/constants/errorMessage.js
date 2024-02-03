const ERROR_MESSAGE = Object.freeze({
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
    MISMATCH: '비밀번호가 일치하지 않아요.'
  },
});

export default ERROR_MESSAGE;
