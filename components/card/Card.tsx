import Image from 'next/image';

import { calculateDateDifference, formatDate } from '@/lib/dateCalculate';

import defaultImg from '@/public/logo.svg';
import starIcon from '@/public/icon/star.svg';
import kebabIcon from '@/public/icon/kebab.svg';

import './Card.css'

interface LinksData {
  createdAt: string;
  imgSrc: string | null;
  title: string | null;
  description: string | null;
  url: string | undefined;
}

const Card = ({ imgSrc, createdAt, title, description, url }: LinksData) => {
  return (
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener" className='card-overflow'>
        {imgSrc ? (
          <img src={imgSrc} alt='이미지' className='card-img' />
          ) : (
          <Image src={defaultImg} alt='이미지' className='card-img' />
        )}
      </a>
        <div className='card-info'>
          <div className='container-kebab'>
            <span className='time'>{calculateDateDifference(createdAt)}</span>
            <Image src={kebabIcon} alt='목록' className='card-info_kebab' />
            {/* {isOpenKebab && (
              <DropdownLayout>
                <LinkEditDropdown folderList={folderList} url={url}/>
              </DropdownLayout>
            )} */}
          </div>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
      <Image src={starIcon} alt='중요 표시' className='card-img_star-icon' />
    </li>
  )
}

export default Card