import {formatCheck} from './accountData.js'

const ERROR_TYPE = {
   EMAIL_SECTION_BLANK : '이메일을 입력해 주세요.',
   EMAIL_MISMATCH_WITH_ACCOUNT : '이메일을 확인해 주세요.',
   EMAIL_IS_ALREADY_REGISTERED : '이미 사용중인 이메일입니다.',   
   EMAIL_IS_NOT_VALID : '올바른 이메일 주소가 아닙니다.',
   PW_MISMATCH_WITH_ACCOUNT : '비밀번호를 확인해 주세요.',
   PW_SECTION_BLANK : '비밀번호를 입력해 주세요.',
   PW_IS_NOT_VALID : '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
   PW_CHECK_MISMATCH_WITH_PASSWORD : '비밀번호가 일치하지 않아요.',
   ERROR_IS_NOT_IDENTIFIED : '식별되지 않은 로직 오류'
};

const isThisLoginWasSuccessful =  async function (TriedAccountInformation, url) {
   const serverResponseAboutAccount = await fetch (url, {
      method : 'POST',
         headers : {
            "Content-type": "application/json"
         }, 
      body : JSON.stringify(TriedAccountInformation)
   })
   return serverResponseAboutAccount.status == 200
}

const printError = function (erroredInput, messageSection, message) {
   erroredInput.classList.add('signError');
   messageSection.textContent = message;
};

// Focus
const inputFocus = function (e, errorSection) {
   e.target.classList.remove('signError');
   errorSection.textContent = '';
};

// Blur - 별다른 조건이 없을 경우, input의 값 유무
const inputBlur = function (e, errorMessageSection, errorMessage, customCondition = true, customConditionError = ERROR_TYPE.ERROR_IS_NOT_IDENTIFIED) {
   const sectionValue = e.target.value;
   const isEmailSection = e.target.type == 'email';

   // Email Input인 경우의 형식 검사. value가 null인 경우보다 먼저 검사하여 덮어씌우지 않게 함
   if (isEmailSection && !formatCheck(sectionValue)) {
      printError(e.target, errorMessageSection, ERROR_TYPE.EMAIL_IS_NOT_VALID);
   }  

   // customCondition 추가 검사. 기본적으론 Pass됨
   if (!customCondition) {
      printError(e.target, errorMessageSection, customConditionError);
   }

   if (!sectionValue) {
      printError(e.target, errorMessageSection, errorMessage);
   }
}


export {inputFocus, inputBlur, printError, isThisLoginWasSuccessful, ERROR_TYPE};