
import searchIcon from '../img/searchIcon.png'
import styled from 'styled-components'


const SearchBox = styled.div`
    display: flex;
    padding: 0 1.5rem;
    border-radius: 10px;
    background: #F5F5F5;
    gap: 1.6rem;
    align-items: center;
    user-select: none;
    width: 106rem;
    margin: auto;

    .search-form{
        width: 100%;
        height: 5.4rem;
    }

    .search-form > input{
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding: 5px 0;
        font-size: 1.6rem;
    }

    @media (max-width : 1124px){
        &{
            max-width: 70.6rem;;
        }
    }

    @media  (max-width : 790px) {
        &{
            width: 34rem;
        }
    }
`;

function SearchInput() {
    return (
        <SearchBox>
             <span className="search-icon">
                <img src={searchIcon} alt="검색 아이콘" />
             </span>
            <form className='search-form'>
                <input type="text" placeholder="링크를 검색해 보세요." />
            </form>
        </SearchBox>

    )
}

export default SearchInput