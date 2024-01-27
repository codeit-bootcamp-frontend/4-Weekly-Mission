// 에러조건
// id 에러 상황
function idcheck(event){ 
  event.preventDefault(); // 한번만 적용
  if(ID_INPUT.value?.trim()==false){
    showidErrorMessage("이메일을 입력해 주세요.");
    return;
  }
  else if(!isValidEmail(ID_INPUT.value)){
    showidErrorMessage("올바른 이메일 주소가 아닙니다.");
  }
} 
// 이메일유효성 검사
function isValidEmail(email) { 
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return emailRegex.test(email);
}
// pw 에러 상황
function pwcheck(event){ 
  event.preventDefault(); // 한번만 적용
  if(PW_INPUT.value?.trim()==false){
    showpwErrorMessage("비밀번호를 입력해 주세요.");
  }
}