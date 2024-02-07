import { addClass, removeClass } from "./classList.js"

/**
 * @param {{ errorElement: HTMLParagraphElement, inputRootElement: HTMLDivElement, errorMessage: string, className: string }} update
 */
export const removeError = (update) => {
  update.errorElement.textContent = update.errorMessage
  removeClass(update.inputRootElement, update.className)
}

/**
 * @param {{ errorElement: HTMLParagraphElement, inputRootElement: HTMLDivElement, errorMessage: string, className: string }} update
 */
export const showError = (update) => {
  update.errorElement.textContent = update.errorMessage
  addClass(update.inputRootElement, update.className)
}
