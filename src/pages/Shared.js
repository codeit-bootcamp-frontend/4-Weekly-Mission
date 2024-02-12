import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { getUser, getFolder } from '../api';
import { useState } from 'react';

const Shared = () => {
  const [user, setUser] = useState({ email: null, profileImageSource: null });
  const [folder, setFolder] = useState({
    profileImageSource: null,
    ownerName: null,
    folderName: null,
    links: null,
  });

  const handleLoad = async () => {
    const userProfile = await getUser();
    const userFolder = await getFolder();

    setUser({ email: userProfile.email, profileImageSource: userProfile.profileImageSource });
    setFolder({
      profileImageSource: userFolder.folder.owner.profileImageSource,
      ownerName: userFolder.folder.owner.name,
      folderName: userFolder.folder.name,
      links: userFolder.folder.links,
    });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header user={user} folder={folder} />
      <SearchBar />
      <Card links={folder.links} />
      <Footer />
    </>
  );
};

export default Shared;
