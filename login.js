
function errorBoxOnOff(type, target) {
  const targetNode = document.querySelector(`#${target}`)
  targetNode.style.display = type === 'off' ? 'none' : 'block'
}

function focusOutCheck(event){
  const value = event.target.value;
  const id = event.target.id
  if(id === 'email'){
    if(value === ""){
      errorBoxOnOff('on', `${event.target.id}ErrorBox`)
      document.querySelector(`#${event.target.id}ErrorBox`).textContent = ' 이메일을 입력해주세요.'
      event.target.classList.add('error_box_border')
    }else if(!isValidEmail(value)){
      errorBoxOnOff('on', `${event.target.id}ErrorBox`)
      event.target.classList.add('error_box_border')
      document.querySelector(`#${event.target.id}ErrorBox`).textContent = '올바른 이메일 주소가 아닙니다.'
    }else{
      errorBoxOnOff('off', `${event.target.id}ErrorBox`)
      event.target.classList.remove('error_box_border')
    }
  }else{
    if(value === ""){
      errorBoxOnOff('on', `${event.target.id}ErrorBox`)
      event.target.classList.add('error_box_border')
      document.querySelector(`#${event.target.id}ErrorBox`).textContent = '비밀번호를 입력해주세요.'
    }else{
      errorBoxOnOff('off', `${event.target.id}ErrorBox`)
      event.target.classList.remove('error_box_border')
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}


function loginProcess() {
  const emailValue = document.querySelector('#email').value
  const passwordValue = document.querySelector('#password').value
  if(emailValue !== 'test@codeit.com'){
    errorBoxOnOff('on', `emailErrorBox`)
    document.querySelector(`#emailErrorBox`).textContent = '이메일을 확인해 주세요.'
    document.querySelector('#email').classList.add('error_box_border')
  }
  if(passwordValue !== 'codeit101'){
    errorBoxOnOff('on', `passwordErrorBox`)
    document.querySelector(`#passwordErrorBox`).textContent = '비밀번호를 확인해 주세요'
    document.querySelector('#password').classList.add('error_box_border')
  }
  if(emailValue === 'test@codeit.com' && passwordValue === 'codeit101'){
    location.href = '/folder.html';
  }
}


document.querySelector(`#email`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#password`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#signForm`).addEventListener('submit', function(event) {
  event.preventDefault();
  loginProcess()
});