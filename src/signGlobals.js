import * as DOM from './lib/DOM.js'

export const signGlobals = (function() {
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
  const signPasswordCheckInput = DOM.selectElement('#check-password')
  const currentPageURL = window.location.href

  return {
    signEmailSection,
    signPasswordSection,
    signPasswordCheckSecion,
    signEmailInput,
    signPasswordInput,
    emailError,
    passwordError,
    eyeImg,
    loginButton,
    signUpButton,
    signPasswordCheckInput,
    currentPageURL
  }
})()