import TIME from 'constants/TIME';

const calculateTimeDifference = (time) => {
  const formatTimeUnit = (value, unit) => {
    return value === 1 ? `1 ${unit} ${TIME.AGO}` : `${value} ${unit}s ${TIME.AGO}`;
  };

  const createdDateTime = new Date(time).getTime();
  const diff = new Date().getTime() - createdDateTime;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years) return formatTimeUnit(years, TIME.YEAR);
  if (months && months <= 11) return formatTimeUnit(months, TIME.MONTH);
  if (days && days <= 30) return formatTimeUnit(days, TIME.DAY);
  if (hours && hours <= 23) return formatTimeUnit(hours, TIME.HOUR);
  if (minutes && minutes <= 59) return formatTimeUnit(minutes, TIME.MINUTE);
};

export default calculateTimeDifference;
