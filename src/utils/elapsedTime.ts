import { UserCard } from "../pages/FolderPage";

const elapsedTime = (card: UserCard) => {
  const createdTime = new Date(
    card.createdAt || card.created_at || 1
  ).getTime();
  const currentTime = new Date().getTime();
  const timeDiff = Math.floor((currentTime - createdTime) / 1000 / 60);

  if (timeDiff < 2) return "1 minute ago";
  else if (timeDiff <= 59) return `${timeDiff} minutes ago`;
  else if (timeDiff <= 60 * 23) return `${Math.floor(timeDiff / 60)} hours ago`;
  else if (timeDiff <= 60 * 24 * 30)
    return `${Math.floor(timeDiff / 24 / 60)} days ago`;
  else if (timeDiff < 60 * 24 * 365)
    return `${Math.floor(timeDiff / 30 / 24 / 60)} months ago`;
  else return `${Math.floor(timeDiff / 30 / 24 / 60 / 12)} years ago`;
};

export default elapsedTime;
