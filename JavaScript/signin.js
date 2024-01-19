
const registeredEmails = {
   email: ['test@codeit.com'], 
   password: ['codeit101']
}
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const inputtedLoginEmailCheck = document.querySelector('#loginEmailInput');
const inputtedLoginPasswordCheck = document.querySelector('#loginPasswordInput');
const orderCheckEmail = document.querySelector('#loginConfirmButton');


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
      inputtedLoginEmailCheck.classList.add('errorInputDesign')
      inputtedLoginPasswordCheck.classList.add('errorInputDesign')
      inputtedLoginEmailCheck.parentElement.lastElementChild.textContent = '이메일을 확인해 주세요.'
      inputtedLoginPasswordCheck.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 확인해 주세요.' 
   }
}
orderCheckEmail.addEventListener('click' , submitLoginData)


// 이메일 포커스
function emailFocusOut(event) {
   if (event.target.value == '') {
      event.target.classList.add('errorInputDesign')
      event.target.parentElement.lastElementChild.textContent = '이메일을 입력해 주세요.'
   } else if (!event.target.value.match(mailFormat)) {
      event.target.classList.add('errorInputDesign')
      event.target.parentElement.lastElementChild.textContent = '올바른 이메일 주소가 아닙니다.'
   }
}
function emailFocusIn(event) {
   inputtedLoginEmailCheck.classList.remove('errorInputDesign')
   event.target.parentElement.lastElementChild.textContent = ''
}
inputtedLoginEmailCheck.addEventListener('focus' , emailFocusIn)
inputtedLoginEmailCheck.addEventListener('blur' , emailFocusOut)


// 패스워드 포커스
function passwordFocusOut(event) {
   if (event.target.value == '') {
      event.target.classList.add('errorInputDesign')
      event.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.' 
   }
}
function passwordFocusIn(event) {
   inputtedLoginPasswordCheck.classList.remove('errorInputDesign')
   event.target.parentElement.parentElement.lastElementChild.textContent = ''
   
}
inputtedLoginPasswordCheck.addEventListener('focus' , passwordFocusIn)
inputtedLoginPasswordCheck.addEventListener('blur' , passwordFocusOut)

