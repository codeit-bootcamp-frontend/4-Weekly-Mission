// 이메일 유효성 검사 체크
function emailCheck(email_address){     
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if(!email_regex.test(email_address)){ 
      return false;
  } else{
      return true;
  }
}



export { emailCheck }