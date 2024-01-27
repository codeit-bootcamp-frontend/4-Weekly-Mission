// 로그인 시도
function LoginTry(event) {
  event.preventDefault();
  if (ID_INPUT.value === TEST_EMAIL&&PW_INPUT[0].value === TEST_PW) { //성공
    window.location.href = "./folder.html";
  } 
  if(ID_INPUT.value !== TEST_EMAIL){ // id가 실패
    showidErrorMessage("이메일을 확인해주세요.");
  }
  if(PW_INPUT[0].value !== TEST_PW){ // pw가 실패
    showpwErrorMessage("비밀번호를 확인해주세요.");
  }
}

// 버튼 클릭
LOGIN_BUTTON.addEventListener("click", LoginTry);