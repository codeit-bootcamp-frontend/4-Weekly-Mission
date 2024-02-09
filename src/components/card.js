import '../css/card.css';
import ErrorImage from '../image/image1.png';
function time(date){
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (minutes < 2) {
        return '1 minute ago';
      } else if (minutes < 60) {
        return `${minutes} minutes ago`;
      } else if (hours < 2) {
        return '1 hour ago';
      } else if (hours < 24) {
        return `${hours} hours ago`;
      } else if (days < 2) {
        return '1 day ago';
      } else if (days < 30) {
        return `${days} days ago`;
      } else if (months < 2) {
        return '1 month ago';
      } else if (months < 12) {
        return `${months} months ago`;
      } else if (years < 2) {
        return '1 year ago';
      } else {
        return `${years} years ago`;
      }
}

function card({items}){

  return items.map((item) => (
        <a href={item.url} className="card" key={item.id}>
          <div className="imgSection">
            <img src={item.imageSource||ErrorImage} alt={item.title}></img>
          </div>
          <div className="infoSection">
            <span className="time">{time(item.createdAt)}</span>
            <span className="info">{item.title}</span>
            <span className="date">{item.description}</span>
          </div>
        </a>
      ));
}

export default card;