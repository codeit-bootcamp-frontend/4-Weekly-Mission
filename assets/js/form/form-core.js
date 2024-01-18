export default class Component {
  constructor(type, inputElem) {
    this.type = type
    this.inputElem = inputElem

    this.setEvent()
  }

  setEvent() {
    this.inputElem.addEventListener("focusout", this.eventHandler.bind(this))
    this.type === "password" &&
      this.inputElem.nextElementSibling.addEventListener("click", this.showPassword.bind(this))
  }
}
