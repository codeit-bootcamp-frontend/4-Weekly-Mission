import { useEffect, useState } from 'react';
import { getFolder } from '../api';
import '../styles/style.css';
import Header from './Header';
import Main from './Main';
import FolderSection from './FolderSection';
import Footer from './Footer'

function App() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [folderList, setFolderList] = useState([]);

  const handleLoad = async () => {
    const {
      folder: { name, owner, links },
    } = await getFolder();

    setFolderName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setFolderList(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header />
      <Main folderName={folderName} userName={userName} imgSrc={profileImage} />
      <FolderSection folderList={folderList} />
      <Footer />
    </>
  );
}

export default App;
