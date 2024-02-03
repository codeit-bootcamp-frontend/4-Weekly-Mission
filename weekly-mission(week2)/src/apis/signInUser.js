// 로그인 관련 통신 함수들 모음

const signIn = async (inputAccount) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputAccount)
  });

  if (response.status === 200) {
    const result = await response.json();
    localStorage.setItem("accessToken", result.data.accessToken);
    window.location.href = './folder.html';
    return true;
  }

  return false;
}

export default signIn;
