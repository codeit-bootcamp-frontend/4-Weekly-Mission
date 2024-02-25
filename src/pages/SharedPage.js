import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import CardList from '../components/shared/SharedCardList';
import SearchBar from '../components/SearchBar';
import { getUser, getFolder } from '../api';
import { useState } from 'react';
import FolderTitle from '../components/header/FolderTitle';

const SharedPage = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState({
    // TODO : null로 수정 필요
    profileImageSource: null,
    ownerName: null,
    folderName: null,
    links: null,
  });

  const handleLoadProfile = async () => {
    const userProfile = await getUser();
    try {
      setUser(userProfile.data);
    } catch (e) {
      alert(userProfile.error);
    }
  };

  const handleLoadFolder = async () => {
    const userFolder = await getFolder();
    try {
      setFolder({
        profileImageSource: userFolder.data.folder.owner.profileImageSource,
        ownerName: userFolder.data.folder.owner.name,
        folderName: userFolder.data.folder.name,
        links: userFolder.data.folder.links,
      });
    } catch (e) {
      alert(userFolder.error);
    }
  };

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, []);

  return (
    <>
      <Layout user={user} isSticky={true}>
        <FolderTitle folder={folder} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar format="searchLink" />
        </div>

        <CardList links={folder.links} />
      </Layout>
    </>
  );
};

export default SharedPage;
