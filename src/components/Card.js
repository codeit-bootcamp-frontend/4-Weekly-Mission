import '../styles/Card.css';
import { getFormattedDate, getTimeAgo } from '../utils/date';

export default function Card({ data }) {
  const defaultImageSource = 'https://placehold.co/600x400';
  return (
    <div className="cardBox">
      <img src={data.imageSource || defaultImageSource} alt="카드 이미지" />
      <div className="cardDataArea">
        <div className="cardTimeAgo">{getTimeAgo(data.createdAt)}</div>
        <div className="cardDesc">{data.description}</div>
        <div className="cardCreatedAt">{getFormattedDate(data.createdAt)}</div>
      </div>
    </div>
  );
}
