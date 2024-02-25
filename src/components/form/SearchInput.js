import './SearchInput.css'
import styled from 'styled-components';

const Search = styled.input`
    width: 100%;
    padding: 15px 16px 15px 42px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #F5F5F5;
    font-size: 1.6rem;
    color: rgba(102, 102, 102, 1);
    
    &::placeholder {
        font-size: 1.6rem;
        color: rgba(102, 102, 102, 1);
    }

    &::-webkit-search-decoration,-webkit-search-cancel-button, -webkit-search-results-button, -webkit-search-results-decoration {
        display: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
        padding: 13px 16px 13px 38px;
        &::placeholder {
            font-size: 1.4rem;
        }
    }
`

function SearchInput() {
    return(
        <form className='searchForm'>
            <label htmlFor="search">
                <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt='검색 아이콘'/>
            </label>
            <Search type="search" id="search" placeholder='링크를 검색해 보세요.'/>
        </form>
    )
}

export default SearchInput;