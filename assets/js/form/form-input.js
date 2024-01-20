import formState from "../core/index.js"
import { containsClass } from "../utils/classList.js"
import { emptyTypeMessage, isEmail, isEmailValid, isNotEmptyValid } from "../utils/validation.js"
import UI from "./form-ui.js"

export default class FormInput extends UI {
  constructor(type, inputElement, errorElement) {
    super()
    this.type = type
    this.inputElement = inputElement
    this.errorElement = errorElement

    this.isValid = { message: "", result: false }
    this.attach()
  }

  validation(value) {
    if (!isNotEmptyValid(value)) {
      return { message: emptyTypeMessage(this.type), result: false }
    }

    if (!isEmailValid(value) && isEmail(this.type)) {
      return { message: "올바른 이메일 주소가 아닙니다.", result: false }
    }

    return { message: "Validate Passed!", result: true }
  }

  foucsOutHandler(event) {
    const { name, value } = event.target
    formState.setState = { prop: name, value: value }

    this.isValid = this.validation(event.target.value)

    this.isValid.result
      ? this.removeError(this.type, this.errorElement)
      : this.showError(this.type, this.isValid.message)
  }

  toggleShowPassword({ target }) {
    if (!containsClass(target, "password-show")) return
    this.inputElement.type = this.inputElement.type === "text" ? "password" : "text"
    this.passwordChangeIcon(this.inputElement)
  }

  attach() {
    this.inputElement.addEventListener("focusout", this.foucsOutHandler.bind(this))

    if (this.type === "password") {
      const passwordButton = this.inputElement.nextElementSibling
      passwordButton.addEventListener("click", this.toggleShowPassword.bind(this))
    }
  }
}
