import { useEffect, useState } from 'react';
import { getSampleUser, getSampleFolder } from '../../../utils/api';
import sharedStyles from './SharedPage.module.css';
import Footer from '../../common/footer/Footer';
import NavBar from '../../common/navBar/NavBar';
import SearchBar from '../../common/searchBar/SearchBar';
import { Cardlist } from '../../common/cardlist/Cardlist';

interface SampleUser {
  email: string;
  id: number;
  image_source: string;
  name: string;
}
interface Link {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}
interface NewLink {
  created_at: string;
  description: string;
  id: number;
  image_source: string;
  title: string;
  url: string;
}
interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}
interface SampleFolder {
  count: number;
  id: number;
  name: string;
  links: Link[];
  owner: Owner;
}

const SharedPage: React.FC = () => {
  const [sampleUserData, setSampleUserData] = useState<SampleUser>({
    email: '',
    id: 0,
    image_source: '',
    name: '',
  });
  const [sampleFolderData, setSampleFolderData] = useState<SampleFolder>({
    count: 0,
    id: 0,
    name: '',
    links: [],
    owner: { id: 0, name: '', profileImageSource: '' },
  });

  const getSampleUserData = async () => {
    const responseSampleUser = await getSampleUser();
    const newUser: SampleUser = {
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

  const newLinks: NewLink[] = folderLinks.map((link) => {
    return {
      created_at: link.createdAt,
      description: link.description,
      id: link.id,
      image_source: link.imageSource,
      title: link.title,
      url: link.url,
    };
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
};

export default SharedPage;
