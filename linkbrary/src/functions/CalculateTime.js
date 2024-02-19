const CalculateTime = (createdAtTime) => {
  const currentDays = new Date();
  let ElapsedTime = Math.floor((currentDays - createdAtTime) / 1000 / 60);

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

  ElapsedTime = Math.floor(ElapsedTime / 365);

  if (ElapsedTime < 1) {
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
      return `${12 - createdMonth + currentMonth - 1} months ago`;
    }
  }

  if (ElapsedTime >= 1) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "year" : "years"} ago`;
  }
};

export default CalculateTime;
