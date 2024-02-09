import React from 'react'
import './Card.css'

const Card = ({imgSrc='', time='', title='', description=''}) => {

  return (
    <div>
      <div className='card-info'>
        <div></div>
        <span></span>
        <span></span>
      </div>
      <img src={imgSrc} alt='이미지' className='card-img'/>
    </div>
  )
}

export default Card