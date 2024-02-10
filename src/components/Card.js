import React from 'react'
import './Card.css'
import defaultImg from '../assets/logo.svg';

const Card = ({imgSrc, time, title, description, url}) => {
  const validateDefaultImg = (imgSrc) => {
    let img = imgSrc;
    if (!img) {
      return defaultImg;
    }
    return img
  }

  return (
    <div className='card'>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={validateDefaultImg(imgSrc)} alt='이미지' className='card-img'/>
        <div className='card-info'>
          <span className='time'></span>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{time}</span>
        </div>
      </a>
    </div>
  ) // ReactRouter는 아직 적용하지 않았습니다. 이유: 아직 진도가 나가지 않음.
}

export default Card;