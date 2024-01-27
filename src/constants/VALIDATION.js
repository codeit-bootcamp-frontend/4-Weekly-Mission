export const ERROR_MESSAGES = Object.freeze({
  email_empty: "이메일을 입력해 주세요.",
  email_invalid: "올바른 이메일 주소가 아닙니다.",
  email_check: "이메일을 확인해 주세요.",

  password_empty: "비밀번호를 입력해 주세요.",
  password_invalid: "8~20자 공백없이 영문/숫자/특수문자를 포함해 주세요.",
  password_check: "비밀번호를 확인해 주세요.",

  pwCheck_empty: "비밀번호 확인을 입력해 주세요.",
  pwCheck_invalid: "비밀번호가 다릅니다.",
});

export const REGEX = Object.freeze({
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  pw: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
});
