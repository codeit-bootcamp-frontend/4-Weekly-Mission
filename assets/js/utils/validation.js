import { CHECK_EMAIL } from "../api/index.js"
import { requestHTTP } from "./http.js"

export const isEmpty = (value) => value.trim().length === 0

export const isEmailValid = (value) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  return !isEmpty(value) && pattern.test(value)
}

export const isExistingEmail = async (email) => {
  try {
    const responseData = await requestHTTP(CHECK_EMAIL, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    return "error" in responseData ? true : false
  } catch (error) {
    return true
  }
}

export const isPasswordMatch = (value, passwordValue) => value === passwordValue

export const isPasswordValid = (value) => {
  const pattern = /^[a-zA-Z0-9]{8,16}$/
  return !isEmpty(value) && pattern.test(value)
}

export const errorMessages = {
  email: {
    empty: "이메일을 입력해주세요.",
    notValid: "올바른 이메일 주소가 아닙니다.",
    existing: "이미 사용 중인 이메일입니다.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
    notValid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    notMatch: "비밀번호가 일치하지 않습니다.",
  },
  passwordConfirm: {
    empty: "비밀번호를 입력해주세요.",
    notMatch: "비밀번호가 일치하지 않습니다.",
  },
}
