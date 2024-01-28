export const ErrorMessage = {
  NoInputId: "이메일 주소를 입력해 주세요.",
  NoInputPassword: "비밀번호를 입력해 주세요.",
  InvalidId: "올바른 이메일 주소가 아닙니다.",
  InvalidPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  WrongId: "이메일을 확인해 주세요.",
  WrongPassword: "비밀번호를 확인해 주세요.",
  UnmatchedPassword: "비밀번호가 일치하지 않습니다.",
  CantUseId: "이미 사용 중인 이메일입니다.",
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  const passwordRegex = /^[A-Za-z0-9][A-Za-z0-9]*$/;
  return passwordRegex.test(password);
};