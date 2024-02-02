import * as DOM from './lib/DOM.js'
import { signGlobals } from './signGlobals.js'
import {handleInputFocusin} from './lib/formErrorHandling.js'
import * as signUtils from './utils/signUtils.js'

if (signGlobals.currentPageURL.includes("signup.html")) {
  DOM.createTagAndclassWithText(signGlobals.signPasswordCheckSecion, 'password-check-error', '')

  signGlobals.signPasswordCheckInput.addEventListener('focusout',signUtils.handlePasswordCheckFocusout)
  signGlobals.signPasswordCheckInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signPasswordCheckInput))
  signGlobals.signUpButton.addEventListener('click',signUtils.handleSignUpButton )
  signGlobals.signPasswordCheckInput.addEventListener('keyup',signUtils.handleEnter)

}else if(signGlobals.currentPageURL.includes("signin.html")){
  signGlobals.loginButton.addEventListener('click', signUtils.handleLoginButton)
}

signGlobals.eyeImg.addEventListener('click', signUtils.handleChangePasswordType)
signGlobals.signEmailInput.addEventListener('focusout', signUtils.handleEmailFocusout)
signGlobals.signEmailInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signEmailInput))
signGlobals.signEmailInput.addEventListener('keyup',signUtils.handleEnter )
signGlobals.signPasswordInput.addEventListener('keyup',signUtils.handleEnter )
signGlobals.signPasswordInput.addEventListener('focusout', signUtils.handlePasswordFocusout)
signGlobals.signPasswordInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signPasswordInput))
