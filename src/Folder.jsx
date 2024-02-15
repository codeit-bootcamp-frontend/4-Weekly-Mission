import { useState, useEffect } from 'react';

import { getFolder } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const Folder = () => {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      //const { folder } = await getFolder();
      
      //setFolders(folder);
    };

    fetchFolder();
  }, []);

  const isShowFolders = folders && folders.links;

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {isShowFolders ? (
        <ul className='card-frame_ly'> 
          {folders.links.map(({ createdAt, imageSource, title, description, url, id }) => (
            <Card key={id} 
              imgSrc={imageSource}
              title={title}
              description={description}
              createdAt={createdAt}
              url={url}
            />
          ))}
        </ul>
      ) : (
        <div className='card-empty'>저장된 링크가 없습니다</div>
      )}
    </div>
  )
}

export default Folder;