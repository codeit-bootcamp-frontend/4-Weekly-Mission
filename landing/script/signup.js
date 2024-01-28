//DOM, 유사 배열들을 배열로 바꿈
const $loginForm = document.querySelector(".sign-form");
const $emailInput = document.querySelector("input[name=email]");
const $passwordInput = document.querySelector("input[name=password]");
const $pwdCorrectInput = document.querySelector("input[name=pwdCorrect]");
const $formInputList = [...document.querySelectorAll(".sign-input")];
const $errorMsgList = [...document.querySelectorAll(".error-msg-box")];

// 이메일과 비밀번호를 검사하는 정규 표현식 선언
const regexEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const regexPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//key값 선언
const keyEmail = "test@codeit.com";
const keyPassword = "codeit101";

//변수 eyeButtom과 eyeImg 선언
const eyeButton = document.querySelector(".eye-button");
const eyeButtonCorrect = document.querySelector(".eye-button-correct");
const eyeImg = document.querySelector(".eye-button img");
const eyeImgCorrect = document.querySelector(".eye-button-correct img");

//유효성 검사 함수
const validator = {
  required: {
    validate: (value) => Boolean(value),
    message: (name) => `${name} 입력해주세요`,
  },
  needEmailChar: {
    validate: (value) => regexEmail.test(value),
    message: `올바른 이메일 주소를 입력해주세요`,
  },
  needPasswordChar: {
    validate: (value) => regexPwd.test(value),
    message: `비밀번호는 문자와 숫자가 들어가고 8자리 이상이어야 합니다`,
  },
  needPwdCorrect: {
    validate: (value) => $passwordInput.value === value,
    message: `비밀번호와 다릅니다`,
  },
};

// input의 종류별로 행해질 유효성 검사를 배열로 구분한다
const validationMap = {
  email: ["required", "needEmailChar"],
  password: ["required", "needPasswordChar"],
  pwdCorrect: ["needPwdCorrect"],
};

// form input의 각 요소에서 이벤트 발생 시 handleInputFocusout 함수를 실행한다
$formInputList.forEach(($input) =>
  $input.addEventListener("focusout", (event) => {
    handleInputFocusout(event);
  })
);

// errorStatus 제거 함수
function removeErrorStatus($target) {
  const { name } = $target;
  const errorMsgNode = document.getElementById(`error-msg-${name}`);

  if (errorMsgNode) {
    errorMsgNode.textContent = "";
    $target.classList.remove("error-msg");
  }
}

// errorStatus 추가 함수
function createErrorStatus($target, invalidKey) {
  const { name } = $target;
  const nameMap = {
    email: "이메일을",
    password: "비밀번호를",
  };
  const errorMsgNode = document.getElementById(`error-msg-${name}`);
  $target.classList.add("error-msg");

  // errorMsgNode가 undefined인지 확인하고 validator[invalidKey]가 존재하는지도 확인
  if (errorMsgNode && validator[invalidKey]) {
    errorMsgNode.textContent = validator[invalidKey].message?.(nameMap[name]);
  }
}

// 포커스 아웃 이벤트 발생 시 제어하는 함수
function handleInputFocusout({ target }) {
  const { value, name } = target;

  const invalidKey = validationMap[name].find((key) =>
    // validator[key]가 undefined인지 확인하고, undefined가 아니면 validator[key].validate(value)를 실행
    validator[key] ? !validator[key].validate(value) : false
  );

  // invalidKey가 존재하고 validator[invalidKey]도 존재하면 createErrorStatus를 실행
  if (invalidKey && validator[invalidKey])
    createErrorStatus(target, invalidKey);
  else removeErrorStatus(target);
}

//key값 확인 후 ./folder/로 이동시킴
$loginForm.addEventListener("submit", (event) => {
  if ($emailInput.value === keyEmail && $passwordInput.value === keyPassword) {
    event.preventDefault();
    window.location.replace("./folder/");
  }
});

//eye-button 눌렀을 때 비밀번호 보이게 바뀜
eyeButton.addEventListener("click", () => {
  if ($passwordInput.type === "password") {
    $passwordInput.type = "text";
    eyeImg.src = "./images/eye-on.svg";
  } else if ($passwordInput.type === "text") {
    $passwordInput.type = "password";
    eyeImg.src = "./images/eye-off.svg";
  }
});
//eye-button-correct 눌렀을 때 비밀번호 보이게 바뀜
eyeButtonCorrect.addEventListener("click", () => {
  if ($pwdCorrectInput.type === "password") {
    $pwdCorrectInput.type = "text";
    eyeImgCorrect.src = "./images/eye-on.svg";
  } else if ($pwdCorrectInput.type === "text") {
    $pwdCorrectInput.type = "password";
    eyeImgCorrect.src = "./images/eye-off.svg";
  }
});
