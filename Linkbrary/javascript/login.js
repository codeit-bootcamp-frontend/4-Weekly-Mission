// 로그인 시도
async function LoginTry(event) {
  event.preventDefault();
  // 로그인 성공(api활용)
  const isSuccess = await POST_API('https://bootcamp-api.codeit.kr/api/sign-in', {
    "email": ID_INPUT.value,
    "password": PW_INPUT[0].value
  })
  if(isSuccess['data']){ // api를 이용해서 성공여부 확인
    window.location.href = "./folder.html";
    localStorage.setItem('accessToken',  isSuccess['data']['accessToken']); // setItem(키, 값)
  }
  // 아이디 불일치 실패
  if(ID_INPUT.value !== TEST_EMAIL){ 
    showErrorMessage("이메일을 확인해주세요.", 'idErrorMessage', ID_INPUT, IDBOX);
  }
  // 비밀번호 불일치 실패
  if(PW_INPUT[0].value !== TEST_PW){ 
    showErrorMessage("비밀번호를 확인해주세요.",  'pwErrorMessage', PW_TEXT, PWBOX);
  }
}

// 버튼 클릭
LOGIN_BUTTON.addEventListener("click", LoginTry);