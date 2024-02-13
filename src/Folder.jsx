import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const Folder = ({items}) => {
  if(!items || !items.links) {
    return (
      <div>파트 1에서 만들었던 랜딩 페이지 적용</div>
    )
  }

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      <ul className='card-frame_ly'> 
        {items.links.map(({ createdAt, imageSource, title, description, url, id }) => (
          <Card key={id} 
            imgSrc={imageSource}
            title={title}
            description={description}
            createdAt={createdAt}
            url={url}
          />
        ))}
      </ul>
    </div>
  )
}

export default Folder;