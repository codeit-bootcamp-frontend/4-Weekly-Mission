import { getUserStorage } from "../auth/index.js"
import { LoginForm } from "../components/forms.js"
import { LoginEmailInput, LoginPasswordInput } from "../components/inputs.js"
import { navigate } from "../utils/navigate.js"

if (getUserStorage) {
  navigate("/folder")
}

const form = document.querySelector(".form")
const emailInput = document.querySelector(".input-email")
const passwordInput = document.querySelector(".input-password")

new LoginForm(form, [emailInput, passwordInput])
new LoginEmailInput(emailInput)
new LoginPasswordInput(passwordInput)
