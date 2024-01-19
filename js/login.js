const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');

// 에러 메세지 출력 함수
function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  if(errorCase === "NoEmail") {          // email 값 없이 focusout시 
      newNode.innerHTML = "<p>이메일을 입력해 주세요</p>"
      newNode.classList.add('errorMsg')
      emailDiv.append(newNode);
      emailInput.setAttribute('status','에러');

  } else if(errorCase === "wrongEmail") { // email 형식에 맞지 않은 경우
      newNode.innerHTML = "<p>올바른 이메일 주소가 아닙니다.</p>"
      newNode.classList.add('errorMsg')
      emailDiv.append(newNode);
      emailInput.setAttribute('status','에러');

  } else if(errorCase === "NoPwd") {      // password 값 없이 focusout시 
      newNode.innerHTML = "<p>비밀번호을 입력해 주세요</p>"
      newNode.classList.add('errorMsg')
      pwdDiv.append(newNode);
      pwdInput.setAttribute('status','에러');

  } else if(errorCase === "Other") {       // 그 외 로그인 시도 경우
    let newNode = document.createElement('div');
    newNode.innerHTML = "<p>이메일을 확인해 주세요</p>"
    newNode.classList.add('errorMsg')
    emailDiv.append(newNode);
    emailInput.setAttribute('status','에러');

    let newNode2 = document.createElement('div');
    newNode2.innerHTML = "<p>비밀번호를 확인해 주세요</p>"
    newNode2.classList.add('errorMsg')
    pwdDiv.append(newNode2);
    pwdInput.setAttribute('status','에러');
  }
 }

 errorMsg('Other')
