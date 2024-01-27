//요소 초기화
const init = (element) => {
  //다음 요소 확인
  const errMsgDiv = element.nextElementSibling;
  //텍스트 확인 될 시 텍스트 삭제, 빨간 테두리 제거
  if(errMsgDiv.textContent !== '') {
    errMsgDiv.textContent = '';
    element.classList.remove('invalid');
  }
}

export default init;