import { useState, useEffect } from 'react';

import { getFolder } from './apis/api';

import './Header.css';

const Header = () => {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      
      setFolders(folder);
    };

    fetchFolder();
  }, []);

  const isShowFolderInfos = folders && folders.owner && folders.name;

  return (
    <div className='container-header'>
      <div className="header-frame_ly">
        <div className='user_ly'>
          {isShowFolderInfos ? (
            <div className='avatar_ly'>
                <img className="avatar-img" src={folders.owner.profileImageSource} alt={`${folders.owner.name} 아바타`}/>
                <span className='avatar-name'>{folders.owner.name}</span>
            </div>
          ) : (
            <button className='login-button'>회원가입</button>
          )}
          <span className='favorite'>{folders.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Header;