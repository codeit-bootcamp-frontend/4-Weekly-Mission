//메일 검증용 API링크 https://bootcamp-api.codeit.kr/docs

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const pwRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


const EmailRegisterStatusInServer = async function (inputtedAccountEmail) {
   const EmailWhichWantToBeCheck = {email : inputtedAccountEmail}
   const responseAboutAccountData = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method : 'POST',
      headers : {
         "Content-type": "application/json"
      },
      body : JSON.stringify(EmailWhichWantToBeCheck)
   });
   return responseAboutAccountData.status
}

// 체크 함수
const isValidEmail = (text) => (Boolean(text.match(emailRegEx)));
const isValidPw = (password) => (Boolean(password.match(pwRegEx)));
const isValidPwChecking = (inputtedPw, inputtedPwCheck) => (inputtedPw == inputtedPwCheck);


export {isValidEmail, isValidPw, isValidPwChecking, EmailRegisterStatusInServer};