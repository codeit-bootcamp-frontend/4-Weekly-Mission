import formState from "../core/index.js"
import { emptyTypeMessage } from "../utils/validation.js"
import FormInput from "./form-input.js"
import UI from "./form-ui.js"

export default class Form extends UI {
  constructor(formElement, inputs) {
    super()

    this.formElement = formElement
    this.inputs = inputs
    this.errorElement = {}

    this.setErrorElements()
    this.setInstances()
    this.attach()
  }

  setInstances() {
    this.inputs.forEach((input, index) => {
      this[`${input.name}Instance`] = new FormInput(input.name, input, this.errorElement[input.name])
    })
  }

  setErrorElements() {
    for (const value of this.inputs) {
      const createElement = document.createElement("p")
      this.errorElement[value.name] = createElement
    }
  }

  validation({ email, password }) {
    const { isValid: emailIsValid, type: emailType } = this.emailInstance
    const { isValid: passwordIsValid, type: passwordType } = this.passwordInstance

    let result = true

    // ! 이메일만 입력했을 경우.
    if (!emailIsValid.result) {
      this.showError(emailType, emailIsValid.message)
    }

    // ! 이메일이 공백이라면.
    if (!emailIsValid.message) {
      this.showError(emailType, emptyTypeMessage(emailType))
    }

    // ! 패스워드에 메세지가 없는경우
    if (!passwordIsValid.message) {
      this.showError(passwordType, emptyTypeMessage(passwordType))
    }

    // ! 이메일과 비밀번호를 바로 입력안하고 작성할 때.
    if (!emailIsValid.message && !passwordIsValid.message) {
      this.inputs.forEach(({ name }, i) => this.showError(name, emptyTypeMessage(name)))
    }

    // ! 이메일과 비밀번호 유효성에 하나라도 실패하면 false
    if (!emailIsValid.result || !passwordIsValid.result) {
      result = false
    }

    return { email, password, result }
  }

  submitHandler(event) {
    event.preventDefault()

    const { email, password, result } = this.validation(formState.getState)

    if (!result) {
      return alert("이메일이나 비밀번호를 올바르게 입력해주세요.")
    }

    email === "test@codeit.com" && password === "codeit101"
      ? (location.href = "/folder")
      : alert("이메일이나 비밀번호가 일치하지 않습니다.")
  }

  attach() {
    this.formElement.addEventListener("submit", this.submitHandler.bind(this))
  }
}
