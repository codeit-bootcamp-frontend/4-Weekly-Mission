const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');
const signinBtn = document.querySelector('#signinBtn');

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

 // 이메일 유효성 체크 함수
 function emailCheck(email_address){     
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    let checkElement = emailDiv.lastElementChild.classList;
    if(!email_regex.test(email_address)){ 
        errorMsg("wrongEmail");
        return false;
    } else{
        emailInput.setAttribute('status','정상');
        document.querySelector('.wrongEmail').remove();
        return true;
	}
}

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email === "") { // email 값 없이 focus out
    errorMsg("NoEmail");
  } else if (email !== "") {
    emailCheck(emailVal);
  }
  emailVal = email; 
}

// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  if(password === "") {
    errorMsg("NoPwd");
  } else if (password !== "") {
    pwdInput.setAttribute('status','정상');
    if(pwdDiv.children[2]){
      pwdDiv.children[2].remove();
    }
  }
  pwdVal = password;
}

// 로그인 시도할 경우 동작 함수
function trySignin(email,password) {
  if(email === "test@codeit.com" && password === "codeit101") {
    signinBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    errorMsg("Other"); 
  }

}

 emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
 });
 pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
 })
 signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 })
