// 테두리 색 바꾸기
export default function changeBorder(value, color = "red") {
    value.style.border = `1px solid var(--Linkbrary-${color})`;
}
