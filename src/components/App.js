import { useEffect, useState } from "react";
import { getFolder } from "../api";
import '../styles/style.css';
import Header from './Header';
import Main from "./Main";

function App() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  
  const handleLoad = async () => {
    const {folder: {name, owner}} = await getFolder();
    setFolderName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <>
      <Header />
      <Main folderName={folderName} userName={userName} imgSrc={profileImage}/>
    </>
    );
}

export default App;
