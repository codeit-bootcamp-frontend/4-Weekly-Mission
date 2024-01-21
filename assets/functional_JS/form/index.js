import FormState from "../core/index.js"
import focusoutHandler from "./form-input.js"
import submitHandler, { togglePasswordIconHandler } from "./form.js"

export const formElement = document.querySelector(".form")
export const formState = FormState()

const formInit = () => {
  for (const key in formState.getErrorElements()) {
    formState.setErrorElements(key, document.createElement("p"))
  }
}

formInit()
formElement.addEventListener("focusout", focusoutHandler)
formElement.addEventListener("submit", submitHandler)
formElement.addEventListener("click", togglePasswordIconHandler)
