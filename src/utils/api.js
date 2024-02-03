import CODEIT_API_URL from '../constant/url.js';

const { CODEIT_API_SIGN_IN, CODEIT_API_SIGN_UP, CODEIT_API_CHECK_EMAIL } = CODEIT_API_URL;

const postLoginData = async (email, password) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const response = await fetch(CODEIT_API_SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const {
      data: { accessToken },
    } = await response.json();

    localStorage.setItem('accessToken', accessToken);

    return true;
  } catch (error) {
    console.error('Error: ', error);
    return false;
  }
};

const checkDuplicateEmail = async email => {
  try {
    const inputEmailData = {
      email: email,
    };

    const response = await fetch(CODEIT_API_CHECK_EMAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputEmailData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error: ', error);
    return false;
  }
};

const postRegisterData = async (email, password) => {
  try {
    const registerData = {
      email: email,
      password: password,
    };

    const response = await fetch(CODEIT_API_SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const {
      data: { accessToken },
    } = await response.json();

    localStorage.setItem('accessToken', accessToken);

    return true;
  } catch (error) {
    console.error('Error: ', error);
    return false;
  }
};

export { postLoginData, checkDuplicateEmail, postRegisterData };
