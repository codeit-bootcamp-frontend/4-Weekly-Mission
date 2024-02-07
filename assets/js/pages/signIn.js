import { LoginForm } from "../components/forms.js"
import { LoginEmailInput, LoginPasswordInput } from "../components/inputs.js"
import { getUserStorageWithExpireTime } from "../service/localStorage.js"

if (getUserStorageWithExpireTime("token")) {
  location.href = "/folder"
}

const form = document.querySelector(".form")
const emailInput = document.querySelector(".input-email")
const passwordInput = document.querySelector(".input-password")

new LoginForm(form, [emailInput, passwordInput])
new LoginEmailInput(emailInput)
new LoginPasswordInput(passwordInput)
