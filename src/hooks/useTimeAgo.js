import { useEffect, useState } from "react";

function useTimeAgo(createdAt) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calcTimeAgo = () => {
      const today = new Date();
      const day = new Date(createdAt);

      const diff = (today - day) / 1000;

      if (diff < 120) {
        return "1 minute ago";
      } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
      } else if (diff < 86400) {
        if (diff < 7200) {
          return "1 hour ago";
        } else {
          return `${Math.floor(diff / 3600)} hours ago`;
        }
      } else if (diff < 2592000) {
        if (diff < 172800) {
          return "1 day ago";
        } else {
          return `${Math.floor(diff / 86400)} days ago`;
        }
      } else if (diff < 7948800) {
        if (diff < 5184000) {
          return "1 month ago";
        } else {
          return `${Math.floor(diff / 2592000)} months ago`;
        }
      } else if (diff < 31536000) {
        if (diff < 6307200) {
          return "1 year ago";
        } else {
          return `${Math.floor(diff / 2628000)} years ago`;
        }
      } else {
        return `${Math.floor(diff / 31536000)} years ago`;
      }
    };

    setTimeAgo(calcTimeAgo());
  }, [createdAt]);

  return timeAgo;
}

export default useTimeAgo;
