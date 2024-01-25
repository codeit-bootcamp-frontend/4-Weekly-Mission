import {formatCheck} from './accountData.js'

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
   const isEmailSection = blurTarget.type == 'email'

   const formatErrorMessage = '올바른 이메일 주소가 아닙니다.'

   // Email Input인 경우의 형식 검사. value가 null인 경우보다 먼저 검사하여 덮어씌우지 않게 함
   if (isEmailSection &&  !formatCheck(condition)) {
      printError(blurTarget, errorMessageSection, formatErrorMessage)
   }

   if (!condition) {
      printError(blurTarget, errorMessageSection, errorMessage)
   }
}

export {inputFocus, inputBlur, printError}