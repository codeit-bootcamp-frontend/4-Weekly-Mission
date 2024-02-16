import { useEffect, useState } from 'react';
import { getFolder, getUser } from '../api';
import '../styles/style.css';
import Header from './Header';
import Main from './Main';
import FolderSection from './FolderSection';
import Footer from './Footer';

function App() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [folderList, setFolderList] = useState([]);
  const [user, setUser] = useState(null);

  const handleFolderLoad = async () => {
    try {
      const {
        folder: { name, owner, links },
      } = await getFolder();

      setFolderName(name);
      setUserName(owner.name);
      setProfileImage(owner.profileImageSource);
      setFolderList(links);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUserLoad = async () => {
    try {
      const user = await getUser();

      setUser(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleFolderLoad();
    handleUserLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      <Main folderName={folderName} userName={userName} imgSrc={profileImage} />
      <FolderSection folderList={folderList} />
      <Footer />
    </>
  );
}

export default App;
