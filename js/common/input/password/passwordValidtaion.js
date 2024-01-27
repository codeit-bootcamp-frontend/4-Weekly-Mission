import errMsg from '../../errMsg/errMsg.js';

const selector = document.querySelector('#password');
const selectorOfChk = document.querySelector('#password-chk');

//비밀번호 유효성 체크
const passwordValidChk = (password) => {
  const pattern = /^(.{0,7}|[0-9]+|[a-zA-Z]+)$/;
  return pattern.test(password);
}

//비밀번호 유효성 검사
const passwordValidationChkMsg = (e) => {
  const url = window.location.href;
  //비밀번호
  if(e.id === 'password'){//공통 검사
    if(!e.value) {
      errMsg(e, '비밀번호를 입력해 주세요.');
    }else{//회원가입 페이지일때 검사
      if(url.indexOf('signup') !== -1){
        if(passwordValidChk(e.value)){
          errMsg(e, '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.');
        }
      }
    }
  }
  //비밀번호 확인
  if(e.id === 'password-chk'){
    if(!e.value) {
      errMsg(e, '비밀번호를 입력해 주세요.');
    }else if(e.value !== selector.value){
      errMsg(e, '비밀번호가 일치하지 않아요.');
    }
  }
}

export default {selector, selectorOfChk, passwordValidationChkMsg};
