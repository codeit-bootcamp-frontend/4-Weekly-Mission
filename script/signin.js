/* 이메일 input에서 focus out 할 때
값이 없을 경우 아래에 "이메일을 입력해 주세요." 에러 메시지를 보입니다 */

const emailInput = document.getElementById('email');
const emailErrorMessage = document.createElement('div');
emailErrorMessage.className = 'error-message'; //에러 메시지를 표현하는 폼은 모두 같다.
emailErrorMessage.classList.add('text-medium');
emailErrorMessage.innerText = '이메일을 입력해 주세요'

emailInput.addEventListener('focusout', function(){
  if(!emailInput.value.trim()) { //trim의 값이 거짓일 때는 (빈 문자열 또는 공백만 포함일떄!) 즉, 지금 상태는 빈문자열일때!
    emailErrorMessage.style.display = 'block'; // 화면에 보여줌
    emailInput.classList.add('error-box');
    emailInput.parentElement.lastElementChild.after(emailErrorMessage);
  } else {
    emailErrorMessage.style.display = 'none'; // 화면에 안보여줌
    emailInput.classList.remove('error-box');
  }
});
