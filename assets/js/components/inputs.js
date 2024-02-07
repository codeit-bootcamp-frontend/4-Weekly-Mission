import { FormInput, formState } from "../core/index.js"
import { removeError, showError } from "../utils/ui.js"
import { isEmpty, isEmailValid, isPasswordMatch, isPasswordValid, errorMessages } from "../utils/validation.js"
import authService from "../service/index.js"

class RegisterEmailInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
  }

  async validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }
    if (await authService.isExistingEmail(value)) return { result: false, errorType: "existing" }

    return { result: true, errorType: null }
  }
}

class RegisterPasswordInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)

    this.passwordConfirmData = {
      inputElement: document.querySelector(".input-passwordConfirm"),
      inputRootElement: document.querySelector(".input-layout-passwordConfirm"),
      errorElement: document.querySelector(".input-layout-passwordConfirm").querySelector(".input-error"),
    }

    this.addEvent()
  }

  validation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isPasswordValid(value)) return { result: false, errorType: "notValid" }
    if (!isEmpty(formState.data.passwordConfirm) && !isPasswordMatch(value, formState.data.passwordConfirm))
      return { result: false, errorType: "notMatch" }

    return { result: true, errorType: null }
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

  setErrorMessage(errorType) {
    const isPasswordMatchType = errorType === "notMatch"
    const inputElementName = isPasswordMatchType && "passwordConfirm"
    const errorMessage = errorMessages[inputElementName || this.inputElement.name][errorType]

    if (inputElementName) {
      return showError({ ...this.update, ...this.passwordConfirmData, errorMessage })
    }

    showError({ ...this.update, errorMessage })
  }

  focusoutHandler(event) {
    formState.data = { name: this.type, value: event.target.value }
    const validation = this.validation(event.target.value)

    !validation.result && this.setErrorMessage(validation.errorType)

    if (validation.result) {
      validation.result && removeError({ ...this.update, errorMessage: "" })
      removeError({
        ...this.update,
        ...this.passwordConfirmData,
        errorMessage: "",
      })
    }
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
