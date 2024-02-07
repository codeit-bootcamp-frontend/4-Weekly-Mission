import { TEST_USER } from "../auth/index.js"

export const isEmpty = (value) => value.trim().length === 0

export const isEmailValid = (value) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  return !isEmpty(value) && pattern.test(value)
}

export const isExistingEmail = (value) => value === TEST_USER.email

export const isPasswordMatch = (value, passwordValue) => value === passwordValue

export const isPasswordValid = (value) => {
  const pattern = /^[a-zA-Z0-9]{8,16}$/
  return !isEmpty(value) && pattern.test(value)
}
