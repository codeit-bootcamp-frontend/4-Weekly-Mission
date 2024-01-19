import { addClass, removeClass } from "../utils/classList.js"

export default class UI {
  clear(element) {
    return element ? element.remove() : null
  }

  removeError(errorElem, inputLayoutElem) {
    errorElem.remove()
    removeClass(inputLayoutElem, "invalid")
  }

  showError(errorElem, inputLayoutElem, errorMessage) {
    errorElem.textContent = errorMessage
    inputLayoutElem.appendChild(errorElem)
    addClass(inputLayoutElem, "invalid")
  }

  showErrorWrapper(type, errorMessage) {
    this.showError(this.errorElement[type], document.querySelector(`.input-layout-${type}`), errorMessage)
  }

  passwordChangeIcon(inputElem) {
    const icon = inputElem.nextElementSibling.children[0]
    const iconSource = icon.src.includes("password-eye-icon")

    icon.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }
}
