// utiles.js 파일에서 필요한 모듈을 가져옵니다.
import {
  //변수
  emailInput,
  passwordInput,
  loginBtn,
  eyeButton,
  //함수
  validateEmail,
  validatePassword,
  showErrorMessage,
  //hideErrorMessage,
  togglePasswordVisibility,
} from "./utiles.js";

document.addEventListener("DOMContentLoaded", function () {
  // 이메일 입력 상자에 focus out
  emailInput.addEventListener("blur", function () {
    validateEmail(emailInput);
  });

  // 비밀번호 입력 상자에서 focus out
  passwordInput.addEventListener("blur", function () {
    validatePassword(passwordInput);
  });

  // 눈 모양 버튼 클릭
  eyeButton.addEventListener("click", function () {
    togglePasswordVisibility();
  });

  // 로그인 버튼 클릭
  loginBtn.addEventListener("click", function (event) {
    // 이벤트 기본 동작(폼 제출)을 막고
    event.preventDefault();
    // loginUser 함수를 실행합니다.
    loginUser();
  });

  // 엔터 키 입력
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      loginUser();
    }
  });

  // 로그인 유효성 확인
  function loginUser() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    //test@codeit.com
    const user = getUserByEmail(emailValue);

    // 특정 계정으로 로그인 했을 때
    if (!user) {
      //에러메세지 출력
      throw new error("이메일 또는 비밀번호를 확인하세요!");
    }

    const isPasswordMatching = user.password === password;

    if (!isPasswordMatching) {
      throw new Error("메일 또는 비밀번호를 확인하세요");
    }
    //로그인 무사 진행시 folder 페이지로 이동
    window.location.href = "./folder.html";
    /*
    if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
      window.location.href = "./folder.html";
    } else {
      // 로그인 실패 시 에러 메세지 출력
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message");
      errorDiv.textContent = "이메일 또는 비밀번호가 올바르지 않습니다.";
      showErrorMessage(errorDiv, emailInput);
      showErrorMessage(createPasswordError(), passwordInput);
      
    }*/
  }
  //특정 계정 아이디로 로그인 시도
  function getUserByEmail(email) {
    const user = { email: "test@codeit.com", password: "codeit101" };

    if (user.email === email) {
      return user;
    }

    return null;
  }

  // 비밀번호 확인
  function createPasswordError() {
    var errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = "비밀번호를 확인해 주세요.";
    return errorDiv;
  }
});
