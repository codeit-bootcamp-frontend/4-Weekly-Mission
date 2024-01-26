import * as DOM from './lib/DOM.js'
import * as input from './lib/inputVerification.js'
import * as action from './lib/action.js'
import * as handleEvent from './lib/eventKey.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX,
  USERS,
  PASSWORD_EYE_ICON,
  PASSWORD_REGEX
} from './constant/signVariable.js'

const signEmailSection = DOM.selectElement('.sign-email')
const signPasswordSection = DOM.selectElement('.sign-password')
const signPasswordCheckSecion = DOM.selectElement('#sign-password-check')
const signEmailInput = DOM.selectElement('#email-input')
const signPasswordInput = DOM.selectElement('#password-input')
const signPasswordCheckInput = DOM.selectElement('#check-password')
DOM.createTagAndclassWithText(signEmailSection, 'email-error', '')
DOM.createTagAndclassWithText(signPasswordSection, 'password-error', '')
DOM.createTagAndclassWithText(signPasswordCheckSecion, 'password-check-error', '')
const emailError = signEmailSection.lastChild
const passwordError = signPasswordSection.lastChild
const passwordCheckError = signPasswordCheckSecion.lastChild
const loginButton = DOM.selectElement('.login-button')
const signUpButton = DOM.selectElement('.signup-button')
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

function handlePasswordFocusout(){
  if(input.isFormatValue(signPasswordInput)){
    showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.empty)
    return
  }
  if(input.isRegexMatch(signPasswordInput, PASSWORD_REGEX)){
    passwordError.classList.add('hidden')
    return
  }
  showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.set)
}

function handlePasswordCheckFocusout(){
  if(input.isPasswordValueMatch(signPasswordInput, signPasswordCheckInput)){
    showErrorMsg(signPasswordCheckInput, passwordCheckError, PASSWORD_ERROR_MESSAGE.agreement)
    return
  }
  passwordCheckError.classList.add('hidden')
}

function handleEmailFocusin(){
  signEmailInput.classList.remove('red-border')
}

function handlePasswordFocusin(){
  signPasswordInput.classList.remove('red-border')
}

function handlePasswordCheckFocusin(){
  signPasswordCheckInput.classList.remove('red-border')
}

function handleLoginButton(){
  signEmailInput.blur()
  signPasswordInput.blur()
  const isUserRegistered = USERS.some(user => input.isValueMatch(signEmailInput, user.id) && input.isValueMatch(signPasswordInput, user.password) )
  if(isUserRegistered) { 
    action.loginAction() 
  }
  showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.validation)
  showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.validation)
}

function handleSineUpButton(){
  if(input.isValueMatch(signEmailInput, USERS[0].id)){
    showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.use)
    return
  }
  action.loginAction() 
}

function handleChangePasswordType(){
  const passwordType = signPasswordInput.type
  const passwordChangeType = passwordType === 'password' ? 'text' : 'password'
  signPasswordInput.type = passwordChangeType
  passwordChangeType === 'password' ? eyeImg.src = PASSWORD_EYE_ICON.passwordType.src : eyeImg.src = PASSWORD_EYE_ICON.textType.src
}

function handlerEnter(){
  handleEvent.enter(()=>{
    loginButton.click()
  })
}

signUpButton.addEventListener('click', handleSineUpButton)
eyeImg.addEventListener('click', handleChangePasswordType)
signEmailInput.addEventListener('focusout',handleEmailFocusout)
signEmailInput.addEventListener('focusin',handleEmailFocusin)
signPasswordInput.addEventListener('focusout', handlePasswordFocusout)
signPasswordInput.addEventListener('focusin', handlePasswordFocusin)
signPasswordCheckInput.addEventListener('focusout', handlePasswordCheckFocusout)
signPasswordCheckInput.addEventListener('focusin', handlePasswordCheckFocusin)
loginButton.addEventListener('click', handleLoginButton)
signEmailInput.addEventListener('keydown', handlerEnter)
signPasswordInput.addEventListener('keydown', handlerEnter)
