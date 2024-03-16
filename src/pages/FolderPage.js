import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import FolderList from '../components/folder/FolderList';
import SearchBar from '../components/SearchBar';
import { getFolderUser, getFolderList } from '../api';
import { useState } from 'react';
import styled from 'styled-components';

const FolderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background);
`;

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
        <FolderContainer>
          <SearchBar format="addLink" />
        </FolderContainer>
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
