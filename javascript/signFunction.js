const inputFunction = {
  // 이메일 입력란에 focus 일 때 이벤트 핸들러
  emailFocus: (e) => {
    e.target.classList.remove('input-error')
    e.target.parentElement.lastElementChild.textContent = ''
  },

  // 이메일 입력란에서 blur 일 때 이벤트 핸들러
  emailBlur: (e, emailRegex, accountInfo, inputEmail, signupValidation = false) => {
    const matchingAccountEmail = accountInfo.find((item) => item.email === inputEmail?.value)
  
    if (e.target.value === '') {
      e.target.classList.add('input-error')
      e.target.parentElement.lastElementChild.textContent = '이메일을 입력해 주세요.'
    }
    else if (!e.target.value.match(emailRegex)) {
      e.target.classList.add('input-error')
      e.target.parentElement.lastElementChild.textContent = '올바른 이메일 주소가 아닙니다.'
    }
    else if (signupValidation && e.target.value === matchingAccountEmail?.email) {
      e.target.classList.add('input-error')
      e.target.parentElement.lastElementChild.textContent = '이미 사용 중인 이메일입니다.'
    }
  },

  // 비밀번호 입력란에 focus 일 때 이벤트 핸들러
  passwordFocus: (e) => {
    e.target.classList.remove('input-error')
    e.target.parentElement.parentElement.lastElementChild.textContent = ''
  },

  // 비밀번호 입력란에서 blur 일 때 이벤트 핸들러
  passwordBlur: (e, passwordRegex, signupValidation = false) => {
    if (e.target.value === '') {
      e.target.classList.add('input-error')
      e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.'
    }
    else if (signupValidation && !e.target.value.match(passwordRegex)) {
      e.target.classList.add('input-error')
      e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    }
  },

  // 비밀번호 확인 입력란에 focus 일 때 이벤트 핸들러
  passwordCheckFocus: (e) => {
    e.target.classList.remove('input-error')
    e.target.parentElement.parentElement.lastElementChild.textContent = ''
  },

  // 비밀번호 확인 입력란에서 blur 일 때 이벤트 핸들러
  passwordCheckBlur: (e, inputPassword) => {
    if (e.target.value !== inputPassword.value) {
      e.target.classList.add('input-error')
      e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호가 일치하지 않아요.'
    }
  },
}

export { inputFunction }