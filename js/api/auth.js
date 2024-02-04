import API from './api.js';

export async function checkDuplicateEmail(email) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    };

    const response = await fetch(API.getCheckEmailURl(), options);

    if (!response.ok) {
      throw new Error(`TODO: ${response.status} error handling.`);
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function isLogin() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return false;

  return true;
}
