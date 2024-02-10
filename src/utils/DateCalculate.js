// 현재 날짜 및 시간
export function compareDateDifferences(rawDataTime) {
  const currentTime = new Date();
  const time = new Date(rawDataTime);

  const timeDifference = currentTime - time; // 시간 차

  const minutesDifference = timeDifference / (1000 * 60);
  const hoursDifference = minutesDifference / 60;
  const daysDifference = hoursDifference / 24;
  const monthsDifference = daysDifference / 30;
  const yearsDifference = monthsDifference / 12;

  let result;
  if (minutesDifference < 2) {
    result = "1분 전";
  } else if (minutesDifference <= 59) {
      result = `${Math.floor(minutesDifference)}분 전`;
  } else if (hoursDifference < 2) {
      result = "1시간 전";
  } else if (hoursDifference <= 23) {
      result = `${Math.floor(hoursDifference)}시간 전`;
  } else if (daysDifference < 2) {
      result = "1일 전";
  } else if (daysDifference <= 30) {
      result = `${Math.floor(daysDifference)}일 전`;
  } else if (monthsDifference < 2) {
      result = "1달 전";
  } else if (monthsDifference <= 11) {
      result = `${Math.floor(monthsDifference)}달 전`;
  } else if (yearsDifference < 2) {
      result = "1년 전";
  } else {
      result = `${Math.floor(yearsDifference)}년 전`;
  }
  return result;
}

export function extractDate(rawDataTime) {
  const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
  const match = rawDataTime.match(dateRegex);

  return match ? match[1] : null;
}