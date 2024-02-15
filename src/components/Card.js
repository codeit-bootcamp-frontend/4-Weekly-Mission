import '../styles/Card.css';
import noneData from '../assets/images/none-data.png';

function Card() {


  return (
    <div className="card">
      <a href='/' target="_blank" rel="noreferrer">
        <div className="card-image-content">
          <img className="card-image" src={noneData} alt="저장한 링크로 갈 수 있는 카드." />
        </div>
        <div className="card-content">
          <div className="card-interval-date">XX XXXX ago</div>
          <div className="card-description">description</div>
          <div className="card-create-date">20XX.XX.XX</div>
        </div>
      </a>
    </div>
  );
}

export default Card;