export const isEmpty = (value) => value.trim().length === 0

export const isEmailValid = (value) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  return pattern.test(value)
}

export const emptyMessage = (name) => (name === "email" ? "이메일을 입력해주세요." : "비밀번호를 입력해주세요.")
