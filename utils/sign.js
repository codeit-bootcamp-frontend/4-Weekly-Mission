import * as DOM from './lib/DOM.js'
import * as input from './lib/inputVerification.js'
import * as action from './lib/action.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX,
  USERS,
  PASSWORD_EYE_ICON
} from './constant/signVariable.js'

const signEmailSection = DOM.selectElement('.sign-email')
const signPasswordSection = DOM.selectElement('.sign-password')
const signEmailInput = DOM.selectElement('#email-input')
const signPasswordInput = DOM.selectElement('#password-input')
DOM.createTagAndclassWithText(signEmailSection, 'email-error', '')
DOM.createTagAndclassWithText(signPasswordSection, 'password-error', '')
const emailError = signEmailSection.lastChild
const passwordError = signPasswordSection.lastChild
const loginButton = DOM.selectElement('.login-button')
const eyeImg = DOM.selectElement('.eye-button-icon')

function showErrorMsg(inputElement, textElement, text){
  inputElement.classList.add('red-border')
  textElement?.classList.remove('hidden')
  DOM.changeText(textElement, text)
}

function handleEmailFocusout(){
  if(input.isFormatValue(signEmailInput)){
    showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.empty)
    return
  }
  if(input.isRegexMatch(signEmailInput, EMAIL_REGEX)){
    emailError?.classList.add('hidden')
    return
  }
  showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.invalid)
}

function handleEmailFocusin(){
  signEmailInput.classList.remove('red-border')
}

function handlePasswordFocusout(){
  if(input.isFormatValue(signPasswordInput)){
    showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.empty)
    return
  }
  passwordError.classList.add('hidden')
}

function handlePasswordFocusin(){
  signPasswordInput.classList.remove('red-border')
}

function handleLoginButton(){
  signEmailInput.blur()
  signPasswordInput.blur()
  const isUserRegistered = USERS.some(user => 
      input.isValueMatch(signEmailInput, user.id) && input.isValueMatch(signPasswordInput, user.password)
    )
  if(isUserRegistered) {
    action.loginAction()
  }
  showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.validation)
  showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.validation)
}

function handleChangePasswordType(){
  const passwordType = signPasswordInput.type
  const passwordChangeType = passwordType === 'password' ? 'text' : 'password'
  signPasswordInput.type = passwordChangeType
  passwordChangeType === 'password' ? eyeImg.src = PASSWORD_EYE_ICON.passwordType.src : eyeImg.src = PASSWORD_EYE_ICON.textType.src
}

signEmailInput.addEventListener('focusout',handleEmailFocusout)
signEmailInput.addEventListener('focusin',handleEmailFocusin)
signPasswordInput.addEventListener('focusout', handlePasswordFocusout)
signPasswordInput.addEventListener('focusin', handlePasswordFocusin)
loginButton.addEventListener('click', handleLoginButton)
eyeImg.addEventListener('click', handleChangePasswordType)