const login = async () => {
  const inputEmail = document.querySelector('.email-input')
  const inputPassword = document.querySelector('.password-input')
  const userInfo = {
    email: inputEmail.value,
    password: inputPassword.value
  }

  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })

  if (response.status === 200) {
    const result = await response.json()
    localStorage.setItem('accessToken', result.data.accessToken)
  }
}

export { login }