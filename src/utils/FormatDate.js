/**
 * 날짜값을 받아 형태를 변경
 * @param date
 * @returns 'yyyy. m. dd'
 */

const FormatDate = (date) => {
  const getDate = new Date(date);
  return `${getDate.getFullYear()}. ${
    getDate.getMonth() + 1
  }. ${getDate.getDate()}`;
};

export default FormatDate;
