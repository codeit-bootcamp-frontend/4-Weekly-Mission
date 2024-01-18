import { containsClass } from "../utils/classList.js"
import Component from "./form-core.js"
import UI from "./form-ui.js"
import Validation from "./form-validation.js"

export default class FormInput extends Component {
  constructor(type, inputElem) {
    super(type, inputElem)
    this.validation = new Validation()
    this.ui = new UI(document.querySelector(`.input-layout-${type}`))
  }

  passwordChangeIcon() {
    const icon = this.inputElem.nextElementSibling.children[0]
    icon.src = "./assets/images/icon/password-eye-on.svg"
  }

  showPassword({ target }) {
    if (!containsClass(target, "password-show")) return
    const inputChangeType = this.inputElem.type === "text" ? "password" : "text"
    this.inputElem.type = inputChangeType

    this.ui.passwordChangeIcon(this.inputElem)
  }

  eventHandler(event) {
    const value = event.target.value
    const { message, result } = this.validation.isValid(this.type, value)

    result ? this.ui.removeError() : this.ui.printError(message)
  }
}
