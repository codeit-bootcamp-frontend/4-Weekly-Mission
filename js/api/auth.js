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
  try {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) return false;

    // 서버에서 accessToken을 성공적으로 받아왔다고 가정
    const isValid = await Promise.resolve(true);

    if (!isValid) throw new Error('login error');

    return true;
  } catch (error) {
    console.log('TODO: isLogin error');
    return false;
  }
}
