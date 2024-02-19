import imgNone from "../imgs/이미지 없을 때 배경.svg";

function dateDiff(createdAt) {
  const present = Date.now();
  const createdLinkDate = new Date(createdAt);
  const diff = present - createdLinkDate;
  if (diff < 3600000) {
    return `${Math.floor(diff / 1000 / 60)} minutes ago`;
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 1000 / 60 / 60)} hours ago`;
  } else if (diff < 2628000000) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24)} days ago`;
  } else if (diff < 31540000000) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30)} months ago`;
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
