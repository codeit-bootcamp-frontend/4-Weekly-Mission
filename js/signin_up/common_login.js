import { ERROR_MESSAGE } from "../../constant.js";
import { inputAddNode } from "../node.js";
import { pwdInput, pwdEyeIcon} from "../declaration.js";


// 에러 메세지 출력 함수
export function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  switch(errorCase) {
    case "NoEmail":
      inputAddNode('email', ERROR_MESSAGE.email.empty, errorCase);
      break;
    case "wrongEmail":
      inputAddNode('email', ERROR_MESSAGE.email.invalid, errorCase);
      break;
    case "inUseEmail":
      inputAddNode('email', ERROR_MESSAGE.email.inUse, errorCase);
      break;
    case "NoPwd" :
      inputAddNode('password', ERROR_MESSAGE.password.empty, errorCase);
      break;
    case "wrongPwd" :
      inputAddNode('password', ERROR_MESSAGE.password.invalid, errorCase);
      break;
    case "noMatchPwd" : 
      inputAddNode("password2", ERROR_MESSAGE.password.recheck, errorCase);
      break;
    case "Other": 
      inputAddNode('email', ERROR_MESSAGE.email.check, errorCase);
      inputAddNode('password', ERROR_MESSAGE.password.check, errorCase);
      break;
  }
 }


// password input 눈모양 클릭 실행 함수
export function EyePwd(EyeStatus) {
  EyeStatus.classList.contains('off') ? (
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-off.png"),
    pwdInput.setAttribute('type', 'password')
  ):(
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-on.png"),
    pwdInput.setAttribute('type', 'text')
  )
}
