// 회원가입 관련 통신 함수들 모음

const isDuplicateEmail = async (email) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  if (response.status === 409) return true;

  return false;
}

const signUp = async (inputAccount) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputAccount),
  })

  if(response.status === 200) {
    const result = await response.json();
    localStorage.setItem('accessToken', result.data.accessToken);
    window.location.href = './folder.html';
  }
}

export { isDuplicateEmail, signUp };
