import { RegisterForm } from "../components/forms.js"
import { RegisterEmailInput, RegisterPasswordConfirmInput, RegisterPasswordInput } from "../components/inputs.js"

if (localStorage.getItem("user")) {
  location.href = "/folder"
}

const form = document.querySelector(".form")
const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password")
const inputPasswordConfirm = document.querySelector(".input-passwordConfirm")

new RegisterForm(form, [inputEmail, inputPassword, inputPasswordConfirm])
new RegisterEmailInput(inputEmail)
new RegisterPasswordInput(inputPassword)
new RegisterPasswordConfirmInput(inputPasswordConfirm)
