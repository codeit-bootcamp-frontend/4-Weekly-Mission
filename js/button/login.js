import { createErrorMessage } from "../error.js";
import { saveAccessToken } from '../accessToken.js'

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

async function login() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      saveAccessToken(data.data.accessToken);
      return location.href = 'folder.html';
    } else {
      createErrorMessage(emailInput, "이메일을 확인해주세요.")
      createErrorMessage(passwordInput, "비밀번호를 확인해주세요.")
    }

  } catch (error) {
    console.log(`에러메세지:${error}`)
  }
}

export { login }