import SearchBar from './components/SearchBar';
import SharedCardList from './components/SharedCardList';
import './Folder.css';

const SharedFolder = ({folders}) => {
  if(!folders || !folders.links) {
    return (
      <div>파트 1에서 만들었던 랜딩 페이지 적용</div>
    )
  }

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      <SharedCardList folders={folders} />
    </div>
  )
}

export default SharedFolder;