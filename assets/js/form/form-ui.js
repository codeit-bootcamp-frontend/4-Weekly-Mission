import { addClass, removeClass } from "../utils/classList.js"

export default class UI {
  removeError(type) {
    const inputLayoutElem = document.querySelector(`.input-layout-${type}`)
    this.errorElement.remove()
    removeClass(inputLayoutElem, "invalid")
  }

  showError(type, errorMessage) {
    const errorElement = this.errorElement[type] || this.errorElement
    const inputLayoutElem = document.querySelector(`.input-layout-${type}`)

    errorElement.textContent = errorMessage
    inputLayoutElem.appendChild(errorElement)
    addClass(inputLayoutElem, "invalid")
  }

  passwordToggleIcon(icon) {
    const isEyeOffIcon = icon.src.includes("password-eye-icon")
    icon.src = isEyeOffIcon ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }

  passwordToggleInputType(passwordInput) {
    return (passwordInput.type = passwordInput.type === "text" ? "password" : "text")
  }
}
