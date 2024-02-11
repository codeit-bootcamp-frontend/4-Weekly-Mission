import React, { useEffect, useState } from 'react';
import { getAPI } from '../api';
import FolderList from './FolderList';
import '../styles/global.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {

  const [user, setUser] = useState(null);
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [folderList, setFolderList] = useState([]);

  const handleLoad = async () => {
    const { folder: {
      name, owner, links
    }, } = await getAPI('/sample/folder');
    const user = await getAPI('/sample/user');

    setUser(user);
    setFolderName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setFolderList(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header user={user} />
      <Main folderName={folderName} userName={userName} profileImage={profileImage} />
      <FolderList folderList={folderList} />
      <Footer />
    </div>
  );
}

export default App;
