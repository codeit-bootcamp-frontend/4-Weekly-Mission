export const calculateTimePassed = (createdAt) => {
  const NOW = new Date();
  const CREATED_AT = new Date(createdAt);
  const TIME_PASSED = NOW - CREATED_AT;
  const MINUTES_PASSED = TIME_PASSED / 1000 / 60;
  const HOURS_PASSED = MINUTES_PASSED / 60;
  const DAYS_PASSED = HOURS_PASSED / 24;
  const MONTHS_PASSED = DAYS_PASSED / 31;
  const YEARS_PASSED = DAYS_PASSED / 365;
  const YEARS_TO_MONTHS = Math.round(YEARS_PASSED * 12);

  if (MINUTES_PASSED < 2) return `1 minute ago`;
  if (MINUTES_PASSED <= 59) return `${MINUTES_PASSED} minutes ago`;
  if (HOURS_PASSED <= 1) return `1 hour ago`;
  if (HOURS_PASSED <= 23) return `${HOURS_PASSED} housrs ago`;
  if (DAYS_PASSED <= 1) return `1 day ago`;
  if (DAYS_PASSED <= 30) return `${DAYS_PASSED} days ago`;
  if (MONTHS_PASSED <= 1) return `1 month ago`;
  if (YEARS_TO_MONTHS <= 11) return `${YEARS_TO_MONTHS} months ago`;
  if (YEARS_PASSED < 2) return `1 year ago`;
  return `${Math.trunc(YEARS_PASSED)} years ago`;
};
