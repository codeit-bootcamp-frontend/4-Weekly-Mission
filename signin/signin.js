//허용되는 데이터
const mockUp = {
  rightEmail: (value) => value === "test@codeit.com",
  rightPassword: (value) => value === "codeit101",
};

//Dom
const $form = document.querySelector(".sign-form");

const $inputList = [...$form.querySelectorAll("input")];
const $errorMessageList = [...document.querySelectorAll(".errorMessage")];

//validator
const formValidator = {
  validationMap: {
    email: ["requireEmail", "mustBeEmailFormation"],
    password: ["requirePassword"],
  },
  //존재하면 validate의 return이 true.
  vaildations: {
    requireEmail: {
      validate: (value) => Boolean(value),
      message: "이메일을 입력해주세요",
    },

    mustBeEmailFormation: {
      validate: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      message: "올바른 이메일 주소가 아닙니다",
    },

    requirePassword: {
      validate: (value) => Boolean(value),
      message: "비밀번호를 입력해주세요",
    },
  },

  findIvnalidKey(name, value) {
    const validationList = this.validationMap[name];
    const invalidKey = validationList.find(
      (key) => !this.vaildations[key].validate(value)
    );

    return invalidKey;
  },
};

const errorMessageStatus = ($target, invalidKey) => {
  const { name } = $target;

  const errorMessageNode = $errorMessageList.find((node) =>
    node.classList.contains(name)
  );

  if (invalidKey) {
    $target.classList.add("input-error");
    errorMessageNode.textContent =
      formValidator.vaildations[invalidKey].message;
  } else {
    $target.classList.remove("input-error");
    errorMessageNode.textContent = "";
  }
};

//focusout 콜백 함수
const handleInputFocusout = ({ target }) => {
  const { value, name } = target;

  const invalidKey = formValidator.findIvnalidKey(name, value);
  errorMessageStatus(target, invalidKey);
};

//input 두 개에 대해서 focusout event가 발생하면 handleInputFocusout 실행
$inputList.forEach(($input) =>
  $input.addEventListener("focusout", handleInputFocusout)
);

//주어진 아이디, 비번 아니면 로그인 불가

$form.addEventListener("submit", function (e) {
  console.log(
    !mockUp.rightEmail($inputList[0].value) ||
      !mockUp.rightPassword($inputList[1].value)
  );
  if (
    !mockUp.rightEmail($inputList[0].value) ||
    !mockUp.rightPassword($inputList[1].value)
  ) {
    e.preventDefault();
  }
});

//초기 로직

// focusout 이벤트 리스너
// emailInput.addEventListener("focusout", function (e) {
//   let email = e.target.value;

//   if (email === "") {
//     errorMessage.style.display = "block";
//     emailInput.style.borderColor = "var(--Linkbrary-red)";
//   } else {
//     errorMessage.style.display = "none";
//   }
// });

// focusout 이벤트 리스너
// passwordInput.addEventListener("focusout", function (e) {
//   let password = e.target.value;
//   const errorMessage = form.getElementById("errorMessage-password");

//   if (password === "") {
//     errorMessage.style.display = "block";
//     passwordInput.style.borderColor = "var(--Linkbrary-red)";
//   } else {
//     errorMessage.style.display = "none";
//   }
// });

// focusin 이벤트 리스너
// emailInput.addEventListener("focusin", function () {
//   const errorMessage = form.getElementById("errorMessage-password");
//   errorMessage.style.display = "none";
// });

// focusin 이벤트 리스너
// passwordInput.addEventListener("focusin", function () {
//   const errorMessage = form.getElementById("errorMessage-password");
//   errorMessage.style.display = "none";
// });

// 유효성 검사
// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = form.getElementsByClassName("sign-form")[0];

//   loginForm.addEventListener("submit", function (e) {
//     const emailInput = e.target.value;
//     const passwordInput = passwordInput.value;

//     let isValid = true;

//     if (!patternMap.emailValidation(emailInput)) {
//       form.getElementById("errorMessage-email").textContent =
//         "유효하지 않은 이메일 주소입니다.";
//       form.getElementById("errorMessage-email").style.display = "block";
//       emailInput.style.borderColor = "var(--Linkbrary-red)";
//       isValid = false;
//     } else if (!mockUp.rightEmail(emailInput)) {
//       document.getElementById("errorMessage-email").textContent =
//         "이메일을 확인해주세요.";
//       document.getElementById("errorMessage-email").style.display = "block";
//       emailInput.style.borderColor = "var(--Linkbrary-red)";
//       isValid = false;
//     }

//     if (!mockUp.rightPassword(passwordInput)) {
//       document.getElementById("errorMessage-password").textContent =
//         "비밀번호를 확인해주세요.";
//       document.getElementById("errorMessage-password").style.display = "block";
//       passwordInput.style.borderColor = "var(--Linkbrary-red)";
//       isValid = false;
//     }

//     if (!isValid) {
//       e.preventDefault(e);
//     } else {
//       document.getElementById("errorMessage-email").style.display = "none";
//       document.getElementById("errorMessage-password").style.display = "none";
//     }
//   });
// });
