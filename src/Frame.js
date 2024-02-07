import React from 'react'
import SearchBar from './components/SearchBar';

const Frame = () => {
  return (
    <div className='frame_ly'>
      < SearchBar />
      <div className='card-grid-frame_ly'>
        <div className='card-flex-frame_ly'>여기에 카드 3개</div>
        <div className='card-flex-frame_ly'>여기에 카드 3개</div>
        <div className='card-flex-frame_ly'>여기에 카드 3개</div>
      </div>
    </div>
  )
}

export default Frame;