import { getUserStorage } from "../auth/index.js"
import { RegisterForm } from "../components/forms.js"
import { RegisterEmailInput, RegisterPasswordConfirmInput, RegisterPasswordInput } from "../components/inputs.js"
import { navigate } from "../utils/navigate.js"

if (getUserStorage) {
  navigate("/folder")
}

const form = document.querySelector(".form")
const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password")
const inputPasswordConfirm = document.querySelector(".input-passwordConfirm")

new RegisterForm(form, [inputEmail, inputPassword, inputPasswordConfirm])
new RegisterEmailInput(inputEmail)
new RegisterPasswordInput(inputPassword)
new RegisterPasswordConfirmInput(inputPasswordConfirm)
