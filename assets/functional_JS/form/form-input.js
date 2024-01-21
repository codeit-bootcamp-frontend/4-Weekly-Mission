import { inputValidation } from "../utils/validation.js"
import { inputValidationUI } from "./form-ui.js"
import { formState } from "./index.js"

export default function focusoutHandler({ target: { value, name, tagName } }) {
  formState.setValues(name, value)

  if (tagName !== "INPUT") return

  const isValid = inputValidation(value, name)
  const inputLayoutElement = document.querySelector(`.input-layout-${name}`)
  const errorElement = formState.getErrorElements()[name]

  inputValidationUI(isValid, errorElement, inputLayoutElement)
}
