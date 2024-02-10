// 회원가입 시도
async function registerTry(event) {
  event.preventDefault();
  // 회원가입 성공(api활용)
  const isSuccess = await POST_API('https://bootcamp-api.codeit.kr/api/sign-up', {
    "email": ID_INPUT.value,
    "password": PW_INPUT[0].value
  })
  if (isSuccess['data']) { //성공
    window.location.href = "./folder.html";
    localStorage.setItem('accessToken',  isSuccess['data']['accessToken']); // setItem(키, 값)
  }
  // 이메일중복 실패(api활용)
  const checkEmail = await POST_API('https://bootcamp-api.codeit.kr/api/check-email',{
    "email": ID_INPUT.value
  })
  if(!checkEmail['data']){
    showErrorMessage("이미 사용 중인 이메일입니다.", 'idErrorMessage', ID_INPUT, IDBOX);
  }
  // 비밀번호 조합미달 실패
  if(isValidPW(PW_INPUT[0].value)){
    showErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.", 'pwErrorMessage', PW_TEXT, PWBOX);
  }
}

// 버튼 클릭
LOGIN_BUTTON.addEventListener("click", registerTry);