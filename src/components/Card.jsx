import { useState } from 'react';

import { calculateDateDifference, formatDate } from '../utils/dateCalculate';

import defaultImg from '../assets/logo.svg';
import starIcon from '../assets/icon/star.svg';
import kebabIcon from '../assets/icon/kebab.svg';

import './Card.css'
import ModalLinkAdd from './modals/ModalLinkAdd';

const Card = ({imgSrc, createdAt, title, description, url, folderName, folderList}) => {
  const [isOpenKebab, setIsOpenKebab] = useState(false);
  const [isOpenModalLinkAdd, setIsOpenModalLinkAdd] = useState(false);

  const handleClickKebab = () => {
    setIsOpenKebab(!isOpenKebab);
  }

  const handleClickModalLinkAdd = () => {
    setIsOpenModalLinkAdd(!isOpenModalLinkAdd);
  }

  return (
    <>
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={imgSrc ?? defaultImg} alt='이미지' className='card-img' />
      </a>
        <div className='card-info'>
          <div className='container-kebab'>
            <span className='time'>{calculateDateDifference(createdAt)}</span>
            <img src={kebabIcon} alt='목록' className='card-info_kebab' onClick={handleClickKebab}/>
            {isOpenKebab && (
              <div>
                <button>삭제 하기</button>
                <button onClick={handleClickModalLinkAdd}>폴더에 추가</button>
              </div>
            )}
          </div>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
      <img src={starIcon} alt='중요 표시' className='card-img_star-icon' />
    </li>
     {isOpenModalLinkAdd && (
      <ModalLinkAdd title='폴더 추가' folderList={folderList} url={url} onClickModalLinkAdd={handleClickModalLinkAdd}/>
    )}
    </>
  )
}

export default Card;
