const addAccount = {
  email: "test@codeit.com",
  password: "sprint101",
}

/* 로그인 API */
async function loginAccount() {
  const response = await fetch ('https://bootcamp-api.codeit.kr/docs/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(addAccount),
  });
  const result = await response.json();
  
  if (response.status === 200) {
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem('accessToken', accessToken);
    window.location.href('folder.html');
  }
}

export {loginAccount};