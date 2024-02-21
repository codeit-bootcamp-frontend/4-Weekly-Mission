import { calculateDateDifference, formatDate } from '../utils/dateCalculate';
import defaultImg from '../assets/logo.svg';
import starIcon from '../assets/icon/star.svg';
import kebabIcon from '../assets/icon/kebab.svg';

import './Card.css'

const Card = ({imgSrc, createdAt, title, description, url}) => {
  return (
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={imgSrc ?? defaultImg} alt='이미지' className='card-img' />
      </a>
        <div className='card-info'>
          <div className='container-kebab'>
            <span className='time'>{calculateDateDifference(createdAt)}</span>
            <img src={kebabIcon} alt='목록' className='card-info_kebab' />
          </div>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
      <img src={starIcon} alt='중요 표시' className='card-img_star-icon' />
    </li>
  )
}

export default Card;
