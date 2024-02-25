import { useEffect, useState } from 'react';
import TopBodyArea from '../components/area/ContentsTopBodyArea';
import ContentsArea from '../components/area/ContentsArea';
import { getApi } from '../utils/apis';

const SharedPage = () => {
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoad = async () => {
    const { folder } = await getApi('/sample/folder');
    setFolderInfo(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {folderInfo?.owner && (
        <TopBodyArea
          iconImage={folderInfo.owner.profileImageSource}
          name={folderInfo.owner.name}
          folderName={folderInfo.name}
        />
      )}
      <ContentsArea links={folderInfo.links} />
    </>
  );
};

export default SharedPage;
