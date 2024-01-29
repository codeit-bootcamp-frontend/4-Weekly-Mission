const togglePassword = document.querySelectorAll('.eye-btn')

// passwordToggle(show and hide)
const passwordToggle = (e) => {
  if (e.target.classList.contains('off-eye-btn')) {
    e.target.classList.remove('off-eye-btn')
    e.target.previousElementSibling.setAttribute('type', 'password')
  }
  else {
    e.target.classList.add('off-eye-btn')
    e.target.previousElementSibling.setAttribute('type', 'text')
  }
}

for (let i = 0; i < togglePassword.length; i++) {
  togglePassword[i].addEventListener('click', passwordToggle)
}

export { passwordToggle }