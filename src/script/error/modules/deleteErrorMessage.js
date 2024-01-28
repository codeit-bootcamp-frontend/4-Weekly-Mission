// 에러 메세지 삭제
export default function deleteErrorMessage(value) {
    value.innerText = "";
    value.style.display = "none";
}
