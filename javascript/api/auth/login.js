import { accountInfo } from "../../account.js"

const login = async () => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountInfo[0]),
  })

  if (response.status === 200) {
    const result = await response.json()
    localStorage.setItem('accessToken', result.data.accessToken)
    window.location.assign('folder.html')
  }
}

export { login }