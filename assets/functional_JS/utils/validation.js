export const isEmpty = (value) => value.trim().length === 0

export const emptyMessage = (name) => (name === "email" ? "이메일을 입력해주세요." : "비밀번호를 입력해주세요.")

export const isEmailValid = (value) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  return pattern.test(value)
}

export const formValidation = ({ email: emailValues, password: passwordValues }) => {
  // 이메일과 비밀번호를 입력안하고 로그인한 경우
  if (isEmpty(emailValues) && isEmpty(passwordValues)) {
    return [
      { result: false, message: "이메일을 입력해주세요.", name: "email" },
      { result: false, message: "비밀번호를 입력해주세요.", name: "password" },
    ]
  }

  // 이메일에 값이 없는 경우
  if (isEmpty(emailValues)) {
    return { result: false, message: "이메일을 입력해주세요.", name: "email" }
  }

  // 패스워드에 값이 없는 경우
  if (isEmpty(passwordValues)) {
    return { result: false, message: "비밀번호를 입력해주세요.", name: "password" }
  }

  // 이메일에 값을 입력했는데 유효성에 맞지 않을 경우
  if (!isEmpty(emailValues) && !isEmailValid(emailValues)) {
    return { result: false, message: "올바른 이메일 주소가 아닙니다.", name: "email" }
  }

  return { result: true, message: "Validation Passed!!!" }
}

export const inputValidation = (value, name) => {
  if (isEmpty(value)) {
    return { result: false, message: emptyMessage(name) }
  }

  if (name === "email" && !isEmailValid(value)) {
    return { result: false, message: "올바른 이메일 주소가 아닙니다." }
  }

  return { result: true, message: "Validation Passed" }
}
