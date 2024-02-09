import Top from './Top';
import Frame from './Frame';
import Footer from './components/Footer';
import './App.css';
import Gnb from './components/Gnb';
import { getFolder, getUser } from './apis/api';
import { useState, useEffect } from 'react';

const App = () => {
  const [folderLinks, setFolderLinks] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchFolderAndUser = async () => {
      const userInfo = await getUser();
      const { folder } = await getFolder(); 
      const { email, name, profileImageSource } = userInfo;
      const { links } =  folder;
      
      setUser({ email, name, profileImageSource });
      setFolderLinks(links); 
    };

    fetchFolderAndUser();
  }, []);

  return (
    <div className='container'>
        <Gnb items={user} className="gnb_ly"/>
        <Top items={user} className='container-top'/>
      < Frame items={folderLinks} className='container-frame'/>
      < Footer className='container-footer'/>
    </div>
  )
}

export default App;