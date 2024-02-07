import { addClass, removeClass } from "./classList.js"

export const removeError = (update) => {
  update.errorElement.textContent = update.errorMessage
  removeClass(update.inputRootElement, update.className)
}

export const showError = (update) => {
  update.errorElement.textContent = update.errorMessage
  addClass(update.inputRootElement, update.className)
}
