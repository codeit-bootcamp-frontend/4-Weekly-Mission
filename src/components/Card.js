import React from 'react';
import Empty_Star from '../assets/empty_star.svg'
import Kebab from '../assets/kebab.svg'

const getElapsedTime = (createdAtTime) => {
  const currentDays = new Date();
  let ElapsedTime = Math.floor((currentDays - createdAtTime) / 1000 / 60);

  if (ElapsedTime < 2) {
    return '1 minute ago';
  }

  if (ElapsedTime < 60) {
    return `${ElapsedTime} minutes ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 60);

  if (ElapsedTime < 24) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'hour' : 'hours'} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 24);

  if (ElapsedTime < 31) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'day' : 'days'} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 365);

  if (ElapsedTime < 1) {
    const currentYear = currentDays.getFullYear();
    const currentMonth = currentDays.getMonth() + 1;
    const currentDate = currentDays.getDate();
    const createdYear = createdAtTime.getFullYear();
    const createdMonth = createdAtTime.getMonth() + 1;
    const createdDate = createdAtTime.getDate();

    if (currentYear === createdYear) {
      if (currentDate >= createdDate) {
        return `${currentMonth - createdMonth} months ago`;
      }
      return `${currentMonth - createdMonth - 1} months ago`;
    }
    if (currentYear > createdYear) {
      if (currentDate >= createdDate) {
        return `${12 - createdMonth + currentMonth} months ago`;
      }
      return `${12 - createdMonth + currentMonth - 1} months ago`;
    }
  }

  if (ElapsedTime >= 1) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? 'year' : 'years'} ago`;
  }
};

function Card({ url, createdAt, desc, imgUrl }) {
  const createDate = new Date(createdAt);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure>
        <img src={imgUrl} alt={desc}></img>
        <button>
          <img src={Empty_Star} alt='즐겨찾기'></img>
        </button>
      </figure>
      <div>
        <div>
          <span>{getElapsedTime(createDate)}</span>
          <img src={Kebab} alt='더보기' />
        </div>
        <p>{desc}</p>
        <p>{`${createDate.getFullYear()}.${createDate.getMonth() + 1}.${createDate.getDate()}`}</p>
      </div>
    </a>
  )
}

export default Card;