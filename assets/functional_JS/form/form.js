import { containsClass } from "../utils/classList.js"
import { formValidation } from "../utils/validation.js"
import { formValidationUI, passwordToggleIcon, passwordToggleInputType } from "./form-ui.js"
import { formState } from "./index.js"

const moveToLink = (link) => (location.href = link)

const successLogin = (result, { email, password }) => result && email === "test@codeit.com" && password === "codeit101"

const failedLogin = (message) => alert(message)

export default function submitHandler(event) {
  event.preventDefault()

  const { values, errorElements } = formState.getData()

  const isValid = formValidation(values)

  if (!isValid.result) {
    return formValidationUI(isValid, errorElements)
  }

  successLogin(isValid.result, values)
    ? moveToLink("/folder.html")
    : failedLogin("이메일이나 비밀번호를 다시 확인해주세요.")
}

export function togglePasswordIconHandler({ target }) {
  if (!containsClass(target, "password-show")) return
  passwordToggleInputType(target.previousElementSibling)
  passwordToggleIcon(target.children[0])
}
