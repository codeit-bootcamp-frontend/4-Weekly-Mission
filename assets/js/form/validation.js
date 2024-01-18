import { addClass } from "../utils/classList.js"

export default class Validation {
  constructor(type, inputElem) {
    this.type = type
    this.inputElem = inputElem
    this.value = null
    this.inputRootElem = document.querySelector(`.input-layout-${this.type}`)
    this.validationInstance = this.typeCheck()

    this.attach()
  }

  typeCheck() {
    return this.type === "email"
      ? new EmailValidation()
      : new PasswordValidation(this.value)
  }

  passwordHandler() {
    this.inputElem.addEventListener("focusout", this.eventHandler.bind(this))
    this.inputElem.addEventListener("click", this.eventHandler.bind(this))
  }

  emailHandler() {
    this.inputElem.addEventListener("focusout", this.eventHandler.bind(this))
  }

  eventHandler(event) {
    const { message } = this.validationInstance.validation(event.target.value)

    if (message) {
      const errorElem = document.createElement("p")
      errorElem.textContent = message
      this.inputRootElem.appendChild(errorElem)

      addClass(this.inputRootElem, "invalid")
    }
  }

  attach() {
    this.type === "email" ? this.emailHandler() : this.passwordHandler()
  }

  // isNotEmptyValid() {
  //   return this.validationInstance.isNotEmptyValid() ? true : false
  // }
}

class EmailValidation {
  validation(value) {
    this.value = value

    if (!this.isEmptyValid()) {
      return { message: "이메일을 입력해주세요. " }
    }

    if (!this.isEmailValid()) {
      return { message: "올바른 이메일 주소가 아닙니다." }
    }
  }

  isEmptyValid() {
    return this.value.trim().length !== 0
  }

  isEmailValid() {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
    return pattern.test(this.value)
  }
}

class PasswordValidation {
  constructor(value) {
    this.value = value
    // this.attach()
  }

  isNotEmptyValid(value) {
    return value.trim().length !== 0
  }

  eventHandler(event) {
    this.isNotEmptyValid(event.target.value)
  }

  // attach() {
  //   this.inputElem.addEventListener("focusout", this.eventHandler)
  // }
}
