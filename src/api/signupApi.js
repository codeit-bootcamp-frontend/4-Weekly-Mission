import baseURL from './signBaseURL.js'

export const checkEmail = async (email) => {
  console.log(email)
  const checkEmailUrl = `${baseURL}/api/check-email`
  const requestData = {
    email,
  };

  try {
    const response = await fetch(checkEmailUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    if (data.isDuplicated) {
      throw new Error('현재 이메일은 중복된 아메일 입니다');
    }
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const signUp = async (email, password) => {
  const signUpUrl = `${baseURL}/api/sign-up`;

  const emailCheckResult = await checkEmail(email); 

  const requestData = {
    email,
    password,
  };

  try {
    const response = await fetch(signUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`${response.status} error!!!!`);
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.data.accessToken);
    console.log()

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};