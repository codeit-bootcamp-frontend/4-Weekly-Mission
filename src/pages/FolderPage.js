import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import FolderList from '../components/folder/FolderList';
import SearchBar from '../components/SearchBar';
import { getFolderUser, getFolderList } from '../api';
import { useState } from 'react';

const FolderPage = () => {
  const [user, setUser] = useState(null);
  const [folderList, setFolderList] = useState(null);

  const handleLoadUser = async () => {
    const { data, error } = await getFolderUser();

    if (error) {
      return alert(error);
    }
    setUser(data);
  };

  const handleLoadFolderList = async () => {
    const { data, error } = await getFolderList();

    if (error) {
      return alert(error);
    }
    setFolderList(data);
  };

  useEffect(() => {
    handleLoadUser();
    handleLoadFolderList();
  }, []);

  return (
    <>
      <Layout user={user} isSticky={false}>
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
      </Layout>
    </>
  );
};

export default FolderPage;
