const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const registeredAccounts = [
   {email : 'test@codeit.com' , password : 'codeit101'}
]

const loginCheck = function (inputEmail, inputPassword) {
   return registeredAccounts.find( (account) => account.email == inputEmail && account.password == inputPassword)
}

export {mailFormat, registeredAccounts, loginCheck}