import { useState, useEffect } from 'react';

import { getLink } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const Folder = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolder = async () => {
      const { data } = await getLink();
      
      console.log(data)
      setFolders(data);
    };

    fetchFolder();
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {folders ? (
        <ul className='card-frame_ly'> 
          {folders.map(({ created_at, image_source, title, description, url, id }) => (
            <Card key={id} 
              imgSrc={image_source}
              title={title}
              description={description}
              createdAt={created_at}
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