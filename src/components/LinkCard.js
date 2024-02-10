import '../styles/LinkCard.css';

/**
 * 1000미리초 -> 1초
 * 60초 -> 1분
 * 1000 * 60 * 2 -> 2분
 * 1000 * 60 * 60 -> 1시간
 * 1000 * 60 * 60 * 24 -> 24시간 (1일);
 * 1000 * 60 * 60 * 24 * 31
 *
 */

const getElapsedTimeMessage = createdAtTime => {
  const currentDays = new Date();
  let ElapsedTime = Math.floor((currentDays - createdAtTime) / 1000 / 60);

  if (ElapsedTime < 2) {
    return '1 minute ago';
  }

  if (ElapsedTime < 60) {
    return `${ElapsedTime} minutes ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 60);

  if (ElapsedTime < 24) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'hour' : 'hours'} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 24);

  if (ElapsedTime < 31) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'day' : 'days'} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 365);

  if (ElapsedTime < 1) {
    const currentYear = currentDays.getFullYear();
    const currentMonth = currentDays.getMonth() + 1;
    const currentDate = currentDays.getDate();
    const createdYear = createdAtTime.getFullYear();
    const createdMonth = createdAtTime.getMonth() + 1;
    const createdDate = createdAtTime.getDate();

    if (currentYear === createdYear) {
      if (currentDate >= createdDate) {
        return `${currentMonth - createdMonth} months ago`;
      }
      return `${currentMonth - createdMonth - 1} months ago`;
    }
    if (currentYear > createdYear) {
      if (currentDate >= createdDate) {
        return `${12 - createdMonth + currentMonth} months ago`;
      }
      return `${12 - createdMonth + currentMonth - 1} months ago`;
    }
  }

  if (ElapsedTime >= 1) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'year' : 'years'} ago`;
  }
};

function LinkCard({ url, createdAt, desc, imgUrl }) {
  const createdDays = new Date(createdAt);

  // const elapsedTime = new Date() - Number(createdDays);

  return (
    <a href={url} className="link-card-area">
      <div className="img-group">
        {imgUrl ? <img src={imgUrl} alt="미리보기" className="img-card" /> : <div className="img-card no-img"></div>}
      </div>
      <div className="card-info-group">
        <p className="elapsed-time">{getElapsedTimeMessage(createdDays)}</p>
        <p className="desc">{desc}</p>
        <p className="date">{`${createdDays.getFullYear()}. ${createdDays.getMonth() + 1}. ${createdDays.getDate()}`}</p>
      </div>
    </a>
  );
}

export default LinkCard;
