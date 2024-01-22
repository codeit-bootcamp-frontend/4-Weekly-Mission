// input값 가져오기
const ID_INPUT = document.getElementById("username");
const PW_INPUT = document.getElementById("password");
const LOGIN_BUTTON = document.getElementById("login_btn");

// 에러
function idcheck(ID_INPUT){ // id 에러 상황
  if(ID_INPUT.value === ''){
    showidErrorMessage("이메일을 입력해 주세요.");
  }
  else if(!isValidEmail(ID_INPUT.value)){
    showidErrorMessage("올바른 이메일 주소가 아닙니다.");
  }
} 

function pwcheck(PW_INPUT){ // pw 에러 상황
  if(PW_INPUT.value === ''){
    showpwErrorMessage("비밀번호를 입력해 주세요.");
  }
}

// 이메일유효성 검사
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// 페이지이동(fqa)
function login(ID_INPUT, PW_INPUT){ //아이디:codeit@codeit.com, 비밀번호:codeit101 일때
  if(ID_INPUT.value === "codeit@codeit.com" && PW_INPUT.value === "codeit101"){
    window.location.href = "./faq";
  }
  else{
    showidErrorMessage("올바른 이메일 주소가 아닙니다.");
    showpwErrorMessage("비밀번호를 입력해 주세요.");
  }
}

// 에러메세지
function showidErrorMessage(message){ // 에러메세지표시(id)
  //색상변경
  ID_INPUT.style.border = '3px solid #FF5B56';
  //메세지표출
  ID_INPUT.appendChild(message);
}

function showpwErrorMessage(message){ // 에러메세지표시(pw)
  //색상변경
  PW_INPUT.style.color = '3px solid #FF5B56';
  //메세지표출
  PW_INPUT.appendChild(message);
}

// 로그인 시도
LOGIN_BUTTON.addEventListener("keypress", function(e) {
  // Enter 키 입력 시 로그인 시도
  if (e.keycode === 13) {
    // 로그인 시도 함수 호출
    console.log("Enter key pressed. Trying to login...");
    // 로그인 함수 호출 (위의 LOGIN_BUTTON 클릭 이벤트 핸들러와 동일한 로직 사용)
    if (ID_INPUT.value === "test@codeit.com" && PW_INPUT.value === "codeit101") {
      window.location.href = "./faq";
    } else {
      showidErrorMessage(ID_INPUT, "이메일을 확인해주세요.");
      showpwErrorMessage(PW_INPUT, "비밀번호를 확인해주세요.");
    }
  }
});
// // 클릭 이벤트로도 로그인 시도
// LOGIN_BUTTON.addEventListener("click", function () {
//   login();
// });