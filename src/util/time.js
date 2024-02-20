function formatDate(createdAt) {
  const date = new Date(createdAt);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function getTimeAgo(createdAt) {
  const date = new Date(createdAt);
  const currentDate = new Date();

  const diffDate = currentDate.getTime() - date.getTime();

  const minutes = Math.floor(diffDate / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 365);

  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  if (hours < 2) {
    return "1 hour age";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  }

  if (days < 2) {
    return "1 day ago";
  } else if (days < 31) {
    return `${days} days ago`;
  }

  if (months < 2) {
    return "1 month age";
  } else if (months < 12) {
    return `${months} months ago`;
  }

  if (years < 2) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}

export { getTimeAgo, formatDate };
