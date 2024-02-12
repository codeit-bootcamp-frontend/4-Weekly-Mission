import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const Folder = ({items}) => {
  const isFolderLinksAvailable = items && items.links;

  return (
    <>
      {isFolderLinksAvailable ? (
        <div className='container-folder'>
          <SearchBar className='search-bar_ly'/>
          <div className='card-frame_ly'> 
            {items.links.map(({ createdAt, imageSource, title, description, url }) => (
              <Card key={createdAt} 
                imgSrc={imageSource}
                title={title}
                description={description}
                time={createdAt}
                url={url}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>파트 1에서 만들었던 랜딩 페이지 적용</div>
      )}
    </>
  )
}

export default Folder;