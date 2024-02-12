import { calculateDateDifference, formatDate } from '../utils/DateCalculate';
import defaultImg from '../assets/logo.svg';

import './Card.css'

const Card = ({imgSrc, createdAt, title, description, url}) => {
  return (
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={imgSrc ?? defaultImg} alt='이미지' className='card-img'/>
        <div className='card-info'>
          <span className='time'>{calculateDateDifference(createdAt)}</span>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
      </a>
    </li>
  ) // ReactRouter는 아직 적용하지 않았습니다. 이유: 아직 진도가 나가지 않음.
}

export default Card;