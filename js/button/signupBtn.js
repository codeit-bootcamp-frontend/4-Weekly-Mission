import { createErrorMessage } from "../error.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

export async function signup() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (response.ok) {
      return location.href = 'folder.html';
    }
  } catch (error) {
    console.log(`에러메세지 : ${error}`);
  }
}
