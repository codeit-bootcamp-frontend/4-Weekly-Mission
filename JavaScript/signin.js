
const registeredAccounts = [
   {email : 'test@codeit.com' , password : 'codeit101'}
]

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const inputtedLoginEmailCheck = document.querySelector('#loginEmailInput');
const inputtedLoginPasswordCheck = document.querySelector('#loginPasswordInput');
const orderCheckEmail = document.querySelector('#loginConfirmButton');


const submitLoginData = function (event)  {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = inputtedLoginEmailCheck.value
   const passwordValue = inputtedLoginPasswordCheck.value

   //에러메시지 출력 장소
   const emailErrorMessage = inputtedLoginEmailCheck.parentElement.lastElementChild
   const passwordErrorMessage = inputtedLoginPasswordCheck.parentElement.parentElement.lastElementChild

   const isAccountSigned = registeredAccounts.find(
      (account) => account.email == emailValue && account.password == passwordValue)

   if (!isAccountSigned) {     inputtedLoginEmailCheck.classList.add('signError')
      inputtedLoginPasswordCheck.classList.add('signError')
      emailErrorMessage.textContent = '이메일을 확인해 주세요.'
      passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.' 
   } else {
      window.location.replace("folder.html");
   }
}

orderCheckEmail.addEventListener('click' , submitLoginData)



// 이메일 포커스
const emailFocusOut = function (event) {
   const errorMessageSection = event.target.parentElement.lastElementChild

   if (event.target.value == '') {
      event.target.classList.add('signError')
      errorMessageSection.textContent = '이메일을 입력해 주세요.'
   } else if (!event.target.value.match(mailFormat)) {
      event.target.classList.add('signError')
      errorMessageSection.textContent = '올바른 이메일 주소가 아닙니다.'
   }
}

const emailFocusIn = function (event) {
   inputtedLoginEmailCheck.classList.remove('signError')
   event.target.parentElement.lastElementChild.textContent = ''
}

inputtedLoginEmailCheck.addEventListener('focus' , emailFocusIn)
inputtedLoginEmailCheck.addEventListener('blur' , emailFocusOut)



// 패스워드 포커스
const passwordFocusOut = function (event) {
   if (event.target.value == '') {
      event.target.classList.add('signError')
      event.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.' 
   }
}

const passwordFocusIn = function (event) {
   inputtedLoginPasswordCheck.classList.remove('signError')
   event.target.parentElement.parentElement.lastElementChild.textContent = ''
}

inputtedLoginPasswordCheck.addEventListener('focus' , passwordFocusIn)
inputtedLoginPasswordCheck.addEventListener('blur' , passwordFocusOut)

