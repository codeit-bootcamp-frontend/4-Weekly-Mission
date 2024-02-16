import { useEffect, useState } from 'react';
import HeaderArea from './pages/HeaderArea';
import TopBodyArea from './pages/TopBodyArea';
import ContentsArea from './pages/ContentsArea';
import FooterArea from './pages/FooterArea';
import { getLoginUserInfo, getFolder } from './utils/apis';
import './App.css';

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
        {folderInfo.owner && (
          <TopBodyArea
            iconImage={folderInfo.owner.profileImageSource}
            name={folderInfo.owner.name}
            folderName={folderInfo.name}
          ></TopBodyArea>
        )}
        <ContentsArea links={folderInfo.links}></ContentsArea>
      </>
      <FooterArea></FooterArea>
    </>
  );
}

export default App;
