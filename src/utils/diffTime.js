import { 
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears
} from "date-fns";

function diffTime(value) {
  const now = new Date();
  const date = new Date(value);
  const min = differenceInMinutes(now, date);
  const hour = differenceInHours(now, date);
  const day = differenceInDays(now, date);
  const month = differenceInMonths(now, date);
  const year = differenceInYears(now, date);

  if (min < 2) return `1 minutes ago`;
  if (min < 60) return `${min} minutes ago`;
  if (hour < 24) return `${hour} hours ago`;
  if (day < 31) return `${day} days ago`;
  if (month < 12) return `${month} months ago`;
  if (month >= 12) return `${year} years ago`;
}

export default diffTime;