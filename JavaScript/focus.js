import {mailFormat} from './accountData.js'

// Focus
const inputFocus = function (event) {
   event.target.classList.remove('signError')
   event.target.parentElement.parentElement.lastElementChild.textContent = ''
}

// 이메일 Blur
const emailBlur = function (event) {
   const input = event.target
   const errorMessageSection = input.parentElement.parentElement.lastElementChild

   if (input.value == '') {
      input.classList.add('signError')
      errorMessageSection.textContent = '이메일을 입력해 주세요.'
   } else if (!input.value.match(mailFormat)) {
      input.classList.add('signError')
      errorMessageSection.textContent = '올바른 이메일 주소가 아닙니다.'
   }
}

// 패스워드 Blur
const passwordBlur = function (event) {
   if (event.target.value == '') {
      event.target.classList.add('signError')
      event.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.' 
   }
}

export {inputFocus, emailBlur, passwordBlur}