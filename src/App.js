import Top from './Top';
import Frame from './Frame';
import Footer from './components/Footer';
import './App.css';
import Gnb from './components/Gnb';
import { getFolder, getUser } from './apis/api';
import { useState, useEffect } from 'react';

const App = () => {
  const [folder, setFolder] = useState([]); 
  const [user, setUser] = useState([]);
  const [folderLinks, setFolderLinks] = useState([]);// 나누는 이유: folder를 통으로 전달하니, state에 저장되기 전에 넘겨지는 문제가 발생

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      const { links } =  folder;
      const { name, owner } = folder;
      
      setFolder({ name, owner });
      setFolderLinks(links); 
    };

    const fetchUser = async () => {
      const userInfo = await getUser();
      const { email, name, profileImageSource } = userInfo;
      
      setUser({ email, name, profileImageSource });
    };

    fetchFolder();
    fetchUser();
  }, []);

  return (
    <div className='container'>
      <Gnb items={user} className="gnb_ly"/>
      <Top items={folder} className='container-top'/>
      < Frame items={folderLinks} className='container-frame'/>
      < Footer className='container-footer'/>
    </div>
  )
}

export default App;