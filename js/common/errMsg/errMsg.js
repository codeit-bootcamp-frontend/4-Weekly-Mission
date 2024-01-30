//에러 메시지 div 요소에 내용 추가
const setErrMsg = (inputVal, txt) => {
  const errMsgDiv = inputVal.nextElementSibling;
  inputVal.classList.add('invalid');
  errMsgDiv.textContent = txt;
  errMsgDiv.classList.add('red');
  errMsgDiv.classList.add('input-font-size');  
}

export default setErrMsg;