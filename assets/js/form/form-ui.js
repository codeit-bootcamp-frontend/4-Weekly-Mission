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

  passwordChangeIcon(inputElem) {
    const icon = inputElem.nextElementSibling.children[0]
    const iconSource = icon.src.includes("password-eye-icon")

    icon.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }
}
