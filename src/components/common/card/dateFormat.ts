export function formatAgo(createdAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const diffInMilliseconds = now - createdDate;
  const diffInMinutes = diffInMilliseconds / (1000 * 60);
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInMonths = diffInDays / 30;
  const diffInYears = diffInMonths / 12;

  if (diffInMinutes < 2) {
    return '1 minute ago';
  } else if (diffInMinutes <= 59) {
    return `${Math.floor(diffInMinutes)} minutes ago`;
  } else if (diffInHours < 1) {
    return '1 hour ago';
  } else if (diffInHours <= 23) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (diffInDays < 1) {
    return '1 day ago';
  } else if (diffInDays <= 30) {
    return `${Math.floor(diffInDays)} days ago`;
  } else if (diffInMonths < 1) {
    return '1 month ago';
  } else if (diffInMonths <= 11) {
    return `${Math.floor(diffInMonths)} months ago`;
  } else if (diffInYears < 1) {
    return '1 year ago';
  } else {
    return `${Math.floor(diffInYears)} years ago`;
  }
}

export function formatDate(createdAt) {
  return createdAt.split('T')[0];
}
