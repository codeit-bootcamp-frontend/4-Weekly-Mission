const isNotEmptyValid = (value) => value.trim().length !== 0

const isEmailValid = (value) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  return pattern.test(value)
}

const isEmail = (type) => type === "email"

const emptyTypeMessage = (type) => (isEmail(type) ? "이메일을 입력해주세요." : "패스워드를 입력해주세요.")

export { isNotEmptyValid, isEmailValid, isEmail, emptyTypeMessage }
