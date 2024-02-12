import './css/App.css';
import { useEffect, useState } from 'react';
import { HeaderArea } from './HeaderArea';
import { TopBodyArea } from './TopBodyArea';
import { ContentsArea } from './ContentsArea';
import { FooterArea } from './FooterArea';
import { getLoginUserInfo, getFolder } from './apis';

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
