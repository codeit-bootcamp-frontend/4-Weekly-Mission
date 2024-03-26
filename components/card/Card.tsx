'use client'

import Image from 'next/image';
import { useState } from 'react';
import styled from "styled-components"

import { calculateDateDifference, formatDate } from '@/lib/dateCalculate';
import LinkEditDropdown from '../dropdown/LinkEditDropdown';
import defaultImg from '@/public/logo.svg';
import starIcon from '@/public/icon/star.svg';
import kebabIcon from '@/public/icon/kebab.svg';

import './Card.css'

interface LinksData {
  children?: React.ReactNode;
  createdAt: string;
  imgSrc: string | null;
  title: string | null;
  description: string | null;
  url: string | undefined;
}

const Card = ({ children, imgSrc, createdAt, title, description, url }: LinksData) => {
  const [isOpenKebab, setIsOpenKebab] = useState(false);

  const handleClickKebab = () => {
    setIsOpenKebab((isOpenKebab) => !isOpenKebab);
  }

  return (
    <li className='card'>
      <a href={url} target="_blank" rel="noreferrer noopener" className='card-overflow'>
        {imgSrc ? (
          <div className='card-img'>
            <Image fill src={imgSrc} alt='이미지' className='card-img'/>
          </div>
          ) : (
          <Image src={defaultImg} alt='이미지' className='card-img'/>
        )}
      </a>
        <div className='card-info'>
          <div className='container-kebab'>
            <span className='time'>{calculateDateDifference(createdAt)}</span>
            <Image src={kebabIcon} alt='목록' className='card-info_kebab' onClick={handleClickKebab}/>
            {isOpenKebab && (
              <DropdownLayout>
                <LinkEditDropdown url={url}>{children}</LinkEditDropdown>
              </DropdownLayout>
            )}
          </div>
          <span className='description'>{title}<br/>{description}</span>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
      <Image src={starIcon} alt='중요 표시' className='card-img_star-icon' />
    </li>
  )
}

export default Card

const DropdownLayout = styled.div`
  position: absolute;
  bottom: 40px;
  right: -59px;
  z-index: 10;

  background-color: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.10);
  border-radius: 15px;
`