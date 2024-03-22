import { formatDistanceToNowStrict } from "date-fns";

export const formatDateRelative = (time: string) => {
  if (!time) return;
  const inputTime = new Date(time);
  const message = formatDistanceToNowStrict(inputTime, { addSuffix: true });
  return message;
};

export const formatDate = (time: string) => time.substring(0, 10);
