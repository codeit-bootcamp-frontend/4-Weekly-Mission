import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { getFolderList, getLink } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? 'underline' : '', // 미완 -> 나중에 바꿀 예정
  };
}

const Folder = () => {
  const [folderLists, setFolderLists] = useState([]); // 이건 부모 컴포넌트에서 넘겨주는 게 좋을 듯
  const [folders, setFolders] = useState([]);
  const [curfolderList, setCurFolderList] = useState();

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      console.log(data)
      setFolderLists(data);
    };

    fetchFolderList();
  }, []);

  const handleListClick = async (stringName) => {
    const { data } = await getLink();

    setFolders(data);
    setCurFolderList(stringName);
  }

  useEffect(() => {
    handleListClick('전체');
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {folderLists ? (
        <div className='container-folder-and-cards'>
          <div className='container-folder-list'>
            <div className='folder-list'>
              <NavLink style={getLinkStyle}>
                <button className='folder-list_btn' onClick={() => handleListClick('전체')}>전체</button>
              </NavLink>
              {folderLists.map(({ id, name }) => (
                <NavLink key={id} style={getLinkStyle}>
                  <button className='folder-list_btn' onClick={() => handleListClick(name)}>
                    {name}
                  </button>
                </NavLink>
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