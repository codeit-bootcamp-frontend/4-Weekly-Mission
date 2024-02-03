import { formState } from "./index.js"
import { removeError, showError } from "../utils/ui.js"
import { errorMessages } from "../utils/validation.js"

export default class FormInput {
  constructor(inputElement) {
    this.ERROR_CLASS_NAME = "invalid"
    this.inputElement = inputElement
    this.inputRootElement = document.querySelector(`.input-layout-${inputElement.name}`)
    this.errorElement = this.inputRootElement.querySelector(".input-error")
    this.type = inputElement.name
    this.update = {
      errorElement: this.errorElement,
      inputRootElement: this.inputRootElement,
      errorMessage: "",
      className: this.ERROR_CLASS_NAME,
    }

    this.passwordConfirmData = {
      inputElement: document.querySelector(".input-passwordConfirm"),
      inputRootElement: document.querySelector(".input-layout-passwordConfirm"),
      errorElement: document.querySelector(".input-layout-passwordConfirm").querySelector(".input-error"),
    }
    this.attach()
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

  removePasswordMatchError(validation) {
    validation?.isMatch &&
      removeError({
        ...this.update,
        ...this.passwordConfirmData,
        errorMessage: "",
      })
  }

  focusoutHandler(event) {
    formState.data = { name: this.type, value: event.target.value }
    const validation = this.validation(event.target.value)

    this.removePasswordMatchError(validation)

    !validation.result && this.setErrorMessage(validation.errorType)
    validation.result && removeError({ ...this.update, errorMessage: "" })
  }

  attach() {
    this.inputElement.addEventListener("focusout", this.focusoutHandler.bind(this))
  }
}
