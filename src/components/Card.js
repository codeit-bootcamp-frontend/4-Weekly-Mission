import './Card.css'
import defaultImg from '../assets/logo.svg';
import { calculateDateDifferences, extractDateFormat } from '../utils/DateCalculate';

const Card = ({imgSrc, time, title, description, url}) => {
  const timeDifference = calculateDateDifferences(time);
  const createdTime = extractDateFormat(time);

  return (
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={imgSrc ?? defaultImg} alt='이미지' className='card-img'/>
        <div className='card-info'>
          <span className='time'>{timeDifference}</span>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{createdTime}</span>
        </div>
      </a>
    </li>
  ) // ReactRouter는 아직 적용하지 않았습니다. 이유: 아직 진도가 나가지 않음.
}

export default Card;