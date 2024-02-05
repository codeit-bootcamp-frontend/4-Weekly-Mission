//이메일 빈값/형식체크
//이미 사용중임 warning 뜨면 빈값으로 focus out 해도 이미 사용중임으로 메세지 고정
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
  else if (emailInput.value === 'test@codeit.com') {
    document.querySelector('#id-warning').style.display = 'block'
    document.querySelector('#id-warning').innerHTML = '이미 사용중인 이메일입니다'
  }
  else {
    document.querySelector('#id-warning').style.display = 'none'
  }
})

//비밀번호 빈값/형식 체크
//warning message 이후 비밀번호 보기 버튼 자리이탈함...
//비밀번호 보안 알아보기
let passwordInput = document.querySelector('#input-password');
let regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/


passwordInput.addEventListener('blur', function(){
//   console.log(passwordInput.value)
  if (regPw.test(passwordInput.value) == false){
    document.querySelector('#pw-warning').style.display = 'block'
  }
  else {
    document.querySelector('#pw-warning').style.display = 'none'
  }
})


//회원가입 비밀번호 체크
let passwordCheck = document.querySelector('#input-password-check')

passwordCheck.addEventListener('blur', function(){
  // console.log(passwordCheck.value)
  if (passwordInput.value != passwordCheck.value){
    document.querySelector('#pwcheck-warning').style.display = 'block'
  }
  else {
    document.querySelector('#pwcheck-warning').style.display = 'none'
  }
})

//회원가입 성공시 창 이동

document.querySelector('.cta').addEventListener('click', function(){
    // window.location = 'folder.html'

})

//엔터키 누르면 가입

function enterKey() {
  
  if (window.event.keyCode == 13) {
      alert('확인')
  }
}







//모듈화