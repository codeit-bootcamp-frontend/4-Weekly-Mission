// input값 가져오기
const ID_INPUT = document.getElementById("username");
const PW_INPUT = document.getElementById("password");
const PW_TEXT = document.getElementById("pwtext");
const IDBOX = document.getElementById("idbox");
const PWBOX = document.getElementById("pwbox");
const LOGIN_BUTTON = document.getElementById("login_btn");

// 에러조건
function idcheck(event){ // id 에러 상황
  event.preventDefault(); // 한번만 적용
  if(ID_INPUT.value?.trim()==false){
    showidErrorMessage("이메일을 입력해 주세요.");
  }
  else if(!isValidEmail(ID_INPUT.value)){
    showidErrorMessage("올바른 이메일 주소가 아닙니다.");
  }
} 

function isValidEmail(email) { // 이메일유효성 검사
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return emailRegex.test(email);
}

function pwcheck(event){ // pw 에러 상황
  event.preventDefault(); // 한번만 적용
  if(PW_INPUT.value?.trim()==false){
    showpwErrorMessage("비밀번호를 입력해 주세요.");
  }
}

// 에러시 적용되는 스타일
function showidErrorMessage(message){ // 에러메세지표시(id)
  if(!document.getElementById('idErrorMessage')){
    // input 색상변경
    ID_INPUT.style.border = '3px solid #FF5B56';
    // p 메세지표출
    const errormessage = document.createElement("p");
    errormessage.id = 'idErrorMessage'
    errormessage.textContent = message;
    errormessage.style.color = '#FF5B56';
    IDBOX.appendChild(errormessage);
  }
}

function showpwErrorMessage(message){ // 에러메세지표시(pw)
  if(!document.getElementById('pwErrorMessage')){
    // input 색상변경
    PW_TEXT.style.border = '3px solid #FF5B56';
    // p 메세지표출
    const errormessage = document.createElement("p");
    errormessage.id = 'pwErrorMessage'
    errormessage.textContent = message;
    errormessage.style.color = '#FF5B56';
    PWBOX.appendChild(errormessage);
  }
}

// 포커스인할때 글자가 사라지게
function focusID(){
  if(document.getElementById('idErrorMessage')){
    const errormessage = document.getElementById('idErrorMessage')
    errormessage.remove()
    ID_INPUT.style.border = '3px solid #6D6AFE'
  }
}

function focusPW(){
  if(document.getElementById('pwErrorMessage')){
    const errormessage = document.getElementById('pwErrorMessage')
    errormessage.remove()
    PW_TEXT.style.border = '3px solid #6D6AFE'
  }
}

// 로그인 시도
function IDTry(event) {
  if (ID_INPUT.value === "test@codeit.com"&&PW_INPUT.value === "codeit101") {
    window.location.href = "./folder.html";
  } 
  if(ID_INPUT.value !== "test@codeit.com"){
    showidErrorMessage("이메일을 확인해주세요.");
  }
  if(PW_INPUT.value !== "codeit101"){
    showpwErrorMessage("비밀번호를 확인해주세요.");
  }
}

// 포커스
ID_INPUT.addEventListener("focusout",event=> idcheck(event));
ID_INPUT.addEventListener("focusin", focusID);
PW_INPUT.addEventListener("focusout",event=> pwcheck(event));
PW_INPUT.addEventListener("focusin", focusPW);

// 클릭
LOGIN_BUTTON.addEventListener("click", IDTry, {once:true});
