import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { getFolderList } from './apis/api';

import SearchBar from './components/SearchBar';
import './Folder.css';

const Folder = () => {
  const [folderLists, setFolderLists] = useState([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderLists(data);
    };

    fetchFolderList();
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {folderLists ? (
        <div className='container-folder-list'>
          <div className='folder-list'>
            <NavLink >
              <button className='folder-list_btn'>전체</button>
            </NavLink>
            {folderLists.map(({ id, name }) => (
              <NavLink key={id}>
                <button className='folder-list_btn'>
                  {name}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        <div className='card-empty'>저장된 링크가 없습니다</div>
      )}
    </div>
  )
}

export default Folder;