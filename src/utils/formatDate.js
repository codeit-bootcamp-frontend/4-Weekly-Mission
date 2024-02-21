import { getYear, getMonth, getDate } from 'date-fns';

// 날짜가 정수로 떨어지도록 만들어주는 함수.
function formatDate(value) {
  const date = new Date(value);
  return `${getYear(date)}. ${getMonth(date) + 1}. ${getDate(date)}`;
}

export default formatDate;