function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2); // months는 0부터 시작하므로 +1 적용
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}. ${month}. ${day}`;
}

export default formatDate;
