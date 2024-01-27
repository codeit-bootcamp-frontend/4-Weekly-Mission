
import {
  
  //변수
  emailInput,
  passwordInput,
  verifypasswordInput,
  signupBtn,
  eyeButton,
  verifyEyeButton,

  //함수
  validateEmail,
  validatePassword,
  validateVerifyPassword,
  togglePasswordVisibility,
  //showErrorMessage,
  //hideErrorMessage,
  
} from './utiles.js';


document.addEventListener('DOMContentLoaded', function () {

  // 이메일 입력 상자에 focus out 
 emailInput.addEventListener('blur', function () {
  validateEmail(emailInput);
});

// 비밀번호 입력 상자에서 focus out 
passwordInput.addEventListener('blur', function () {
  validatePassword(passwordInput);
});

 // 비밀번호 확인 입력 상자에서 focus out 
 verifypasswordInput.addEventListener('blur', function () {
  validateVerifyPassword(passwordInput, verifypasswordInput);
});

  // 눈 모양 버튼 클릭 
  eyeButton.addEventListener('click', function () {
    togglePasswordVisibility(passwordInput, eyeButton);
  });

  // 눈 모양 버튼 클릭 (비밀번호 확인)
  verifyEyeButton.addEventListener('click', function () {
    toggleVerifyPasswordVisibility(verifypasswordInput, verifyEyeButton);
  });

 //비밀번호 확인란 눈 모양 버튼이 눌렸을 때
  function toggleVerifyPasswordVisibility() {
    const isPasswordVisible = verifypasswordInput.type === 'text';
    // 비밀번호 보이기/가리기 토글
    if (isPasswordVisible) {
      verifypasswordInput.type = 'password';
    } else {
      verifypasswordInput.type = 'text';
    }

    // 눈 모양 아이콘 변경
    const imgElement = verifyEyeButton.querySelector('img');
      if (isPasswordVisible) {
        imgElement.src = './images/eye-off.svg';
    } else {
        imgElement.src = './images/eye-on.svg';
    }
  }

  function signupUser() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    //특정 계정으로 로그인 했을 때
    //'이외의 유효햔 회원가입 시도 시 folder로 이동'해야하는데
    //'이외의 유효햔 회원가입'의 기준을 모르겠어서 이렇게 두어요.
    //test@codeit.com이 아니라면 이동.
    if (!(emailValue === 'test@codeit.com' && passwordValue === 'codeit101')) {
      window.location.href = './folder.html';
    }
  }

  // 회원가입 버튼 클릭 
  signupBtn.addEventListener('click', function (event) {
    //이벤트 기본 동작(폼 제출)을 막고
    event.preventDefault();
    //loginUser가 실행되도록 한다.
    signupUser();
  });

  // 엔터 키 입력 
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      signupUser();
    }
  });

});
