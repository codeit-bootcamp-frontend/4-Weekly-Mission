import * as DOM from './lib/DOM.js'
import * as action from './lib/action.js'
import * as handleEvent from './lib/eventKey.js'
import { signGlobals } from './signGlobals.js'
import {handleInputFocusout, showErrorMsg, handleInputFocusin} from './lib/formErrorHandling.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX,
  USERS,
  PASSWORD_EYE_ICON,
  PASSWORD_REGEX
} from './constant/signVariable.js'

if (signGlobals.currentPageURL.includes("signup.html")) {
  const signPasswordCheckInput = DOM.selectElement('#check-password')
  DOM.createTagAndclassWithText(signGlobals.signPasswordCheckSecion, 'password-check-error', '')
  const passwordCheckError = signGlobals.signPasswordCheckSecion?.lastChild

  function handlePasswordCheckFocusout(){
    handleInputFocusout(signPasswordCheckInput, passwordCheckError, null, PASSWORD_ERROR_MESSAGE);
    if (!input.isPasswordValueMatch(signGlobals.signPasswordInput, signPasswordCheckInput)) {
      showErrorMsg(signPasswordCheckInput, passwordCheckError, PASSWORD_ERROR_MESSAGE.agreement);
    }
  }

  function SignUpButton(){
    signGlobals.signEmailInput.blur()
    signGlobals.signPasswordInput.blur()
    if(input.isValueMatch(signGlobals.signEmailInput, USERS[0].id)){
      showErrorMsg(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_ERROR_MESSAGE.use)
      return
    }
    if (!signGlobals.signEmailInput.value || !signGlobals.signPasswordInput.value || !signPasswordCheckInput.value) {
      alert('모든 입력 필드에 값을 입력하세요.')
      return;
    }
    action.loginAction()
  }

  signPasswordCheckInput.addEventListener('focusout', handlePasswordCheckFocusout)
  signPasswordCheckInput.addEventListener('focusin', () => handleInputFocusin(signPasswordCheckInput));
  signGlobals.signUpButton.addEventListener('click', SignUpButton)
  signPasswordCheckInput.addEventListener('keyup',handlerEnter)

}else if(signGlobals.currentPageURL.includes("signin.html")){
  function LoginButton(){
    signGlobals.signEmailInput.blur()
    signGlobals.signPasswordInput.blur()
    const isUserRegistered = USERS.some(user => input.isValueMatch(signGlobals.signEmailInput, user.id) && input.isValueMatch(signGlobals.signPasswordInput, user.password) )
    if(isUserRegistered) { 
      action.loginAction() 
    }
    showErrorMsg(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_ERROR_MESSAGE.validation)
    showErrorMsg(signGlobals.signPasswordInput, signGlobals.passwordError, PASSWORD_ERROR_MESSAGE.validation)
  }

  signGlobals.loginButton.addEventListener('click', LoginButton)
}

function handleEmailFocusout(){
  handleInputFocusout(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_REGEX, EMAIL_ERROR_MESSAGE);
}

function handlePasswordFocusout(){
  handleInputFocusout(signGlobals.signPasswordInput, signGlobals.passwordError, PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE);
}

function handleChangePasswordType(){
  const passwordType = signGlobals.signPasswordInput.type
  const passwordChangeType = passwordType === 'password' ? 'text' : 'password'
  signGlobals.signPasswordInput.type = passwordChangeType
  passwordChangeType === 'password' ? signGlobals.eyeImg.src = PASSWORD_EYE_ICON.passwordType.src : signGlobals.eyeImg.src = PASSWORD_EYE_ICON.textType.src
}

function handlerEnter(){
  handleEvent.enter(()=>{
    signGlobals.currentPageURL.includes("signup.html") ? signGlobals.signUpButton.click() : signGlobals.loginButton.click()
  })
}

signGlobals.eyeImg.addEventListener('click', handleChangePasswordType)
signGlobals.signEmailInput.addEventListener('focusout',handleEmailFocusout)
signGlobals.signEmailInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signEmailInput));
signGlobals.signEmailInput.addEventListener('keyup',handlerEnter)
signGlobals.signPasswordInput.addEventListener('keyup',handlerEnter)
signGlobals.signPasswordInput.addEventListener('focusout', handlePasswordFocusout)
signGlobals.signPasswordInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signPasswordInput));
