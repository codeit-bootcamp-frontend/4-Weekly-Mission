import './FolderSearch.css'

function FolderSearch() {
    return(
        <form>
            <label htmlFor="search">
                <img src={`${process.env.PUBLIC_URL}/images/Search.svg`}/>
            </label>
            <input type="search" id="search" placeholder='링크를 검색해 보세요.'/>
        </form>
    )
}

export default FolderSearch;