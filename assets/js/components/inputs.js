import { FormInput, formState } from "../core/index.js"
import { removeError, showError } from "../utils/ui.js"
import {
  isEmpty,
  isNotEmailValid,
  isNotPasswordMatch,
  isExistingEmail,
  isNotPasswordValid,
} from "../utils/validation.js"

class RegisterEmailInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
  }

  validation(value) {
    if (isEmpty(value)) {
      showError({ ...this.update, errorMessage: "이메일을 입력해주세요." })
      return false
    }

    if (isNotEmailValid(value)) {
      showError({
        ...this.update,
        errorMessage: "올바른 이메일 주소가 아닙니다.",
      })
      return false
    }

    if (isExistingEmail(value)) {
      showError({
        ...this.update,
        errorMessage: "이미 사용 중인 이메일입니다.",
      })

      return false
    }

    return true
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
    if (isEmpty(value)) {
      showError({ ...this.update, errorMessage: "비밀번호를 입력해주세요." })
      return false
    }

    if (isNotPasswordValid(value)) {
      showError({ ...this.update, errorMessage: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." })
      return false
    }

    if (isNotPasswordMatch(value, formState.data.passwordConfirm)) {
      showError({
        ...this.update,
        ...this.passwordConfirmData,
        errorMessage: "비밀번호가 일치하지 않아요.",
      })
      return false
    } else {
      removeError({
        ...this.update,
        ...this.passwordConfirmData,
        errorMessage: "",
      })
    }

    return true
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
    if (isEmpty(value)) {
      showError({ ...this.update, errorMessage: "비밀번호를 입력해주세요." })
      return false
    }

    if (isNotPasswordMatch(value, formState.data.password)) {
      showError({
        ...this.update,
        errorMessage: "비밀번호가 일치하지 않아요.",
      })
      return false
    }

    return true
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
    if (isEmpty(value)) {
      showError({ ...this.update, errorMessage: "이메일을 입력해주세요." })
      return false
    }

    if (isNotEmailValid(value)) {
      showError({
        ...this.update,
        errorMessage: "올바른 이메일 주소가 아닙니다.",
      })
      return false
    }

    return true
  }
}

class LoginPasswordInput extends FormInput {
  constructor(inputElement) {
    super(inputElement)
    this.addEvent()
  }

  validation(value) {
    if (isEmpty(value)) {
      showError({ ...this.update, errorMessage: "비밀번호를 입력해주세요." })
      return false
    }

    return true
  }

  inputTypeToggle(inputElement) {
    inputElement.type = inputElement.type === "password" ? "text" : "password"
  }

  toggleIconHandler(event) {
    console.log(event.target)
    this.inputTypeToggle(this.inputElement)
    this.passwordChangeIcon(event.target.children[0])
  }

  passwordChangeIcon(iconElement) {
    const iconSource = iconElement.src.includes("password-eye-icon")
    iconElement.alt = iconSource ? "비밀번호 가리기" : "비밀번호 보기"
    iconElement.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }

  addEvent() {
    console.log(this.inputElement.nextElementSibling)
    this.inputElement.nextElementSibling.addEventListener("click", this.toggleIconHandler.bind(this))
  }
}

export { RegisterEmailInput, RegisterPasswordInput, RegisterPasswordConfirmInput, LoginEmailInput, LoginPasswordInput }
