import React from 'react'
import './Card.css'
import defaultImg from '../assets/logo.svg';

const Card = ({imgSrc, time, title, description}) => {
  const validateDefaultImg = (imgSrc) => {
    let img = imgSrc;
    if (!img) {
      return defaultImg;
    }
    return img
  }

  return (
    <div className='card'>
      <img src={validateDefaultImg(imgSrc)} alt='이미지' className='card-img'/>
      <div className='card-info'>
        <span className='time'></span>
        <span className='description'>{title}<br/>{description}</span>
        <span className='date'>{time}</span>
      </div>
    </div>
  )
}

export default Card