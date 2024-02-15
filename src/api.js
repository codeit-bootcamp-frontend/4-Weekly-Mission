/*

export function signIn() {
  const answerEmail = 'test@codeit.com';
  const answerPassword = 'sprint101';

  const data = {
    email: answerEmail,
    password: answerPassword
  };

  const inputData = {
    email: myInputEmail.value,
    password: myInputPassword.value
  };

  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((responseData) => {
    console.log('서버 응답 데이터:', responseData);

    // 서버 응답 데이터와 입력된 데이터 비교
    if (data.email === inputData.email && data.password === inputData.password) {
      localStorage.setItem("access-token", responseData.data.accessToken);
      window.location.href = '/folder';
    } else {
      addClassError(errorMessageId, myInputEmail, ErrorMessage.WrongId);
      addClassError(errorMessagePw, myInputPassword, ErrorMessage.WrongPassword);
      console.log('여기서도 실행중');
    }
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });
}

export function apiCheckEmail() {
  const data = {
    email: myInputEmail.value,
  };

  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status === 409) {
       addClassError(errorMessageId, myInputEmail, ErrorMessage.CantUseId);
    }
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });
}

export function registerAccount() {
  const userInfo = {
    email: myInputEmail.value,
    password: myInputPassword.value
  }

  fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((responseData) => {
    console.log('서버 응답 데이터:', responseData);
    
    if (userInfo.email) {
      const accessToken = userInfo.accessToken;
      localStorage.setItem("access-token", accessToken);
      window.location.href = '/folder';
    }
    
  })
}

*/

export async function getUserInfo() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderData() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}