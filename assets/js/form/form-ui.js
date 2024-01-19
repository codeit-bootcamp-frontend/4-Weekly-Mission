import { addClass, removeClass } from "../utils/classList.js"

export default class UI {
  constructor(inputRootElem) {
    this.inputRootElem = inputRootElem
    this.errorElem = document.createElement("p")
  }

  removeError() {
    this.errorElem.remove()
    removeClass(this.inputRootElem, "invalid")
  }

  printError(errorMessage) {
    this.errorElem.textContent = errorMessage
    this.inputRootElem.appendChild(this.errorElem)
    addClass(this.inputRootElem, "invalid")
  }

  passwordChangeIcon(inputElem) {
    const icon = inputElem.nextElementSibling.children[0]
    const iconSource = icon.src.includes("password-eye-icon")

    icon.src = iconSource ? "./assets/images/icon/eye-on.svg" : "./assets/images/icon/password-eye-icon.svg"
  }
}
