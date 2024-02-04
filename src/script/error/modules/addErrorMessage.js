// 에러 메세지 추가
export default function addErrorMessage(target, errorMsg) {
    target.innerText = errorMsg;
    target.style.display = "block";
}
