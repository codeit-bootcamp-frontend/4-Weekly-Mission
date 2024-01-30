const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 가입된 회원
const registeredAccounts = [
   {email : 'test@codeit.com' , password : 'codeit101'}
];


// 형식 체크 함수
const formatCheck = function (text) {return text.match(mailFormat);};
const passFormatCheck = function (password) {return password.match(passwordFormat);};


// sign 체크 함수
const loginCheck = (inputEmail, inputPassword) => (
   registeredAccounts.find( (account) => account.email == inputEmail && account.password == inputPassword)
);
const accountCheck = (inputEmail) => (
   registeredAccounts.find((account) => account.email == inputEmail)
);
const passCheckCorrect = (password, passCheck) => (password == passCheck);


export {registeredAccounts, loginCheck, accountCheck, formatCheck, passFormatCheck, passCheckCorrect};