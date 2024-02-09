import React from 'react'
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Frame.css';

const Frame = () => {
  return (
    <div className='frame_ly'>
      < SearchBar className='search-bar_ly'/>
      <div className='card-frame_ly'>
        <div className='card-flex-frame_ly'>
          < Card />
          < Card />
          < Card />
        </div>
        <div className='card-flex-frame_ly'>
          < Card />
          < Card />
          < Card />
        </div>
        <div className='card-flex-frame_ly'>
          < Card />
          < Card />
          < Card />
        </div>
      </div>
    </div>
  )
}

export default Frame;