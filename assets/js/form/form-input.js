import FormValidation from "./form-validation.js"

// export default class FormInput extends FormValidation {
//   constructor(type, inputElem) {
//     super(type)
//     this.inputElem = inputElem
//     this.attach()
//   }

//   eventHandler(event) {
//     this.renderElem(event.target.value)
//   }

//   showPassword() {}

//   attach() {
//     this.inputElem.addEventListener("focusout", this.eventHandler.bind(this))
//     // this.type === 'password' &&
//   }
// }

import Validation from "./validation.js"

export default class FormInput extends Validation {
  constructor(type, inputElem) {
    super(type, inputElem)
  }
}
