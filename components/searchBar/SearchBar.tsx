'use client'

import Image from 'next/image';

import searchImg from '@/public/search.svg';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className='search-bar_ly'>
      <div className='search-bar'>
        <Image src={searchImg} alt='돋보기'/>
        <span className='text'>링크를 검색해 보세요.</span>
      </div>
    </form>
  )
}

export default SearchBar