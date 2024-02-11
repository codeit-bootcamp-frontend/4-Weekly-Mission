import Header from './Header';
import Folder from './Folder';
import Footer from './components/Footer';
import './App.css';
import Gnb from './components/Gnb';
import { getFolder, getUser } from './apis/api';
import { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState([]);
  const [folderLinks, setFolderLinks] = useState([]);
  const [folderOwner, setFolderOwner] = useState([]); 
  const [folderName, setFolderName] = useState([]);
  // 나누는 이유: folder를 통으로 전달하니, state에 저장되기 전에 넘겨지는 문제가 발생

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      const { links, name, owner } = folder;
      
      setFolderLinks(links); 
      setFolderOwner(owner);
      setFolderName(name);
    };

    fetchFolder();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUser();
      
      setUser(userInfo);
    };

    fetchUser();
  }, []);

  return (
    <div className='container'>
      <Gnb items={user}/>
      <Header owner={folderOwner} name={folderName}/>
      <Folder items={folderLinks}/>
      <Footer/>
    </div>
  )
}

export default App;