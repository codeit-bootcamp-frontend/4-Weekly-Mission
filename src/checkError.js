const EMAIL_REG = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
const PASSWORD_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

export function putError(ele, msg) {
  ele.errorMessage.textContent = msg
  ele.input.classList.add('inputError')
}

export function removeError(ele) {
  ele.errorMessage.textContent = ""
  ele.input.classList.remove('inputError')
}

export function emailValid(email) {
  return EMAIL_REG.test(email)
}

export function passwordValid(password) {
  return PASSWORD_REG.test(password)
}

export function togglePW(input, toggleBtn) {
  const IS_EYE_ON = toggleBtn.getAttribute('src')=="../images/eye-off.svg"
  toggleBtn.setAttribute('src', IS_EYE_ON ? '../images/eye-on.svg' : '../images/eye-off.svg')
  input.setAttribute('type', IS_EYE_ON ? "" : 'password')
}