import {mailFormat} from './accountData.js'

const printError = function (erroredInput, messageSection, message) {
   erroredInput.classList.add('signError')
   messageSection.textContent = message
}

// Focus
const inputFocus = function (event) {
   event.target.classList.remove('signError')
   event.target.parentElement.parentElement.lastElementChild.textContent = ''
}

// Blur - 별다른 조건이 없을 경우, input의 값 유무
const inputBlur = function (blurTarget, errorMessage, condition = blurTarget.value) {
   const errorMessageSection = blurTarget.parentElement.parentElement.lastElementChild

   if (!condition) {
      printError(blurTarget, errorMessageSection, errorMessage)
   }
}

export {inputFocus, inputBlur, printError}