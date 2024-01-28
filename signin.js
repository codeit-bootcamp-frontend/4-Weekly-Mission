//이메일 빈값/형식체크
let emailInput = document.querySelector('#input-email')
let regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

emailInput.addEventListener('blur', function(){
  if (!emailInput.value){
    document.querySelector('#id-warning').style.display = 'block';
  }
  else if (regEmail.test(emailInput.value) == false){
    document.querySelector('#id-warning').style.display = 'block'
    document.querySelector('#id-warning').innerHTML = '올바른 이메일 주소가 아닙니다'
  }
  else {
    document.querySelector('#id-warning').style.display = 'none'
  }
})

//비밀번호 빈값 체크
//warning message 이후 비밀번호 보기 버튼 자리이탈함...
//비밀번호 보안 알아보기
let passwordInput = document.querySelector('#input-password')

passwordInput.addEventListener('blur', function(){
//   console.log(passwordInput.value)
  if (!passwordInput.value){
    document.querySelector('#pw-warning').style.display = 'block'
  }
  else {
    document.querySelector('#pw-warning').style.display = 'none'
  }
})

//로그인 버튼 누르면 창 이동

document.querySelector('.cta').addEventListener('click', function(){

    if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
      window.location = '/folder.html'
    } else {
      document.querySelector('#id-warning').style.display = 'block'
      document.querySelector('#id-warning').innerHTML = '이메일을 확인해주세요'
      document.querySelector('#pw-warning').style.display = 'block'
      document.querySelector('#pw-warning').innerHTML = '비밀번호를 확인해주세요'
    }
})

//엔터키 누르면 창이동
// 로그인버튼이랑 묶기

function enterKey() {
  
  if (window.event.keyCode == 13) {
      if (emailInput === 'test@codeit.com' && passwordInput === 'codeit101'){
        location.href = 'folder.html'
      } else {
        document.querySelector('#id-warning').style.display = 'block'
        document.querySelector('#id-warning').innerHTML = '이메일을 확인해주세요'
        document.querySelector('#pw-warning').style.display = 'block'
        document.querySelector('#pw-warning').innerHTML = '비밀번호를 확인해주세요'
      }
  }
}



//모듈화