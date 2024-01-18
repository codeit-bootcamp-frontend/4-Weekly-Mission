import { addClass, containsClass, removeClass } from "../utils/classList.js"

/**
 * ! 타입
 * ! 값 입력 안되었을 때 에러 메세지
 * ! 이메일 형식에 맞지 않으면 에러 메세지
 */

export default class FormValidation {
  constructor(type) {
    this.type = type
    this.errorElem
    this.inputRootElem = document.querySelector(`.input-layout-${this.type}`)
  }

  emailValidation(value) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
    return pattern.test(value)
  }

  // ! type이 이메일, 패스워드라면 비어있는지 확인
  // ! type이 이메일인 경우 이메일 유효성도 검사.

  renderElem(value) {
    return value.trim().length !== 0
      ? this.removeErrorElem(value)
      : this.printErrorElem()
  }

  printErrorElem() {
    addClass(this.inputRootElem, "invalid")
    this.errorElem = this.errorElem || document.createElement("p")
    this.errorElem.textContent = this.errorMessage(this.type)
    this.inputRootElem.appendChild(this.errorElem)
  }

  removeErrorElem(value) {
    if (this.type === "email" && !this.emailValidation(value)) {
      addClass(this.inputRootElem, "invalid")
      this.errorElem = this.errorElem || document.createElement("p")
      this.errorElem.textContent = "올바른 이메일 주소가 아닙니다."
      this.inputRootElem.appendChild(this.errorElem)
    } else {
      removeClass(this.inputRootElem, "invalid")
      this.errorElem && this.errorElem.remove()
    }
  }

  errorMessage(type) {
    return type === "email"
      ? "이메일을 입력해주세요."
      : "패스워드를 입력해주세요."
  }
}
