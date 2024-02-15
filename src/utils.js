function DiffDate(value) {
  const date = new Date(value);
  const current = new Date();
  const diffMinutes = Math.ceil((current - date) / (1000 * 60));

  if (diffMinutes < 2) return '1 minute ago';
  if (diffMinutes <= 59) return `${diffMinutes} minutes ago`;

  const diffHours = Math.ceil(diffMinutes / 60);
  if (diffHours < 2) return '1 hour ago';
  if (diffHours < 24) return `${diffHours} hours ago`;

  const diffDays = Math.ceil(diffHours / 24);
  if (diffDays < 2) return '1 day ago';
  if (diffDays < 31) return `${diffDays} days ago`;

  const diffMonths = Math.ceil(diffDays / 30);
  if (diffMonths < 2) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;

  if (diffMonths < 24) return '1 year ago';
  return `${Math.floor(diffMonths / 12)}`;
}

export { DiffDate };
