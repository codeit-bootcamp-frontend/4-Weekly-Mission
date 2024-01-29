// passwordToggle(show and hide)
const passwordToggle = (e) => {
  const encryptClass = 'off-eye-btn'

  if (e.target.classList.contains(encryptClass)) {
    e.target.classList.remove(encryptClass)
    e.target.previousElementSibling.setAttribute('type', 'password')
    return
  }

  e.target.classList.add(encryptClass)
  e.target.previousElementSibling.setAttribute('type', 'text')
}

export { passwordToggle }