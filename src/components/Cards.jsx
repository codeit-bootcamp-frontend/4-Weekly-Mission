import imgNone from "../assets/이미지 없을 때 배경.svg";

function dateDiff(createdAt) {
  const present = Date.now();
  const createdLinkDate = new Date(createdAt);
  const diff = present - createdLinkDate;

  const TIME_TO_MS = {
    twoMinutes: 120000,
    oneHour: 3600000,
    twoHours: 7200000,
    oneDay: 86400000,
    twoDays: 172800000,
    oneMonth: 2628000000,
    twoMonths: 5256000000,
    oneYear: 31540000000,
    twoYears: 63070000000,
  };

  if (diff < TIME_TO_MS.twoMinutes) {
    return "1 minute ago";
  } else if (diff < TIME_TO_MS.oneHour) {
    return `${Math.floor(diff / 1000 / 60)} minutes ago`;
  } else if (diff < TIME_TO_MS.twoHours) {
    return "1 hour ago";
  } else if (diff < TIME_TO_MS.oneDay) {
    return `${Math.floor(diff / 1000 / 60 / 60)} hours ago`;
  } else if (diff < TIME_TO_MS.twoDays) {
    return "1 day ago";
  } else if (diff < TIME_TO_MS.oneMonth) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24)} days ago`;
  } else if (diff < TIME_TO_MS.twoMonths) {
    return "1 month ago";
  } else if (diff < TIME_TO_MS.oneYear) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30)} months ago`;
  } else if (diff < TIME_TO_MS.twoYears) {
    return "1 year ago";
  } else {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

const INITIAL_LINK_IMG = imgNone;

function Card({ link }) {
  const linkUrl = link.url;

  const handleCardClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div onClick={handleCardClick}>
      <img src={link?.imageSource ?? INITIAL_LINK_IMG} alt="미리보기 이미지" />
      <p>{dateDiff(link?.createdAt)}</p>
      <p>{link?.description}</p>
      <p> {link?.createdAt.slice(0, 10)}</p>
    </div>
  );
}

function Cards({ links }) {
  return (
    <ul>
      {links &&
        links.map((link) => (
          <li key={link.id}>
            <Card link={link} />
          </li>
        ))}
    </ul>
  );
}

export default Cards;
