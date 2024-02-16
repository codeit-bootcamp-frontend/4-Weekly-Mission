import { useState, useEffect } from 'react';

import { getFolderList, getLink, getLinkDetail } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const Folder = () => {
  const [folderLists, setFolderLists] = useState([]); // 이건 부모 컴포넌트에서 넘겨주는 게 좋을 듯
  const [folders, setFolders] = useState([]);
  const [curfolderList, setCurFolderList] = useState();

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderLists(data);
    };

    fetchFolderList();
  }, []);

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setFolders(data);
    setCurFolderList('전체');
  }

  const handleListClick = async (folderName, folderId) => {
    const { data } = await getLinkDetail(folderId);

    setFolders(data);
    setCurFolderList(folderName);
  }

  useEffect(() => {
    handleTotalListClick();
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {folderLists ? (
        <div className='container-folder-and-cards'>
          <div className='container-folder-list'>
            <div className='folder-list'>
              <button className='folder-list_btn' onClick={handleTotalListClick}>전체</button>
              {folderLists.map(({ id, name }) => (
                  <button key={id} className='folder-list_btn' onClick={() => handleListClick(name, id)}>
                    {name}
                  </button>
              ))}
            </div>
          </div>
          <div>{curfolderList}</div>
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
        </div>
      ) : (
        <div className='card-empty'>저장된 링크가 없습니다</div>
      )}
    </div>
  )
}

export default Folder;