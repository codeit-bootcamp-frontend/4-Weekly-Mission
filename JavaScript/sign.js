
const registeredEmails = {
   email: ['test@codeit.com'], 
   password: ['codeit01']
}

const inputtedLoginEmailCheck = document.querySelector('#loginEmailInput');
const inputtedLoginPasswordCheck = document.querySelector('#loginPasswordInput');
const orderCheckEmail = document.querySelector('button.button');
const passwordBeHidden = document.querySelectorAll('.passwordSeenButton')

orderCheckEmail.onclick = function ()  {
   console.log('button test')
   for (let i = 0 ; i < registeredEmails.email.length ; i++) {
      if (inputtedEmailCheck == registeredEmails.email[i]) {
         break  
      }
   }

}

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


