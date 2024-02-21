import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import FolderList from '../components/folder/FolderList';
import SearchBar from '../components/SearchBar';
import { getFolderUser, SAMPLE_ID, getFolderList } from '../api';
import { useState } from 'react';

const FolderPage = () => {
  const [folderUser, setFolderUser] = useState({
    profileImageSource: null,
    email: null,
  });
  const [folderList, setFolderList] = useState(null);

  const handleLoadFolderUser = async () => {
    const user = await getFolderUser();
    try {
      setFolderUser({
        profileImageSource: user.data.data[SAMPLE_ID - 1].image_source,
        email: user.data.data[SAMPLE_ID - 1].email,
      });
    } catch (e) {
      alert(user.error);
    }
  };

  const handleLoadFolderList = async () => {
    const list = await getFolderList();
    try {
      setFolderList(list.data.data);
    } catch (e) {
      alert(list.error);
    }
  };

  useEffect(() => {
    handleLoadFolderUser();
    handleLoadFolderList();
  }, []);

  return (
    <>
      <Header user={folderUser} isSticky={false} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--background)',
        }}
      >
        <SearchBar format="addLink" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SearchBar format="searchLink" />
      </div>
      <main>
        <FolderList folderList={folderList} />
      </main>

      <Footer />
    </>
  );
};

export default FolderPage;
