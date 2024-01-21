

const EmailInput = document.querySelector('');
const btnLogin = document.querySelector('');





//input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.


//이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
function name(params) {
  
}

//이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
function showWrongStructureEmail(){

}

//비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
function name(params) {
  
}


function name(params) {
  
}
 
//이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
function name(event) {
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "test@codeit.com" && password === "codeit101") { 
        location.href('./folder/index.html');
    } else {
      loginErrorMsg.style.opacity = 1;
      //이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 
      //비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.opacity = 1;
    }
}
  


//로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
// function playLogin(e) {
  //자동으로 되던데요..?
// }


addEventListener("focusout", focus);
// addEventListener("focusout", playLogin);
