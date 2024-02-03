import { Form, formState } from "../core/index.js"
import { showError } from "../utils/ui.js"
import { isEmpty, isEmailValid, isPasswordMatch, isPasswordValid, errorMessages } from "../utils/validation.js"
import authService from "../service/index.js"
import { setUserStorageWithExpireTime } from "../service/localStorage.js"

class LoginForm extends Form {
  emailValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }

    return { result: true, errorType: "" }
  }

  passwordValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }

    return { result: true, errorType: "" }
  }

  setEmailErrorMessage(emailInput, errorType) {
    const inputRootElement = document.querySelector(`.input-layout-${emailInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")
    const errorMessage = errorMessages.email[errorType]

    return showError({
      inputRootElement,
      errorElement,
      errorMessage: errorMessage,
      className: this.ERROR_CLASS_NAME,
    })
  }

  setPasswordErrorMessage(passwordInput, errorType) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")
    const errorMessage = errorMessages.password[errorType]

    return showError({
      inputRootElement,
      errorElement,
      errorMessage: errorMessage,
      className: this.ERROR_CLASS_NAME,
    })
  }

  compare(existingUser, formData) {
    return existingUser.email === formData.email && existingUser.password === formData.password
  }

  async submitHandler(event) {
    event.preventDefault()
    const { email, password } = this.formState.data

    this.setFormData()

    const emailValidationResult = this.emailValidation(email)
    const passwordValidationResult = this.passwordValidation(password)

    !emailValidationResult.result && this.setEmailErrorMessage(this.inputEmailElement, emailValidationResult.errorType)
    !passwordValidationResult.result &&
      this.setPasswordErrorMessage(this.inputPasswordElement, passwordValidationResult.errorType)

    const isFormValid = emailValidationResult.result && passwordValidationResult.result

    if (!isFormValid) return alert("이메일이나 비밀번호가 맞지 않습니다.")

    const { data } = await authService.login(email, password)

    setUserStorageWithExpireTime("token", data, 30)
    location.href = "/folder"
  }
}

class RegisterForm extends Form {
  setEmailErrorMessage(emailInput, errorType) {
    const inputRootElement = document.querySelector(`.input-layout-${emailInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")
    const errorMessage = errorMessages.email[errorType]

    return showError({
      inputRootElement,
      errorElement,
      errorMessage: errorMessage,
      className: this.ERROR_CLASS_NAME,
    })
  }

  setPasswordErrorMessage(passwordInput, errorType) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")
    const errorMessage = errorMessages.password[errorType]

    return showError({
      inputRootElement,
      errorElement,
      errorMessage: errorMessage,
      className: this.ERROR_CLASS_NAME,
    })
  }

  setPasswordComfirmErrorMessage(passwordConfirmInput, errorType) {
    const inputRootElement = document.querySelector(`.input-layout-${passwordConfirmInput.name}`)
    const errorElement = inputRootElement.querySelector(".input-error")
    const errorMessage = errorMessages.passwordConfirm[errorType]

    return showError({
      inputRootElement,
      errorElement,
      errorMessage: errorMessage,
      className: this.ERROR_CLASS_NAME,
    })
  }

  async emailValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }
    if (await authService.isExistingEmail(value)) return { result: false, errorType: "existing" }

    return { result: true, errorType: null }
  }

  passwordValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isPasswordValid(value)) return { result: false, errorType: "notValid" }

    return { result: true, errorType: null }
  }

  passwordConfirmValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isPasswordMatch(value, formState.data.password)) return { result: false, errorType: "notMatch" }

    return { result: true, errorType: null }
  }

  async submitHandler(event) {
    event.preventDefault()
    const { email, password, passwordConfirm } = this.formState.data

    const { result: emailResult, errorType: emailError } = await this.emailValidation(email, this.inputEmailElement)
    const { result: passwordResult, errorType: passwordError } = this.passwordValidation(
      password,
      this.inputPasswordElement
    )
    const { result: passwordConfirmResult, errorType: passwordConfirmError } = this.passwordConfirmValidation(
      passwordConfirm,
      this.inputPasswordConfirmElement
    )

    !emailResult && this.setEmailErrorMessage(this.inputEmailElement, emailError)
    !passwordResult && this.setPasswordErrorMessage(this.inputPasswordElement, passwordError)
    !passwordConfirmResult &&
      this.setPasswordComfirmErrorMessage(this.inputPasswordConfirmElement, passwordConfirmError)

    const isFormValid = emailResult && passwordResult && passwordConfirmResult

    if (!isFormValid) return alert("이메일이나 비밀번호를 다시 확인해주세요.")

    const { data } = await authService.register(email, password)

    setUserStorageWithExpireTime("token", data, 30)
    location.href = "/folder"
  }
}

export { LoginForm, RegisterForm }
