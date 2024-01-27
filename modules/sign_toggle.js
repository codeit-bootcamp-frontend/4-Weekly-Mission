const eye = document.querySelector('.eye')

//눈사진toggle
function eye_toggle(e) {
  const IS_EYE_ON = e.target.getAttribute('src')=="../images/eye-off.svg"
  e.target.setAttribute('src', IS_EYE_ON ? '../images/eye-on.svg' : '../images/eye-off.svg')
  pwInput.setAttribute('type', IS_EYE_ON ? "" : 'password')
}

export { eye, eye_toggle }