import { addClass, removeClass } from "../utils/classList.js"

// 에러 지우기.
export const removeErrorUI = (errorElement, inputLayoutElement) => {
  errorElement.remove()
  removeClass(inputLayoutElement, "invalid")
}

// 에러를 출력
export const printErrorUI = (errorElement, inputLayoutElement, message) => {
  errorElement.textContent = message
  inputLayoutElement.appendChild(errorElement)
  addClass(inputLayoutElement, "invalid")
}

export const passwordToggleIcon = (icon) => {
  const isEyeOffIcon = icon.src.includes("password-eye-icon")
  icon.src = isEyeOffIcon ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
}

export const passwordToggleInputType = (passwordInput) =>
  (passwordInput.type = passwordInput.type === "password" ? "text" : "password")

// 인풋 유효성에 따른 해당 UI 보여주기.
export const inputValidationUI = (isValid, errorElement, inputLayoutElement) =>
  isValid.result
    ? removeErrorUI(errorElement, inputLayoutElement)
    : printErrorUI(errorElement, inputLayoutElement, isValid.message)

// 폼 유효성에 따른 해당 UI 보여주기.
export const formValidationUI = (isValid, errorElements) =>
  Array.isArray(isValid)
    ? isValid.forEach(({ message, name }) =>
        printErrorUI(errorElements[name], document.querySelector(`.input-layout-${name}`), message)
      )
    : printErrorUI(
        errorElements[isValid.name],
        document.querySelector(`.input-layout-${isValid.name}`),
        isValid.message
      )
