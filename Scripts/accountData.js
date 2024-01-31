//메일 검증용 API링크 https://bootcamp-api.codeit.kr/docs

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 가입된 회원
const registeredAccounts = [
   {email : 'test@codeit.com' , password : 'codeit101'}
];


// 형식 체크 함수
const formatCheck = (text) => (text.match(mailFormat));
const passFormatCheck = (password) => (password.match(passwordFormat));


// sign 체크 함수
const loginCheck = (inputEmail, inputPassword) => (
   registeredAccounts.find( (account) => account.email == inputEmail && account.password == inputPassword)
);

const accountCheck = (inputEmail) => (
   registeredAccounts.find((account) => account.email == inputEmail)
);

const isPwCheckWasCorrectWithPw = (inputtedPw, inputtedPwCheck) => (inputtedPw == inputtedPwCheck);


export {registeredAccounts, loginCheck, accountCheck, formatCheck, passFormatCheck, isPwCheckWasCorrectWithPw};