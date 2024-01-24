import Form from "./form.js"

const formElement = document.querySelector(".form")
const inputEmail = document.querySelector(".input-email")
const inputPassword = document.querySelector(".input-password")

new Form(formElement, [inputEmail, inputPassword])

/**
 * ! Form
 * ! Valaidation
 * ! UI
 * ! FormInput
 * ! formState
 */
