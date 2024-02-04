// 테두리 색 바꾸기
export function changeBorder(target, color = "red") {
    target.style.border = `1px solid var(--Linkbrary-${color})`;
}

// 에러 메세지 추가
export function addErrorMessage(target, errorMsg) {
    target.innerText = errorMsg;
    target.style.display = "block";
}

// 에러 메세지 삭제
export function deleteErrorMessage(target) {
    target.innerText = "";
    target.style.display = "none";
}
