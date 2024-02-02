const register = async () => {
  const inputEmail = document.querySelector('.email-input')
  const inputPassword = document.querySelector('.password-input')
  const errorEmailMessage = document.querySelector('.error-email-message')
  const emailCheck = {
    email: inputEmail.value
  }

  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailCheck),
  })

  if (response.status === 200) {
    const userInfo = {
      email: inputEmail.value,
      password: inputPassword.value
    }

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    const result = await response.json()
    localStorage.setItem('accessToken', result.data.accessToken)
    window.location.assign('folder.html')
    return
  }
  inputEmail.classList.add('input-error')
  errorEmailMessage.textContent = '이미 사용 중인 이메일입니다.'
}

export { register }