// 이메일 유효성 검사
function emailCheck(email_address){     
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if(!email_regex.test(email_address)){ 
      return false;
  } else{
      return true;
  }
}

// 비밀번호 유효성 검사
function passwordCheck(password) {
  let password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(!password_regex.test(password)) {
    return false;
  } else {
    return true;
  }
}



export { emailCheck, passwordCheck }