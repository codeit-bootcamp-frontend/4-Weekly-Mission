const postLoginData = async (email, password) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
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
  } catch (error) {
    console.error('Error: ', error);
  }
};

const checkDuplicateEmail = async email => {
  try {
    const inputEmailData = {
      email: email,
    };

    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
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

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
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
