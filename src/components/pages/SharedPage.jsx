import { useEffect, useState } from 'react';
import { getSampleFolder } from '../../util/api';
import UserFolderNameArea from './sharedPage/UserFolderNameArea';
import SharedSection from './sharedPage/SharedSection';

function SharedPage() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleFolderLoad = async () => {
    try {
      const {
        folder: { name, owner },
      } = await getSampleFolder();

      setFolderName(name);
      setUserName(owner.name);
      setProfileImage(owner.profileImageSource);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <>
      <UserFolderNameArea folderName={folderName} userName={userName} imgSrc={profileImage} />
      <SharedSection />
    </>
  );
}

export default SharedPage;
