import formState from "../core/index.js"
import { emptyMessage, isEmailValid, isEmpty } from "../utils/validation.js"
import FormInput from "./form-input.js"
import UI from "./form-ui.js"

const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
}

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
    this.inputs.forEach((input) => {
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
    let result = false

    // ! 이메일만 입력했을 경우.
    if (!isEmpty(email.value) && !isEmailValid(email.value)) {
      this.showError(email.type, email.message)
    }

    // ! 이메일이 공백이라면.
    if (isEmpty(email.value)) {
      this.showError(email.type, emptyMessage(email.type))
    }

    // ! 패스워드에 메세지가 없는경우
    if (isEmpty(password.value)) {
      this.showError(password.type, emptyMessage(password.type))
    }

    // ! 이메일과 비밀번호를 바로 입력안하고 로그인할 때.
    if (isEmpty(email.value) && isEmpty(password.value)) {
      this.inputs.forEach(({ name }) => this.showError(name, emptyMessage(name)))
    }

    if (email.result && password.result) {
      result = true
    }

    return { email, password, result }
  }

  successLogin(email, password) {
    return email === TEST_USER.email && password === TEST_USER.password
  }

  submitHandler(event) {
    event.preventDefault()
    const { email, password, result } = this.validation(formState.getState)

    if (!result) {
      return alert("이메일이나 비밀번호가 유효하지 않습니다.")
    }

    this.successLogin(email.value, password.value)
      ? (location.href = "/folder")
      : alert("이메일이나 비밀번호가 일치하지 않습니다.")
  }

  attach() {
    this.formElement.addEventListener("submit", this.submitHandler.bind(this))
  }
}
