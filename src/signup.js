//유효성 검사
function validateEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePass (password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

//에러 메세지 함수
function setErrorMessageToElement (input, message) {
  const ErrorMessageElement = input.parentElement.querySelector('.errorMessage');
  //에러메세지 중복 삭제
  if (ErrorMessageElement) {
    ErrorMessageElement.remove();
  }
  //에러 메세지 생성
  const err = document.createElement('p');
  err.classList.add('errorMessage');
  err.style.color = '#FF5B56';
  err.textContent = message;
  input.style.borderColor = '#FF5B56';
  input.parentElement.appendChild(err);
}

//이메일 에러메세지 출력
const emailInput = document.querySelector('#email');
emailInput.addEventListener('focusout', (e) => {
  const emailEmpty = emailInput.value.trim() === '';
  const inUsdEmail = emailInput.value === 'test@codeit.com';
  const findClassNameErrorMessage = emailInput.parentElement.querySelector('.errorMessage');
  
  if (emailEmpty) {
    setErrorMessageToElement (emailInput, '이메일을 입력해주세요.');
  } else if (!validateEmail(emailInput.value)) {
    setErrorMessageToElement (emailInput, '올바른 이메일 주소가 아닙니다.');
  } else if (inUsdEmail) {
    setErrorMessageToElement (emailInput, '이미 사용 중인 이메일입니다.');
  }
  //올바른 값으로 수정
  else if (validateEmail(emailInput.value)) {
    if (findClassNameErrorMessage) {
      findClassNameErrorMessage.remove();
      emailInput.style.borderColor = '#CCD5E3';
    }
  }
});

//비밀번호 에러메세지 출력
const passInput = document.querySelector('#pass');
passInput.addEventListener('focusout', (e) => {
  const passwordEmpty = passInput.value.trim() === '';
  const findClassNameErrorMessage = passInput.parentElement.querySelector('.errorMessage');
  
  if (passwordEmpty) {
    setErrorMessageToElement (passInput, '비밀번호를 입력해주세요.');
  } else if (!validatePass(passInput.value)) {
    setErrorMessageToElement (passInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  }
  //올바른 값으로 수정
  else if (validatePass(passInput.value)) {
    if (findClassNameErrorMessage) {
      findClassNameErrorMessage.remove();
      passInput.style.borderColor = '#CCD5E3';
    }
  }
})

//비밀번호 확인 에러메세지
const passCheckInput = document.querySelector('#passCheck');
passCheckInput.addEventListener('focusout', (e) => {
  const passwordCheck = passInput.value === passCheckInput.value;
  const passCheckEmpty = passCheckInput.value.trim() === '';
  const findClassNameErrorMessage = passCheckInput.parentElement.querySelector('.errorMessage');
  
  if (!passwordCheck) {
    setErrorMessageToElement (passCheckInput, '비밀번호가 일치하지 않습니다.');
  } else if (passCheckEmpty) {
    setErrorMessageToElement (passCheckInput, '비밀번호를 입력해주세요.');
  } else {
    if (findClassNameErrorMessage) {
      findClassNameErrorMessage.remove();
      passCheckInput.style.borderColor = '#CCD5E3';
    }
  }
});


//눈 모양 클릭
const toggle = document.querySelectorAll ('.fa-solid');
toggle.forEach (toggle => {
  toggle.addEventListener('click', (e) => {
    const toggleIcon = toggle.previousElementSibling;
    
    if (toggleIcon.type === 'password') {
      toggleIcon.type = 'text';
      toggle.classList.remove('fa-eye-slash');
      toggle.classList.add('fa-eye');
    } else {
      toggleIcon.type = 'password';
      toggle.classList.remove('fa-eye');
      toggle.classList.add('fa-eye-slash');
    }
  })
});

//회원가입 시도
// signForm.addEventListener('submit', (e) => {
//   const validateSignUp = validateEmail(emailInput.value) && validatePass(passInput.value);
//   //현재페이지에서 테스트
//   e.preventDefault();
  
//   if (validateSignUp) {
//     window.location.href = "./folder";
//   } else {
//     setErrorMessageToElement (emailInput, '이메일을 확인해주세요.');
//     setErrorMessageToElement (passInput, '비밀번호를 확인해주세요.');
//     setErrorMessageToElement (passCheckInput, '비밀번호를 확인해주세요.');
//   }
// });

const signForm = document.querySelector('.signup');
signForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userEmail = emailInput.value;

  // 중복확인
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail }),
    });

    if (response.ok) {
      const result = await response.json();
      // 중복확인 메세지 출력
      if (result.duplicate) {
        setErrorMessageToElement (emailInput, '이미 사용중인 이메일 입니다.');
      } else {
        // 성공
        const successSignUp = await fetch ('https://bootcamp-api.codeit.kr/docs/api/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail }),
        });

        if (successSignUp.ok) {
          const successSignUpResult = await successSignUp.json();
          window.location.href = './forder.html';
        } else {
          setErrorMessageToElement (emailInput, '이메일을 확인해주세요.');
          setErrorMessageToElement (passInput, '비밀번호를 확인해주세요.');
          setErrorMessageToElement (passCheckInput, '비밀번호를 확인해주세요.');
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
})

window.onload = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = './folder.html';
  }
};

// 구현이 제대로 된거같지 않음
// 비밀번호 확인 로직 추가 필요해보임