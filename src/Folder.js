import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';
import { v4 as uuidv4 } from 'uuid';

const Folder = ({items}) => {
  const isShowFolderLinks = items && items.links;

  return (
    <>
      {isShowFolderLinks ? (
        <div className='container-folder'>
          <SearchBar className='search-bar_ly'/>
          <ul className='card-frame_ly'> 
            {items.links.map(({ createdAt, imageSource, title, description, url }) => (
              <Card key={uuidv4()} 
                imgSrc={imageSource}
                title={title}
                description={description}
                time={createdAt}
                url={url}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>파트 1에서 만들었던 랜딩 페이지 적용</div>
      )}
    </>
  )
}

export default Folder;