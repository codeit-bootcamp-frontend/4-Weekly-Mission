const emailInput = document.querySelector('#email')
const errorM = document.querySelector('.errorM')
const pwInput = document.querySelector('#password')
const errorP = document.querySelector('.errorP')


function emailError(e) {
  console.log('focusout')
  // 왜 e.target.value=''하면 적용이 안되는지ㅠ
  if(!e.target.value.trim()) {
    errorM.textContent = '이메일을 입력해 주세요.'
  } else{
    errorM.textContent=''
  }
}

function pwError(e) {
  if(!e.target.value.trim()) {
    errorP.textContent = '비밀번호를 입력해 주세요.'
  } else{
    errorP.textContent=''
  }
}
emailInput.addEventListener('focusout', emailError)
pwInput.addEventListener('focusout', pwError)