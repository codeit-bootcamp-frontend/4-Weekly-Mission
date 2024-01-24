const TEST_ACCOUNT = {
  EMAIL: 'test@codeit.com',
  PASSWORD: 'codeit101'
}

const REGEX = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: '',
}

const ERROR_MSG = {
  BLANK: {
    EMAIL: '이메일을 입력해 주세요.',
    PASSWORD: '비밀번호를 입력해 주세요.'
  },
  INVALID: {
    EMAIL: '올바른 이메일 주소가 아닙니다.'
  },
  INCORRECT:{
    EMAIL: '이메일을 확인해 주세요.',
    PASSWORD: '비밀번호를 확인해 주세요.'
  }

}

const isEmail = (email) => REGEX['EMAIL'].test(email);
const isBlank = (e) => e.target.value === '';
const $ = (selector, element = document) => element.querySelector(selector);

const changeBlankInput = (e) => {
  const errorInput = e.target;
  let isExistErrorMsg = false;

  try{  // 에러메시지 자체가 생성이 안된 경우 체크
    isExistErrorMsg = errorInput.nextElementSibling.classList.contains('input-profile-error-msg');
  } catch(RuntimeException) {
    isExistErrorMsg = false;
  }
  
  if(isBlank(e)) {
    // 에러메시지가 존재하지 않는 최초의 경우에는 추가
    if(!isExistErrorMsg) {
      errorInput.classList.add('input-profile-error');
      const errorInputMsg = document.createElement('p');
      
      // input이 id인지 email인지 체크
      if(e.target.getAttribute('id') === 'email')
        errorInputMsg.textContent = ERROR_MSG.BLANK.EMAIL;
      else 
        errorInputMsg.textContent = ERROR_MSG.BLANK.PASSWORD;

      errorInputMsg.className = 'input-profile-error-msg';
      errorInput.parentNode.appendChild(errorInputMsg);
    }
    else { // 에러메시지는 있는데 인풋을 다시 지워서 빈 경우
      console.log('다시');
      errorInput.nextElementSibling.classList.remove('display-none');
      errorInput.classList.add('input-profile-error');
    }
  }
  else {  // 에러메시지가 있고 인풋이 비어있지 않은 경우
    if(isExistErrorMsg) {
      errorInput.nextElementSibling.classList.add('display-none');
      errorInput.classList.remove('input-profile-error');
    }
  }
}

$('#email').addEventListener('blur', changeBlankInput);
$('#password').addEventListener('blur', changeBlankInput);



// //테스트케이스 들어가면 /folder로 이동

// //이메일 input focus out 하면 
// 올바른 이메일 주소가 아닙니다.

// //로그인 함수
// 엔터나 클릭하면 로그인 시작
// //에러메시지
// 이메일을 확인해 주세요.
// 비밀번호를 확인해 주세요.

// //눈깔
