// 회원가입 시도
function registerTry(event) {
  event.preventDefault();
  if (idError===false && pwError===false && pwcheckError===false) { //성공
    window.location.href = "./folder.html";
  } 
  if(ID_INPUT.value === TEST_EMAIL){
    showidErrorMessage("이미 사용 중인 이메일입니다.");
  }
  if(isValidPW(PW_INPUT[0].value)){
    showpwErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
}

// 버튼 클릭
LOGIN_BUTTON.addEventListener("click", registerTry);