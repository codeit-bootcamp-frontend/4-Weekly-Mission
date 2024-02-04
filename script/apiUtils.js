const apiUrl = 'https://bootcamp-api.codeit.kr/api';

const postRequest = (endpoint, data) => {
  return fetch (`${apiUrl}${endpoint}`, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data),
  });
};

export const postData = async (endpoint, data) => {
  try {
    const response = await postRequest(endpoint, data);
    const responseData = await response.json();
    if(responseData.success) {
      window.location.href = '../folder.html'
      return;
    }
    console.error("Login Failure")
  }catch (error){
    console.error('Error : Network Connection Failure', error);
  }
}

/**
 * 
 * @param {*} api뒤에 들어갈 이메일 중복 확인을 위한 위치
 * @param {*} data 
 * @returns 
 */
export const checkEmailData = async (endpoint, data) => {
  try {
    const response = await postRequest(endpoint, data);
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