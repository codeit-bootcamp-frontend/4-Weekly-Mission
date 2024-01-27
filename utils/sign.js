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
DOM.createTagAndclassWithText(signEmailSection, 'email-error', '')
DOM.createTagAndclassWithText(signPasswordSection, 'password-error', '')
const emailError = signEmailSection.lastChild
const passwordError = signPasswordSection.lastChild
const eyeImg = DOM.selectElement('.eye-button-icon')
const loginButton = DOM.selectElement('.login-button')
const signUpButton = DOM.selectElement('.signup-button')
const currentPageURL = window.location.href

if (currentPageURL.includes("signup.html")) {
  const signPasswordCheckInput = DOM.selectElement('#check-password')
  DOM.createTagAndclassWithText(signPasswordCheckSecion, 'password-check-error', '')
  const passwordCheckError = signPasswordCheckSecion?.lastChild

  function handlePasswordCheckFocusout(){
    if(input.isFormatValue(signPasswordCheckInput)){
      showErrorMsg(signPasswordCheckInput, passwordCheckError, PASSWORD_ERROR_MESSAGE.empty)
      return
    }
    if(input.isPasswordValueMatch(signPasswordInput, signPasswordCheckInput)){
      passwordCheckError?.classList.add('hidden')
      return
    }
    showErrorMsg(signPasswordCheckInput, passwordCheckError, PASSWORD_ERROR_MESSAGE.agreement)
  }

  function handleSignUpButton(){
    signEmailInput.blur()
    signPasswordInput.blur()
    if(input.isValueMatch(signEmailInput, USERS[0].id)){
      showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.use)
      return
    }
    if (!signEmailInput.value || !signPasswordInput.value || !signPasswordCheckInput.value) {
      alert('모든 입력 필드에 값을 입력하세요.')
      return;
    }
    action.loginAction()
  }

  signPasswordCheckInput.addEventListener('focusout', handlePasswordCheckFocusout)
  signPasswordCheckInput.addEventListener('focusin', () => handleInputFocusin(signPasswordCheckInput));
  signUpButton.addEventListener('click', handleSignUpButton)

}else if(currentPageURL.includes("signin.html")){
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

  loginButton.addEventListener('click', handleLoginButton)
}

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

function handleInputFocusin(inputElement) {
  inputElement.classList.remove('red-border');
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

eyeImg.addEventListener('click', handleChangePasswordType)
signEmailInput.addEventListener('focusout',handleEmailFocusout)
signEmailInput.addEventListener('focusin', () => handleInputFocusin(signEmailInput));
signEmailInput.addEventListener('keyup',handlerEnter)
signPasswordInput.addEventListener('keyup',handlerEnter)
signPasswordInput.addEventListener('focusout', handlePasswordFocusout)
signPasswordInput.addEventListener('focusin', () => handleInputFocusin(signPasswordInput));
