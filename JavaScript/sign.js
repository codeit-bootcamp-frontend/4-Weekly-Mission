
const registeredEmails = {
   email: ['test@codeit.com'], 
   password: ['codeit01']
}

const inputtedEmailCheck = document.querySelector('email');
const inputtedPasswordCheck = document.querySelector('.input');
const orderCheckEmail = document.querySelector('button.button');

orderCheckEmail.onclick = function ()  {
   console.log('button test')
   for (let i = 0 ; i < registeredEmails.email.length ; i++) {
      if (inputtedEmailCheck == registeredEmails.email[i]) {
         break  
      }
   }

}




