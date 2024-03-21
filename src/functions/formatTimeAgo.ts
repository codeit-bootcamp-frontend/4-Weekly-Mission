export function formatTimeAgo(createdAt: string) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffTime = now.getTime() - createdDate.getTime();
  const minute = Math.floor(diffTime / (1000 * 60));
  const hour = Math.floor(minute / 60);
  const day = Math.floor(minute / (60 * 24));
  const month = Math.floor(minute / (60 * 24 * 30));
  const years = Math.floor(minute / (60 * 24 * 30 * 12));

  if (minute < 2) return '1 minute ago';
  if (minute <= 59) return `${minute} ${'minutes ago'}`;
  if (minute < 60 * 24)
    return hour === 1 ? '1 hour ago' : `${hour} ${'hours ago'}`;
  if (minute < 60 * 24 * 30)
    return day === 1 ? '1 day ago' : `${day} ${'days ago'}`;
  if (minute < 60 * 24 * 30 * 12)
    return month === 1 ? '1 month ago' : `${month} ${'months ago'}`;
  if (years === 1) return '1 year ago';
  return `${years} ${'years ago'}`;
}
