import { FormInput, formState } from "../core/index.js"
import { removeError, showError } from "../utils/ui.js"
import {
  isEmpty,
  isEmailValid,
  isPasswordMatch,
  isExistingEmail,
  isPasswordValid,
  errorMessages,
} from "../utils/validation.js"

class RegisterEmailInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }
    if (isExistingEmail(value)) return { result: false, errorType: "existing" }

    return { result: true, errorType: null }
  }
}

class RegisterPasswordInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)

    this.addEvent()
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isPasswordValid(value)) return { result: false, errorType: "notValid" }
    if (!isEmpty(formState.data.passwordConfirm) && !isPasswordMatch(value, formState.data.passwordConfirm)) {
      return { result: false, errorType: "notMatch" }
    }

    if (isPasswordMatch(value, formState.data.passwordConfirm))
      removeError({
        ...this.update,
        ...this.passwordConfirmData,
        errorMessage: "",
      })

    return { result: true, errorType: null, isMatch: true }
  }

  passwordChangeIcon(iconElement) {
    const iconSource = iconElement.src.includes("password-eye-icon")
    iconElement.alt = iconSource ? "비밀번호 가리기" : "비밀번호 보기"
    iconElement.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }

  inputTypeToggle(inputElement) {
    inputElement.type = inputElement.type === "password" ? "text" : "password"
  }

  toggleIconHandler(event) {
    this.inputTypeToggle(this.inputElement)
    this.passwordChangeIcon(event.target.children[0])
  }

  addEvent() {
    this.inputElement.nextElementSibling.addEventListener("click", this.toggleIconHandler.bind(this))
  }
}

class RegisterPasswordConfirmInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
    this.addEvent()
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isPasswordMatch(value, formState.data.password)) return { result: false, errorType: "notMatch" }

    return { result: true, errorType: null }
  }

  inputTypeToggle(inputElement) {
    inputElement.type = inputElement.type === "password" ? "text" : "password"
  }

  toggleIconHandler(event) {
    this.inputTypeToggle(this.inputElement)
    this.passwordChangeIcon(event.target.children[0])
  }

  passwordChangeIcon(iconElement) {
    const iconSource = iconElement.src.includes("password-eye-icon")
    iconElement.alt = iconSource ? "비밀번호 가리기" : "비밀번호 보기"
    iconElement.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }

  addEvent() {
    this.inputElement.nextElementSibling.addEventListener("click", this.toggleIconHandler.bind(this))
  }
}

class LoginEmailInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }

    return { result: true, errorType: null }
  }
}

class LoginPasswordInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
    this.addEvent()
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    return { result: true, errorType: null }
  }

  inputTypeToggle(inputElement) {
    inputElement.type = inputElement.type === "password" ? "text" : "password"
  }

  toggleIconHandler(event) {
    this.inputTypeToggle(this.inputElement)
    this.passwordChangeIcon(event.target.children[0])
  }

  passwordChangeIcon(iconElement) {
    const iconSource = iconElement.src.includes("password-eye-icon")
    iconElement.alt = iconSource ? "비밀번호 가리기" : "비밀번호 보기"
    iconElement.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }

  addEvent() {
    this.inputElement.nextElementSibling.addEventListener("click", this.toggleIconHandler.bind(this))
  }
}

export { RegisterEmailInput, RegisterPasswordInput, RegisterPasswordConfirmInput, LoginEmailInput, LoginPasswordInput }
