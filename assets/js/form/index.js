import FormInput from "./form-input.js"

const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password")

new FormInput("email", inputEmail)
new FormInput("password", inputPassword)
