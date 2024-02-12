export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function getTimeDiff(value) {
  const diff = new Date() - new Date(value);
  if (diff < 3600000) {
    if (diff < 120000) return `1 minute ago`;
    return `${Math.floor(diff / 60000)} minutes ago`;
  }

  if (diff < 86400000) {
    if (diff < 7200000) return `1 hour ago`;
    return `${Math.floor(diff / 3600000)} hours ago`;
  }

  if (diff < 2629800000) {
    if (diff < 172800000) return `1 day ago`;
    return `${Math.floor(diff / 86400000)} days ago`;
  }

  if (diff < 31557600000) {
    if (diff < 5259600000) return `1 month ago`;
    return `${Math.floor(diff / 2629800000)} months ago`;
  }

  if (diff < 63115200000) return "1 year ago";
  return `${Math.floor(diff / 31557600000)} years ago`;
}
