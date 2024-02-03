import baseURL from './signBaseURL.js'

export const signIn = async (email, password) => {
  const loginUrl = `${baseURL}/api/sign-in`
  const requestData = {
    email,
    password,
  };

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`${response.status} error!!!!`)
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.data.accessToken);
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}
