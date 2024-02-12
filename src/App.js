import Header from './Header';
import Folder from './Folder';
import Footer from './components/Footer';
import './App.css';
import Gnb from './components/Gnb';
import { getFolder, getUser } from './apis/api';
import { useState, useEffect } from 'react';

const App = () => {
  const [userInfos, setUserInfos] = useState({});
  const [folderInfos, setFolderInfos] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      
      setFolderInfos(folder);
    };

    fetchFolder();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUser();
      
      setUserInfos(userInfo);
    };

    fetchUser();
  }, []);

  return (
    <div className='container'>
      <Gnb items={userInfos}/>
      <Header items={folderInfos}/>
      <Folder items={folderInfos}/>
      <Footer/>
    </div>
  )
}

export default App;