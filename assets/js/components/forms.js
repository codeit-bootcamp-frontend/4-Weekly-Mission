import { Form, formState } from "../core/index.js"
import { showError } from "../utils/ui.js"
import {
  isEmpty,
  isEmailValid,
  isPasswordMatch,
  isPasswordValid,
  isExistingEmail,
  errorMessages,
} from "../utils/validation.js"
import { requestHTTP } from "../utils/http.js"
import { LOGIN, REGISTER } from "../api/index.js"
import { setLocalStorage } from "../utils/localStorage.js"

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

  async response(email, password) {
    try {
      const data = await requestHTTP(LOGIN, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })

      if (data?.error) throw new Error("이메일과 비밀번호를 다시 입력해주세요.")

      return (location.href = "/folder")
    } catch (error) {
      return alert(error.message)
    }
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

    try {
      const data = await requestHTTP(LOGIN, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })

      if (data?.error) throw new Error("이메일과 비밀번호를 확인 해주세요.")

      setLocalStorage("user", data.data.accessToken)

      return (location.href = "/folder")
    } catch (error) {
      return alert(error.message)
    }
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

  emailValidation(value) {
    if (isEmpty(value)) return { result: false, errorType: "empty" }
    if (!isEmailValid(value)) return { result: false, errorType: "notValid" }
    if (isExistingEmail(value)) return { result: false, errorType: "existing" }

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

  async request() {
    try {
      const data = await requestHTTP(REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      console.log(data)

      // return this.success()
    } catch (error) {
      alert(error.message)
    }
  }

  async submitHandler(event) {
    event.preventDefault()
    const { email, password, passwordConfirm } = this.formState.data

    const emailValidationResult = this.emailValidation(email, this.inputEmailElement)
    const passwordValidationResult = this.passwordValidation(password, this.inputPasswordElement)
    const passwordConfirmValidationResult = this.passwordConfirmValidation(
      passwordConfirm,
      this.inputPasswordConfirmElement
    )

    !emailValidationResult.result && this.setEmailErrorMessage(this.inputEmailElement, emailValidationResult.errorType)
    !passwordValidationResult.result &&
      this.setPasswordErrorMessage(this.inputPasswordElement, passwordValidationResult.errorType)
    !passwordConfirmValidationResult.result &&
      this.setPasswordComfirmErrorMessage(this.inputPasswordConfirmElement, passwordConfirmValidationResult.errorType)

    const isFormValid =
      emailValidationResult.result && passwordValidationResult.result && passwordConfirmValidationResult.result

    if (!isFormValid) return alert("이메일이나 비밀번호를 다시 확인해주세요.")

    try {
      const data = await requestHTTP(REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (data?.error) throw new Error("이메일과 비밀번호를 확인 해주세요.")

      return (location.href = "/folder")
    } catch (error) {
      return alert(error.message)
    }
  }
}

export { LoginForm, RegisterForm }
