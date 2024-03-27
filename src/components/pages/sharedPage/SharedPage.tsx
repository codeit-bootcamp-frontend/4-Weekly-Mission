import { useEffect, useState } from 'react';
import { getSampleUser, getSampleFolder } from '../../../utils/api';
import sharedStyles from './SharedPage.module.css';
import Footer from '../../common/footer/Footer';
import NavBar from '../../common/navBar/NavBar';
import SearchBar from '../../common/searchBar/SearchBar';
import { Cardlist } from '../../common/cardlist/Cardlist';

function SharedPage() {
  const [sampleUserData, setSampleUserData] = useState({});
  const [sampleFolderData, setSampleFolderData] = useState({});
  const getSampleUserData = async () => {
    const responseSampleUser = await getSampleUser();
    const newUser = {
      id: responseSampleUser.id,
      name: responseSampleUser.name,
      image_source: responseSampleUser.profileImageSource,
      email: responseSampleUser.email,
    };
    setSampleUserData(newUser);
  };
  const getSampleFolderData = async () => {
    const responseSampleFolder = await getSampleFolder();
    setSampleFolderData(responseSampleFolder.folder);
  };

  useEffect(() => {
    getSampleUserData();
    getSampleFolderData();
  }, []);

  // const folderId = sampleFolderData.id;
  const folderOwener = sampleFolderData.owner;
  const folderName = sampleFolderData.name;
  const folderLinks = sampleFolderData.links || [];

  const newLinks = [];
  folderLinks.map((link) => {
    newLinks.push({
      created_at: link.createdAt,
      description: link.description,
      id: link.id,
      image_source: link.imageSource,
      title: link.title,
      url: link.url,
    });
  });

  return (
    <div>
      <NavBar user={sampleUserData} isFixed={true} />
      <div className={sharedStyles.folderInfo}>
        <img
          className={sharedStyles.img}
          src={folderOwener?.profileImageSource}
          alt="프로필 이미지"
        />
        <span className={sharedStyles.ownerName}>@{folderOwener?.name}</span>
        <span className={sharedStyles.folderName}>{folderName}</span>
      </div>
      <div className={sharedStyles.contents}>
        <SearchBar />
        <Cardlist links={newLinks}></Cardlist>
      </div>
      <Footer />
    </div>
  );
}

export default SharedPage;
