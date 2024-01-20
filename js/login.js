const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');
const signinBtn = document.querySelector('#signinBtn');
const pwdEyeIcon = document.querySelector('.PwdEyeIcon');

let [emailVal, pwdVal] = ["", ""];

// 에러 메세지 출력 함수
function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  if(errorCase === "NoEmail") {          // email 값 없이 focusout시 
      newNode.innerHTML = "<p>이메일을 입력해 주세요</p>"
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');

  } else if(errorCase === "wrongEmail") { // email 형식에 맞지 않은 경우
      newNode.innerHTML = "<p>올바른 이메일 주소가 아닙니다.</p>"
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');
      emailDiv.append(newNode);

  } else if(errorCase === "NoPwd") {      // password 값 없이 focusout시 
      newNode.innerHTML = "<p>비밀번호을 입력해 주세요</p>"
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'password');

  } else if(errorCase === "Other") {      // 이외의 로그인 시도의 경우
      newNode.innerHTML = "<p>이메일을 확인해 주세요</p>"
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');

      let newNodePwd = document.createElement('div');
      pwdInput.setAttribute('status','에러');
      newNodePwd.innerHTML = "<p>비밀번호을 확인해 주세요</p>"
      newNodePwd.classList.add(errorCase,'errorMsg');
      if(!pwdDiv.children[2]) {
        pwdDiv.append(newNodePwd);
      } else if(pwdDiv.children[2]){
        pwdDiv.children[2].remove();
        pwdDiv.append(newNodePwd);
      }
  }
  
  if(newNode.getAttribute('sort') === "email") {
    emailInput.setAttribute('status','에러');
    if(!emailDiv.children[2]) {
      emailDiv.append(newNode);
    } else if(emailDiv.children[2]){
      emailDiv.children[2].remove();
      emailDiv.append(newNode);
    }
  } else if (newNode.getAttribute('sort') === "password") {
    pwdInput.setAttribute('status','에러');
    if(!pwdDiv.children[2]) {
      pwdDiv.append(newNode);
    } else if(pwdDiv.children[2]){
      pwdDiv.children[2].remove();
      pwdDiv.append(newNode);
    }
  }
 }

 // 에러 메세지 제거와, input 상태 정상으로
 function delError(type) {
  if(type === "email") {
    if(emailDiv.children[2]) {
      emailDiv.children[2].remove();
    }
    emailInput.setAttribute('status', '정상');
  } else if(type === "password") {
    if(pwdDiv.children[2]) {
      pwdDiv.children[2].remove();
    }
    pwdInput.setAttribute('status', '정상');
  }
 }

 // 이메일 유효성 체크 함수
 function emailCheck(email_address){     
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    let checkElement = emailDiv.lastElementChild.classList;
    if(!email_regex.test(email_address)){ 
        errorMsg("wrongEmail");
        return false;
    } else{
        delError('email');
        return true;
	}
}

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email === "") { // email 값 없이 focus out
    errorMsg("NoEmail");
  } else if (email !== "") {
    emailCheck(email);
  }
  emailVal = email; 
}

// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  if(password === "") {
    errorMsg("NoPwd");
  } else if (password !== "") {
    delError('password');
  }
  pwdVal = password;
}

// 로그인 시도할 경우 동작 함수
function trySignin(email,password) {
  console.log(email, password);
  if(email === "test@codeit.com" && password === "codeit101") {
    signinBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    errorMsg("Other"); 
  }
}

// enter키 입력으로 로그인 실행 
function EnterLogin(key) {
  if(key === 'Enter') {
    trySignin();
  }
}

// password input 눈모양을 누르면 비밀번호가 보였다가 안보였다 동작하는 함수
function EyePwd(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput.setAttribute('type', 'password');

  } else {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput.setAttribute('type', 'text');
  }
}

emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
});
emailInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});

pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
});
pwdInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});


 signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 });

 pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  EyePwd(e.target);
 })
