import './App.css';
import { useEffect, useState } from 'react';
import { HeaderArea } from './pages/HeaderArea';
import { TopBodyArea } from './pages/TopBodyArea';
import { ContentsArea } from './pages/ContentsArea';
import { FooterArea } from './pages/FooterArea';
import { getLoginUserInfo, getFolder } from './utils/apis';

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [links, setlinks] = useState([]);
  const [folder, setFolder] = useState([]);

  const handleLoad = async () => {
    const userInfo = await getLoginUserInfo();
    setUserInfo(userInfo);

    const { folder } = await getFolder();
    setFolder(folder);
    setlinks(folder.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <header>
        <HeaderArea email={userInfo.email}></HeaderArea>
      </header>
      <body>
        <TopBodyArea
          name={userInfo.name}
          folderName={folder.name}
        ></TopBodyArea>
        <ContentsArea links={links}></ContentsArea>
      </body>
      <footer>
        <FooterArea></FooterArea>
      </footer>
    </div>
  );
}

export default App;
