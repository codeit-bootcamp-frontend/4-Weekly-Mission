import { useState, useEffect } from 'react';

import { getFolder, getUser } from './apis/api';

import Header from './Header';
import Folder from './Folder';
import Footer from './components/Footer';
import Gnb from './components/Gnb';
import './App.css';

const App = () => {
  const [users, setUsers] = useState({});
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      
      setFolders(folder);
    };

    fetchFolder();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUser();
      
      setUsers(userInfo);
    };

    fetchUser();
  }, []);

  return (
    <div className='container'>
      <Gnb items={users}/>
      <Header items={folders}/>
      <Folder items={folders}/>
      <Footer/>
    </div>
  )
}

export default App;