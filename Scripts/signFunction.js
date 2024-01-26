import {formatCheck} from './accountData.js'

const errorType = {
   email : '이메일을 입력해 주세요.',
   password : '비밀번호를 입력해 주세요.',
   mismatchEmail : '이메일을 확인해 주세요.',
   notIdentified : '식별되지 않은 로직 오류',
   mismatchPassword : '비밀번호를 확인해 주세요.',
   registeredEmail : '이미 사용중인 이메일입니다.',   
   emailNotValid : '올바른 이메일 주소가 아닙니다.',
   mismatchPasswordCheck : '비밀번호가 일치하지 않아요.',
   passwordNotValid : '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
};

const printError = function (erroredInput, messageSection, message) {
   erroredInput.classList.add('signError');
   messageSection.textContent = message;
};

// Focus
const inputFocus = function (errorSection) {
   event.target.classList.remove('signError');
   errorSection.textContent = '';
};

// Blur - 별다른 조건이 없을 경우, input의 값 유무
const inputBlur = function (errorMessage, errorMessageSection, customCondition = true, customConditionError = errorType.notIdentified) {
   const blurTarget = event.target;
   const sectionValue = blurTarget.value;
   const isEmailSection = blurTarget.type == 'email';

   // Email Input인 경우의 형식 검사. value가 null인 경우보다 먼저 검사하여 덮어씌우지 않게 함
   if (isEmailSection && !formatCheck(sectionValue)) {
      printError(blurTarget, errorMessageSection, errorType.emailNotValid);
   }  

   // customCondition 추가 검사. 기본적으론 Pass됨
   if (!customCondition) {
      printError(blurTarget, errorMessageSection, customConditionError);
   }

   if (!sectionValue) {
      printError(blurTarget, errorMessageSection, errorMessage);
   }
}


export {inputFocus, inputBlur, printError, errorType};