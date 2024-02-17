function diffTime(value) {
  const now = new Date();
  const date = new Date(value);
  const diff = now - date;
  const min = Math.floor(diff/1000/60);
  const hour = Math.floor(diff/1000/60/60);
  const day = Math.floor(diff/1000/60/60/24);
  const month = Math.floor(diff/1000/60/60/24/30);

  const result = min < 2 ? '1 minute ago'
  : min < 60 ? `${min} minutes ago`
  : min === 60 ? '1 hour ago'
  : hour <= 23 ? `${hour} hours ago`
  : hour === 24 ? '1 day ago'
  : day <= 30 ? `${day} days ago`
  : day === 31 ? '1 month ago'
  : month <= 11 ? `${month} months ago`
  : month === 12 ? '1 year ago'
  : `${Math.floor(month/12)} years ago`;

  return result
}

export default diffTime;