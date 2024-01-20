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

/*이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 
"올바른 이메일 주소가 아닙니다" 라고 에러 메세지를 보냅니다. */

const emailFormatErrorMessage = document.createElement('div');
emailFormatErrorMessage.className = 'error-message';
emailFormatErrorMessage.classList.add('text-medium');
emailFormatErrorMessage.innerText = '올바른 이메일 주소가 아닙니다.';

emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim(); 
    if (emailValue && !isValidEmail(emailValue)) { //빈문자열이 아니면서 이메일 형식과 맞지 않을 때 
        emailFormatErrorMessage.style.display = 'block'; //화면에 보여줌
        emailInput.parentElement.lastElementChild.after(emailFormatErrorMessage);
    } else {
        emailFormatErrorMessage.style.display = 'none';
    }
});

function isValidEmail(email) { //isValidEmail function을 제작하면됨. 음 .com. .kr등의 pop했을 때 양식을 만들어준다? 정도로 가자 질문!!!
    let spotcount = atsigncount = 0;

    for(let word of email) {
        if(word === '.') spotcount++;
        else if (word ==='@') atsigncount++;
    }
    
    if(spotcount === 1 && atsigncount ===1) return true;
    else return false;
}

