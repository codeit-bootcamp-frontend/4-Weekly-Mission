import formState from "../core/index.js"
import { containsClass } from "../utils/classList.js"
import { emptyMessage, isEmpty, isEmailValid } from "../utils/validation.js"
import UI from "./form-ui.js"

export default class FormInput extends UI {
  constructor(type, inputElement, errorElement) {
    super()
    this.type = type
    this.inputElement = inputElement
    this.errorElement = errorElement

    this.attach()
  }

  validation(value) {
    if (isEmpty(value)) {
      return { message: emptyMessage(this.type), result: false }
    }

    if (this.type === "email" && !isEmailValid(value)) {
      return { message: "올바른 이메일 주소가 아닙니다.", result: false }
    }

    return { message: "Validate Passed!", result: true }
  }

  foucsOutHandler({ target: { value } }) {
    const isValid = this.validation(value)
    formState.setState = { message: isValid.message, result: isValid.result, type: this.type, value }

    isValid.result ? this.removeError(this.type, this.errorElement) : this.showError(this.type, isValid.message)
  }

  toggleShowPassword({ target }) {
    if (!containsClass(target, "password-show")) return
    this.passwordToggleInputType(this.inputElement)
    this.passwordToggleIcon(target.children[0])
  }

  attach() {
    this.inputElement.addEventListener("focusout", this.foucsOutHandler.bind(this))

    if (this.type === "password") {
      const passwordButton = this.inputElement.nextElementSibling
      passwordButton.addEventListener("click", this.toggleShowPassword.bind(this))
    }
  }
}
