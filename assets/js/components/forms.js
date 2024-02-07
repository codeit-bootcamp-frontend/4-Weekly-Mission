import { Form, formState } from "../core/index.js"
import { isEmpty, isEmailValid, isPasswordMatch, isPasswordValid } from "../utils/validation.js"
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

  compare(existingUser, formData) {
    return existingUser.email === formData.email && existingUser.password === formData.password
  }

  async submitHandler(event) {
    event.preventDefault()
    const { email, password } = this.formState.data

    this.setFormData()

    const emailValidationResult = this.emailValidation(email)
    const passwordValidationResult = this.passwordValidation(password)

    !emailValidationResult.result && this.setErrorMessage(this.inputEmailElement, emailValidationResult.errorType)
    !passwordValidationResult.result &&
      this.setErrorMessage(this.inputPasswordElement, passwordValidationResult.errorType)

    const isFormValid = emailValidationResult.result && passwordValidationResult.result

    if (!isFormValid) return alert("이메일이나 비밀번호가 맞지 않습니다.")

    const { data } = await authService.login(email, password)

    setUserStorageWithExpireTime("token", data, 30)
    location.href = "/folder"
  }
}

class RegisterForm extends Form {
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

    !emailResult && this.setErrorMessage(this.inputEmailElement, emailError)
    !passwordResult && this.setErrorMessage(this.inputPasswordElement, passwordError)
    !passwordConfirmResult && this.setErrorMessage(this.inputPasswordConfirmElement, passwordConfirmError)

    const isFormValid = emailResult && passwordResult && passwordConfirmResult

    if (!isFormValid) return alert("이메일이나 비밀번호를 다시 확인해주세요.")

    const { data } = await authService.register(email, password)

    setUserStorageWithExpireTime("token", data, 30)
    location.href = "/folder"
  }
}

export { LoginForm, RegisterForm }
