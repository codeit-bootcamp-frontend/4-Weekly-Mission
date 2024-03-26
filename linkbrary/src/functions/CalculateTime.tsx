const CalculateTime = (createdAtTime: Date): string => {
  const currentDays = new Date();
  let ElapsedTime = Math.floor(
    (currentDays.getTime() - createdAtTime.getTime()) / 1000 / 60
  );

  if (ElapsedTime < 2) {
    return "1 minute ago";
  }

  if (ElapsedTime < 60) {
    return `${ElapsedTime} minutes ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 60);

  if (ElapsedTime < 24) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "hour" : "hours"} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 24);

  if (ElapsedTime < 31) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "day" : "days"} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 30.44); // 평균적으로 한 달을 30.44일로 계산

  if (ElapsedTime < 12) {
    const currentYear = currentDays.getFullYear();
    const currentMonth = currentDays.getMonth() + 1;
    const currentDate = currentDays.getDate();
    const createdYear = createdAtTime.getFullYear();
    const createdMonth = createdAtTime.getMonth() + 1;
    const createdDate = createdAtTime.getDate();

    if (currentYear === createdYear) {
      if (currentDate >= createdDate) {
        return `${currentMonth - createdMonth} months ago`;
      }
      return `${currentMonth - createdMonth - 1} months ago`;
    }
    if (currentYear > createdYear) {
      if (currentDate >= createdDate) {
        return `${12 - createdMonth + currentMonth} months ago`;
      }
      return `${11 - createdMonth + currentMonth} months ago`; // 12 대신 11을 사용하는 것이 더 정확할 수 있습니다.
    }
  }

  ElapsedTime = Math.floor(ElapsedTime / 12);

  if (ElapsedTime >= 1) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "year" : "years"} ago`;
  }

  return "Just now"; // ElapsedTime이 음수일 경우를 대비한 기본 반환 값
};

export default CalculateTime;
