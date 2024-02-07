const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//이메일 유효성 검사
function validateEmail(email) {
  return emailRegex.test(email);
}

export function getNewMessageElement(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.classList.add("empty-message");
  return messageElement;
}

export function updateInputState(input, message) {
  const messageContainer = input.parentElement;
  const existingMessage = messageContainer.querySelector("p");
  if (input.value.trim() === "") {
    // 입력 값이 비어있는 경우
    if (!existingMessage) {
      // 에러 메시지가 이미 존재하지 않는 경우에만 메시지를 추가
      messageContainer.appendChild(message);
    }
    input.classList.add("empty-input");
  } else {
    if (existingMessage) {
      // 입력 값이 비어있지 않은 경우 에러 메시지가 이미 존재하면 제거
      existingMessage.remove();
    }
    input.classList.remove("empty-input");
  }
}

export function handleEmailValidation(input) {
  handleValidation(
    input,
    getNewMessageElement("올바른 이메일 주소가 아닙니다."),
    validateEmail
  );
}

export function handleValidation(input, messageElement, validationFunction) {
  const messageContainer = input.parentElement;
  const existingMessage = messageContainer.querySelector("p");

  // 유효성 검사 함수 호출 및 결과에 따라 처리
  const isValid = validationFunction(input.value);
  if (!isValid) {
    // 유효하지 않은 경우
    if (!existingMessage) {
      messageContainer.appendChild(messageElement);
    }
    input.classList.add("empty-input");
  } else {
    // 유효한 경우
    if (
      existingMessage &&
      existingMessage.textContent === messageElement.textContent
    ) {
      // 기존 메시지가 존재하고, 새로 추가할 메시지와 동일한 경우에만 제거
      existingMessage.remove();
    }
    input.classList.remove("empty-input");
  }

  // 유효성 검사 결과 반환
  return isValid;
}

//눈 모양 아이콘 이벤트
export const toggleEye = (input) => {
  const eyeOff = "/images/eye-off.svg";
  const eyeOn = "/images/eye-on.svg";

  if (input.type === "password") {
    input.type = "text";
    input.nextElementSibling.src = eyeOn;
  } else {
    input.type = "password";
    input.nextElementSibling.src = eyeOff;
  }
};
