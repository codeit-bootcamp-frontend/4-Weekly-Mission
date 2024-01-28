import * as DOM from './lib/DOM.js'
import { signGlobals } from './signGlobals.js'
import {handleInputFocusin} from './lib/formErrorHandling.js'
import * as signUtils from './utils/signUtils.js'

if (signGlobals.currentPageURL.includes("signup.html")) {
  const signPasswordCheckInput = DOM.selectElement('#check-password')
  DOM.createTagAndclassWithText(signGlobals.signPasswordCheckSecion, 'password-check-error', '')

  signPasswordCheckInput.addEventListener('focusout',signUtils.handlePasswordCheckFocusout)
  signPasswordCheckInput.addEventListener('focusin', () => handleInputFocusin(signPasswordCheckInput));
  signGlobals.signUpButton.addEventListener('click',signUtils.handleSignUpButton )
  signPasswordCheckInput.addEventListener('keyup',signUtils.handleEnter)

}else if(signGlobals.currentPageURL.includes("signin.html")){
  signGlobals.loginButton.addEventListener('click', signUtils.handleLoginButton)
}

signGlobals.eyeImg.addEventListener('click', signUtils.handleChangePasswordType)
signGlobals.signEmailInput.addEventListener('focusout', signUtils.handleEmailFocusout)
signGlobals.signEmailInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signEmailInput));
signGlobals.signEmailInput.addEventListener('keyup',signUtils.handleEnter )
signGlobals.signPasswordInput.addEventListener('keyup',signUtils.handleEnter )
signGlobals.signPasswordInput.addEventListener('focusout', signUtils.handlePasswordFocusout)
signGlobals.signPasswordInput.addEventListener('focusin', () => handleInputFocusin(signGlobals.signPasswordInput));
