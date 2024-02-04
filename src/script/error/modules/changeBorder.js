// 테두리 색 바꾸기
export default function changeBorder(target, color = "red") {
    target.style.border = `1px solid var(--Linkbrary-${color})`;
}
