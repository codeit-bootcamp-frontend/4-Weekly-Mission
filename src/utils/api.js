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

export { postLoginData };
