import searchImg from '../assets/search.svg';

import './SearchBar.css';

const SearchBar = ({className}) => {
  return (
    <form className={className}>
      <div className='search-bar'>
        <img src={searchImg} alt='돋보기'/>
        <span className='text'>링크를 검색해 보세요.</span>
      </div>
    </form>
  )
}

export default SearchBar