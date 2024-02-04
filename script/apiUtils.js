const apiUrl = 'https://bootcamp-api.codeit.kr/api';

export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data),
    });
    const responseData = await response.json();

    if(responseData.success) {
      window.location.href = '../folder.html'
      return;
    }
    console.error("Login Failure")
  }
  catch (error){
    console.error('Error : Network Connection Failure', error);
  }
}