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
    email: ["requireEmail", "mustBeEmailFormation", "alreadyUsed"],
    password: ["requirePassword", "mustBePasswordFormation"],
    passwordconfirm: ["wrongPassword"],
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

    alreadyUsed: {
      validate: (value) => !mockUp.rightEmail(value),
      message: "이미 사용 중인 이메일입니다.",
    },

    mustBePasswordFormation: {
      validate: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
    },

    requirePassword: {
      validate: (value) => Boolean(value),
      message: "비밀번호를 입력해주세요",
    },

    wrongPassword: {
      validate: (value) => String(value) === String(password),
      message: "비밀번호가 일치하지 않아요.",
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

const errorMessageStatus = ($errorMessageList, $target, invalidKey) => {
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
const handleInputFocusout = ($target, $errorMessageList) => {
  const { value, name } = $target;
  const invalidKey = formValidator.findIvnalidKey(name, value);
  errorMessageStatus($errorMessageList, $target, invalidKey);
};
//password 확인을 위해 저장
let password;
$inputList[1].addEventListener("input", function (e) {
  password = e.target.value;
});

//눈 모양 클릭하면 비번 보이고 다시 한 번 클릭하면 비번 가려지기
const eyeImages = $form.querySelectorAll("img");
eyeImages.forEach((eyeImage) =>
  eyeImage.addEventListener("click", function (e) {
    console.log("click");
    let currentType = e.target.parentElement.querySelector("input").type;
    if (currentType === "text") {
      e.target.src = "../assets/eye-off.png";
      e.target.parentElement.querySelector("input").type = "password";
    } else {
      e.target.src = "../assets/eye-on.png";
      e.target.parentElement.querySelector("input").type = "text";
    }
  })
);
export { mockUp, handleInputFocusout, errorMessageStatus, formValidator };
