import { useEffect, useState } from "react";

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_MONTH = 2592000;
const SECONDS_IN_YEAR = 31536000;

const useTimeAgo = (createdAt) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calcTimeAgo = () => {
      const today = new Date();
      const day = new Date(createdAt);
      const diff = Math.floor((today - day) / 1000);

      if (diff < SECONDS_IN_MINUTE) {
        return "1 minute ago";
      } else if (diff < SECONDS_IN_HOUR) {
        return `${Math.floor(diff / SECONDS_IN_MINUTE)} minutes ago`;
      } else if (diff < SECONDS_IN_DAY) {
        return diff < SECONDS_IN_HOUR
          ? "1 hour ago"
          : `${Math.floor(diff / SECONDS_IN_HOUR)} hours ago`;
      } else if (diff < SECONDS_IN_MONTH) {
        return diff < SECONDS_IN_DAY
          ? "1 day ago"
          : `${Math.floor(diff / SECONDS_IN_DAY)} days ago`;
      } else if (diff < SECONDS_IN_YEAR) {
        return diff < SECONDS_IN_MONTH
          ? "1 month ago"
          : `${Math.floor(diff / SECONDS_IN_MONTH)} months ago`;
      } else {
        return diff < SECONDS_IN_YEAR
          ? "1 year ago"
          : `${Math.floor(diff / SECONDS_IN_YEAR)} years ago`;
      }
    };

    setTimeAgo(calcTimeAgo());
  }, [createdAt]);

  return timeAgo;
};

export default useTimeAgo;