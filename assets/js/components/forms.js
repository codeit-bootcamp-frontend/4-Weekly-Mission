import { Form, formState } from "../core/index.js"
import { TEST_USER } from "../auth/index.js"
import { showError } from "../utils/ui.js"
import { isEmpty, isEmailValid, isPasswordMatch, isPasswordValid, isExistingEmail } from "../utils/validation.js"

class LoginForm extends Form {
  emailValidation(value, emailInput) {
    const inputRootElement = document.querySelector(`.input-layout-${emailInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")

    if (isEmpty(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "이메일을 입력해주세요.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    if (!isEmailValid(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "이메일 형식이 유효하지 않습니다.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    return true
  }

  passwordValidation(value, passwordInput) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")

    if (isEmpty(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "비밀번호를 입력해주세요.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    return true
  }

  compare(existingUser, formData) {
    return existingUser.email === formData.email && existingUser.password === formData.password
  }

  success() {
    return (location.href = "/folder")
  }

  submitHandler(event) {
    event.preventDefault()
    const { email, password } = this.formState.data

    this.setFormData()

    const emailIsValid = this.emailValidation(email, this.inputEmailElement)
    const passwordIsValid = this.passwordValidation(password, this.inputPasswordElement)

    const formIsValid = emailIsValid && passwordIsValid

    if (formIsValid)
      return this.compare(TEST_USER, { email, password })
        ? this.success()
        : alert("이메일이나 비밀번호가 맞지 않습니다.")
  }
}

class RegisterForm extends Form {
  emailValidation(value, emailInput) {
    const inputRootElement = document.querySelector(`.input-layout-${emailInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")

    if (isEmpty(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "이메일을 입력해주세요.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    if (!isEmailValid(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "이메일 형식이 유효하지 않습니다.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    if (isExistingEmail(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "이미 사용 중인 이메일입니다.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    return true
  }

  passwordValidation(value, passwordInput) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")

    if (isEmpty(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "비밀번호를 입력해주세요.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    if (!isPasswordValid(value)) {
      showError({ ...this.update, errorMessage: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." })
      return false
    }

    return true
  }

  passwordConfirmValidation(value, passwordConfirmInput) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordConfirmInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")

    if (isEmpty(value)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "비밀번호를 입력해주세요.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    if (!isPasswordMatch(value, formState.data.password)) {
      showError({
        inputRootElement,
        errorElement,
        errorMessage: "비밀번호가 일치하지 않습니다.",
        className: this.ERROR_CLASS_NAME,
      })
      return false
    }

    return true
  }

  success() {
    location.href = "/folder"
  }

  submitHandler(event) {
    event.preventDefault()
    const { email, password, passwordConfirm } = this.formState.data

    const emailIsValid = this.emailValidation(email, this.inputEmailElement)
    const passwordIsValid = this.passwordValidation(password, this.inputPasswordElement)
    const passwordConfirmIsValid = this.passwordConfirmValidation(passwordConfirm, this.inputPasswordConfirmElement)

    const formIsValid = emailIsValid && passwordIsValid && passwordConfirmIsValid

    if (formIsValid) this.success()
  }
}

export { LoginForm, RegisterForm }
