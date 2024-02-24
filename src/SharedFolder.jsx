import SearchBar from './components/SearchBar';
import SharedCardList from './components/SharedCardList';
import './Folder.css';

const SharedFolder = ({ sharedFolder }) => {
  if (!sharedFolder || !sharedFolder.links) {
    return (
      <div>파트 1에서 만들었던 랜딩 페이지 적용</div>
    )
  }

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      <SharedCardList sharedFolder={sharedFolder} />
    </div>
  )
}

export default SharedFolder;
