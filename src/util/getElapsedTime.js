const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const timeDiff = now - createdAtDate;
  const MINUTE = 60000;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = MONTH * 12;

  if (YEAR * 2 <= timeDiff) return `${Math.floor(timeDiff / 12)} years ago`;

  if (YEAR < timeDiff) return "1 year ago";

  if (MONTH * 2 <= timeDiff)
    return `${Math.floor(timeDiff / MONTH)} months ago`;

  if (MONTH + DAY <= timeDiff) return "1 month ago";

  if (DAY * 2 <= timeDiff) return `${Math.floor(timeDiff / DAY)} days ago`;

  if (DAY < timeDiff) return "1 day ago";

  if (HOUR * 2 <= timeDiff) return `${Math.floor(timeDiff / HOUR)} hours ago`;

  if (HOUR < timeDiff) return "1 hour ago";

  if (MINUTE * 2 <= timeDiff)
    return `${Math.floor(timeDiff / MINUTE)} minutes ago`;

  if (MINUTE < timeDiff) return "1 minute ago";
};

export default getElapsedTime;
