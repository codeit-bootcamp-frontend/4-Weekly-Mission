'use client'

import Image from 'next/image';
import { useState } from 'react';

import searchImg from '@/public/search.svg';
import closeImg from '@/public/close.svg';

import './SearchBar.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const handleKeywordChange = (e: any) => setKeyword(e.target.value);

  const handleClick = () => {
    setKeyword('');
  }

  return (
    <form className='search-bar_ly'>
      <div className='search-bar'>
        <Image src={searchImg} alt='돋보기'/>
        <input 
          name='keyword'
          value={keyword}
          className='inputSearchBar'
          placeholder='링크를 검색해 보세요'
          onChange={handleKeywordChange}
        />
      </div>
      {keyword && 
        <Image src={closeImg} alt='닫기' onClick={handleClick} className='closeBtn'/>
      }
    </form>
  )
}

export default SearchBar