// 날짜가 정수로 떨어지도록 만들어주는 함수.
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export default formatDate;