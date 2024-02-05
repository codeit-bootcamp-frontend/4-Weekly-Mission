/**
 * 에러메시지 Element와 inputElement를 받아서 에러메시지가 있을 시
 * 해당 input 요소에 클래스를 추가해 border 색상을 변경해주는 함수
 * @param {HTMLElement} messageElement - 메시지 Element
 * @param {HTMLElement} inputElement - input Element
 */
export const changeInputColor = (messageElement, inputElement) => {
  messageElement.innerHTML ? inputElement.classList.add("error") : inputElement.classList.remove("error");
};
