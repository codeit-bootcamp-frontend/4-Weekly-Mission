// 값을 하드코딩하지 않기 위해, 상수와 상수명을 정적 객체로 관리한다.
export const staticName = {
  elementSeletor : {
    email : ".input-email",
    password : ".input-password",
    passwordConfirm : ".input-password-confirm"
  },
  parentElementSeletor : {
    email : ".input-form-email",
    password : ".input-form-password",
    passwordConfirm : ".input-form-password-confirm"
  },
  iconSelector : {
    password : ".password-icon",
    passwordConfirm : ".password-confirm-icon"
  },
  buttonSelector : {
    signin :  ".button-login",
    signup : ".button-signup"
  }
}

export const errorMessage = {
  isEmpty : {
    email : "이메일을 입력해 주세요",
    password : "비밀번호를 입력해 주세요"
  },
  notCorrectFormat : {
    email : "올바른 이메일 주소가 아닙니다",
    password : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요"
  },
  aleadyUseEmail : "이미 사용 중인 이메일 입니다",
  loginFail : {
    email : "이메일을 확인해 주세요",
    password : "비밀번호를 확인해 주세요"
  },
  passwordIsNotEqual : "비밀번호가 일치하지 않아요"
}

export const superUser = { 
  email: "test@codeit.com",
  password: "sprint101"
}