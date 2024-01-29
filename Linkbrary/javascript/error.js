// 에러조건
// id 에러 상황
function idError(event){ 
  event.preventDefault(); // 새로고침 막기
  if(window.location.pathname==='/Linkbrary/signin.html'){
    if(ID_INPUT.value?.trim()==false){
      showidErrorMessage("이메일을 입력해 주세요.");
      return;
    }
    else if(!isValidEmail(ID_INPUT.value)){
      showidErrorMessage("올바른 이메일 주소가 아닙니다.");
    }
  }else{
    if(ID_INPUT.value?.trim()==false){
      showidErrorMessage("이메일을 입력해 주세요.");
      return;
    }
    else if(!isValidEmail(ID_INPUT.value)){
      showidErrorMessage("올바른 이메일 주소가 아닙니다.");
    }
    else if(ID_INPUT.value === TEST_EMAIL){
      showidErrorMessage("이미 사용 중인 이메일입니다.");
    }
  }
} 
// 이메일 유효성 검사
function isValidEmail(email) { 
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return emailRegex.test(email);
}
// pw 에러 상황
function pwError(event){ 
  event.preventDefault(); // 새로고침 막기
  if(PW_INPUT[0].value?.trim()==false){
    showpwErrorMessage("비밀번호를 입력해 주세요.");
  }
}
// 비밀번호 유효성 검사
function isValidPW(pw) {
  const pwRegex = new RegExp(/^(.{0,7}|[A-Za-z]+|\d+)$/);
  return pwRegex.test(pw);
}
// pwcheck 에러 상황
function pwcheckError(event){
  event.preventDefault(); // 새로고침 막기
  if(PW_INPUT[0].value != PW_INPUT[1].value){
    showpwcheckErrorMessage("비밀번호가 일치하지 않아요.");
  }
}