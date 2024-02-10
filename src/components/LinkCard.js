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
  const createdYear = createdAtTime.getFullYear();
  const createdMonth = createdAtTime.getMonth();
  const createdDate = createdAtTime.getDate();

  const currentDays = new Date();
  const currentYear = currentDays.getFullYear();
  const currentMonth = currentDays.getMonth();
  const currentDate = currentDays.getDate();

  const ElapsedTime = currentDays - createdAtTime;
  const timeToMinutes = ElapsedTime / 1000 / 60;

  if (timeToMinutes < 2) {
    return '1 minute ago';
  }

  if (ElapsedTime / 1000 / 60 < 60) {
    return `${Math.floor(ElapsedTime / 1000 / 60)} minutes ago`;
  }

  if (ElapsedTime / 1000 / 60 / 60 < 24) {
    return `${Math.floor(ElapsedTime / 1000 / 60 / 60)} hours ago`;
  }
  
  if (ElapsedTime / 1000 / 60 / 60 / 24 < 31) {
    return `${Math.floor(ElapsedTime / 1000 / 60 / 60 / 24)} days ago`;
  }

  if (ElapsedTime / 1000 / 60 / 60 / 24 / 365 < 1) {
    if (currentYear === createdYear) return `${(currentMonth - createdMonth) + 1} months ago`;
    if (currentYear > createdYear) return `${(12 - createdMonth) + currentMonth} months ago`
    
  }

  if (ElapsedTime / 1000 / 60 / 60 / 24 / 365 > 1) {
    // console.log(Math.floor(ElapsedTime / 1000 / 60 / 60 / 24 / 365))
    return `${currentYear - createdYear} years ago`;
  }
};

function LinkCard({ url, createdAt, desc, imgUrl }) {
  const createdDays = new Date(createdAt);

  // const elapsedTime = new Date() - Number(createdDays);

  return (
    <a href={url} className="link-card-area">
      <div className="img-group" >
        {imgUrl ? <img src={imgUrl} alt="미리보기" className="img-card" /> : <div className='img-card no-img'></div>}
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
