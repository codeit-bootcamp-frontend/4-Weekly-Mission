const calculateTimePassed = (createdAt) => {
  const NOW = new Date();
  const CREATED_AT = new Date(createdAt);
  const TIME_PASSED = Date.parse(NOW) - Date.parse(CREATED_AT);
  const MINUTES_PASSED = TIME_PASSED / 1000 / 60;
  const HOURS_PASSED = MINUTES_PASSED / 60;
  const DAYS_PASSED = HOURS_PASSED / 24;
  const MONTHS_PASSED = DAYS_PASSED / 31;
  const YEARS_PASSED = DAYS_PASSED / 365;
  const YEARS_TO_MONTHS = Math.round(YEARS_PASSED * 12);

  if (MINUTES_PASSED < 2) return `1 minute ago`;
  else if (MINUTES_PASSED <= 59) return `${MINUTES_PASSED} minutes ago`;
  else if (HOURS_PASSED <= 1) return `1 hour ago`;
  else if (HOURS_PASSED <= 23) return `${HOURS_PASSED} housrs ago`;
  else if (DAYS_PASSED <= 1) return `1 day ago`;
  else if (DAYS_PASSED <= 30) return `${DAYS_PASSED} days ago`;
  else if (MONTHS_PASSED <= 1) return `1 month ago`;
  else if (YEARS_TO_MONTHS <= 11) return `${YEARS_TO_MONTHS} months ago`;
  else if (YEARS_PASSED < 2) return `1 year ago`;
  else return `${Math.trunc(YEARS_PASSED)} years ago`;
};

const LinkItem = ({ link }) => {
  const CREATED_AT = new Date(link.createdAt);
  const YEAR = CREATED_AT.getFullYear();
  const MONTH = CREATED_AT.getMonth() + 1;
  const DATE = CREATED_AT.getDate();
  const CREATED_DATE = `${YEAR}. ${MONTH}. ${DATE}`;

  return (
    <div className="LinkItem">
      <a href={link.url}>
        <img src={link.imageSource} alt="링크 이미지" />
      </a>
      <p>{calculateTimePassed(CREATED_AT)}</p>
      <p>{link.description}</p>
      <p>{CREATED_DATE}</p>
    </div>
  );
};

const LinkItems = ({ links = [] }) => {
  return (
    <div className="LinkItems">
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkItems;
