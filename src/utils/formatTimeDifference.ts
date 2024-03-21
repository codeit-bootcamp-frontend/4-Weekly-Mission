function formatTimeDifference(value: Date) {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(value).getTime();

  const units = [
    { label: 'year', duration: 365 * 24 * 60 * 60 * 1000 },
    { label: 'month', duration: 30 * 24 * 60 * 60 * 1000 },
    { label: 'day', duration: 24 * 60 * 60 * 1000 },
    { label: 'hour', duration: 60 * 60 * 1000 },
    { label: 'minute', duration: 60 * 1000 },
  ];

  for (const unit of units) {
    const diffInUnit = Math.floor(diffInMilliseconds / unit.duration);

    if (diffInUnit === 1) {
      return `1 ${unit.label} ago`;
    } else if (diffInUnit > 1) {
      return `${diffInUnit} ${unit.label}s ago`;
    }
  }
}

export default formatTimeDifference;
