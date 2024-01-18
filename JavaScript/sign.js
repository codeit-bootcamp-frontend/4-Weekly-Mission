
const registeredEmails = {
   email: ['test@codeit.com'], 
   password: ['codeit101']
}
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const inputtedLoginEmailCheck = document.querySelector('#loginEmailInput');
const inputtedLoginPasswordCheck = document.querySelector('#loginPasswordInput');
const orderCheckEmail = document.querySelector('button.button');
const passwordBeHidden = document.querySelectorAll('.passwordSeenButton')


function submitLoginData(event)  {
   event.preventDefault();
   let userVerification = 0
   for (let i = 0 ; i < registeredEmails.email.length ; i++) {
      if (inputtedLoginEmailCheck.value == registeredEmails.email[i]) {
         if (inputtedLoginPasswordCheck.value == registeredEmails.password[i]) {
            userVerification = true
            window.location.replace("folder.html");

         }
      } 
   }
   if (!userVerification) {
      inputtedLoginEmailCheck.parentElement.lastElementChild.textContent = '이메일을 확인해 주세요.'
      inputtedLoginPasswordCheck.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 확인해 주세요.' 
   }
}
orderCheckEmail.addEventListener('click' , submitLoginData)


// 이메일 포커스
function emailFocusOut(event) {
   if (event.target.value == '') {
      event.target.parentElement.lastElementChild.textContent = '이메일을 입력해 주세요.'
   } else if (!event.target.value.match(mailFormat)) {
      event.target.parentElement.lastElementChild.textContent = '올바른 이메일 주소가 아닙니다.'
   }
}
function emailFocusIn(event) {
   event.target.parentElement.lastElementChild.textContent = ''
}
inputtedLoginEmailCheck.addEventListener('focus' , emailFocusIn)
inputtedLoginEmailCheck.addEventListener('blur' , emailFocusOut)


// 패스워드 포커스
function passwordFocusOut(event) {
   if (event.target.value == '') {
      event.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.' 
   }
}
function passwordFocusIn(event) {
   event.target.parentElement.parentElement.lastElementChild.textContent = ''
   
}
inputtedLoginPasswordCheck.addEventListener('focus' , passwordFocusIn)
inputtedLoginPasswordCheck.addEventListener('blur' , passwordFocusOut)


// 비밀번호 숨김 구현
function hidePassword(event) {
   console.log('히든 버튼 작동됨')
   if (event.target.classList.contains('notHidden')) {
     //비밀번호를 숨겨줌
      event.target.classList.toggle('notHidden')
      event.target.previousElementSibling.setAttribute('type','password')

   } else {
      event.target.classList.toggle('notHidden')
      event.target.previousElementSibling.setAttribute('type','text')
   }
}
for (let i = 0 ; i < passwordBeHidden.length ; i++) {
   passwordBeHidden[i].addEventListener ('click', hidePassword)
}


