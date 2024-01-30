import errMsg from '../../errMsg/errMsg.js';

const selector = document.querySelector('#email');


//이메일 유효성 체크
const emailValidChk = (email) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(email);
}

//이메일 유효성 검사
const emailValidationChkMsg = (e) => {
  const url = window.location.href;
  if(url.indexOf('signup') !== -1){//회원가입 페이지일 때
    if(!e.value) {
      errMsg(e, '이메일을 입력해 주세요.');
    }else if(!emailValidChk(e.value)){
      errMsg(e, '올바른 이메일 주소가 아닙니다.');
    }else if(e.value === 'test@codeit.com'){
      errMsg(e, '이미 사용 중인 이메일입니다.');
    }
  }else{//로그인 페이지일 때
    if(!e.value) {
      errMsg(e, '이메일을 입력해 주세요.');
    }else if(!emailValidChk(e.value)){
      errMsg(e, '올바른 이메일 주소가 아닙니다.');
    }
  }
}

export default {emailValidChk, emailValidationChkMsg, selector};