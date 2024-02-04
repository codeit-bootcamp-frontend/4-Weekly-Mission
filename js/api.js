const addAccount = {
  email: "test@codeit.com",
  password: "sprint101",
}

/* 로그인 API */
async function loginAccount() {
  const response = await fetch ('https://bootcamp-api.codeit.kr/docs/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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

/* 회원가입 API */
async function addNewAccount(email, password) {
  const response = await fetch('https://bootcamp-api.codeit.kr/docs/api/check-email', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email.value}),
  });

  if (response.status === 200) {
    const newAccount = {
      email: email.value,
      password: password.value,
    }
    
    const response = await fetch('https://bootcamp-api.codeit.kr/docs/api/sign-up', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAccount),
    });
    const result = await response.json();
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem('accessToken', accessToken);
    window.location.href('folder.html');
  }

}

export {loginAccount, addNewAccount};