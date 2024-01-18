export default class Validation {
  isNotEmptyValid(value) {
    return value.trim().length !== 0
  }

  isEmailValid(value) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
    return pattern.test(value)
  }

  isValid(type, value) {
    if (!this.isNotEmptyValid(value)) {
      const message = type === "email" ? "이메일을 입력해주세요." : "패스워드를 입력해주세요."
      return { message, result: false }
    }

    if (type === "email" && !this.isEmailValid(value)) {
      return { message: "올바른 이메일 주소가 아닙니다.", result: false }
    }

    return { message: "Validation passed", result: true }
  }
}
