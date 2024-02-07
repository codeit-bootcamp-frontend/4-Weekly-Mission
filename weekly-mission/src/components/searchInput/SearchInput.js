import './SearchInput.css'
import searchIcon from '../../img/searchIcon.png'


function SearchInput() {
    return (
        <div className="search-box">
             <span className="search-icon">
                <img src={searchIcon} alt="검색 아이콘" />
             </span>
            <form className='search-form'>
                <input type="text" placeholder="링크를 검색해 보세요." />
            </form>
        </div>

    )
}

export default SearchInput