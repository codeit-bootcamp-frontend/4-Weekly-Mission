import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
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

    try {
      setUser({
        email: userProfile.data.email,
        profileImageSource: userProfile.data.profileImageSource,
      });
    } catch (e) {
      alert(userProfile.error);
    }

    try {
      console.log(userFolder.data.folder);
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
    handleLoad();
  }, []);

  return (
    <>
      <Header user={user} folder={folder} />
      <SearchBar />
      <CardList links={folder.links} />
      <Footer />
    </>
  );
};

export default Shared;
