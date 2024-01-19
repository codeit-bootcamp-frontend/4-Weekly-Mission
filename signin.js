const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const eyeIcon = document.querySelector('#eyeIcon')


//email focus out 이벤트
emailInput.onblur = function(){
  //초기화
  init(emailInput);
  init(emailInput);

  //이메일 유효성 함수 호출
  emailValidationChk();
}
//비밀번호 focus out 이벤트
passwordInput.onblur = function() {
  //초기화
  init(passwordInput);
  
  //비밀번호 유효성 함수 호출
  passwordValidationChk();
} 

// 로그인 성공 이벤트
loginBtn.onclick = function(){
  if(passwordInput.value === 'codeit101' && emailInput.value === 'test@codeit.com'){
    location.href = 'folder.html';
  }else {
    errMsg(emailInput,'이메일을 확인해 주세요.')
    errMsg(passwordInput,'비밀번호를 확인해 주세요.')
  }
}


//이메일 유효성 검사
function emailValidChk(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(pattern.test(email) === false) {
    return false; 
  } else {
    return true; 
  }
}

//에러 메시지 div 요소 생성
function errMsg(inputVal ,txt) {
  const errMsgDiv = document.createElement('div');
  errMsgDiv.textContent = txt;
  errMsgDiv.setAttribute('style','color: red');
  errMsgDiv.setAttribute('class','input-font-size');  
  inputVal.after(errMsgDiv);
}

//요소 초기화
function init(element){
    //div 요소 확인
    const divExist = element.nextElementSibling;

    //div 요소 확인 될 시 요소 삭제
    if(divExist){
      divExist.remove();
    }
}

//비밀번호 눈모양 클릭 이벤트
eyeIcon.onclick = function() {
  if(eyeIcon.classList.contains('eye-off')){ //off에서 on으로
    eyeIcon.classList.remove('eye-off');
    eyeIcon.classList.add('eye-on');
    passwordInput.type = 'text';

  }else{//on에서 off로
    eyeIcon.classList.remove('eye-on');
    eyeIcon.classList.add('eye-off');
    passwordInput.type = 'password';
  }
}

//이메일 유효성 검사
function emailValidationChk(){
  if(!emailInput.value){
    errMsg(emailInput,'이메일을 입력해 주세요.')
  }else if(!emailValidChk(emailInput.value)){
    errMsg(emailInput, '올바른 이메일 주소가 아닙니다.')
  }
}

//비밀번호 유효성 검사
function passwordValidationChk(){
  if(!passwordInput.value){
    errMsg(passwordInput,'비밀번호를 입력해 주세요.')
  }
}