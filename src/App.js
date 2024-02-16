import './App.css';
import { useEffect, useState } from 'react';
import HeaderArea from './pages/HeaderArea';
import TopBodyArea from './pages/TopBodyArea';
import ContentsArea from './pages/ContentsArea';
import FooterArea from './pages/FooterArea';
import { getLoginUserInfo, getFolder } from './utils/apis';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoad = async () => {
    const getUser = await getLoginUserInfo();
    setUserInfo(getUser);

    const { folder } = await getFolder();
    setFolderInfo(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <HeaderArea email={userInfo.email}></HeaderArea>
      <>
        <TopBodyArea
          name={userInfo.name}
          folderName={folderInfo.name}
        ></TopBodyArea>
        <ContentsArea links={folderInfo.links}></ContentsArea>
      </>
      <FooterArea></FooterArea>
    </>
  );
}

export default App;
