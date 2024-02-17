import { useEffect, useState } from 'react';
import TopBodyArea from '../pages/TopBodyArea';
import ContentsArea from '../pages/ContentsArea';
import { getFolder } from '../utils/apis';

const SharedPage = () => {
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderInfo(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
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
  );
};

export default SharedPage;
