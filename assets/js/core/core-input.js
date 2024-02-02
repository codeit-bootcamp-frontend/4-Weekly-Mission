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
    this.attach()
  }

  setErrorMessage(errorType) {
    const errorMessage = errorMessages[this.inputElement.name][errorType]
    showError({ ...this.update, errorMessage })
  }

  focusoutHandler(event) {
    formState.data = { name: this.type, value: event.target.value }
    const validation = this.validation(event.target.value)

    !validation.result && this.setErrorMessage(validation.errorType)
    validation.result && removeError({ ...this.update, errorMessage: "" })
  }

  attach() {
    this.inputElement.addEventListener("focusout", this.focusoutHandler.bind(this))
  }
}
