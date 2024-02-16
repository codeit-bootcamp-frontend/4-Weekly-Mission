import { formatDistanceToNowStrict } from "date-fns";

export const formatDateRelative = (time) => {
  const inputTime = new Date(time);
  const message = formatDistanceToNowStrict(inputTime, { addSuffix: true });
  return message;
};

export const formatDate = (time) => time.substring(0, 10);
