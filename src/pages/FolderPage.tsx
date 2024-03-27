import { useState, useEffect } from 'react';
import React from 'react';

import { getFolderList, getFolderUser, getSharedFolder } from '../api/BaseUrl';
import AddLink from '../components/AddLink';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
  getState: () => Promise<any>;
  setState: (state: object) => void;
}

const FoldPage: React.FC = () => {
  const [user, setUser] = useState<object | null>(null);
  const [folder, setFolder] = useState<object | null>(null);
  const [categoryList, setCategoryList] = useState<object | null>(null);

  const handleLoad = async ({ getState, setState }: Props) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad({ getState: getFolderUser, setState: setUser });
    handleLoad({ getState: getSharedFolder, setState: setFolder });
    handleLoad({ getState: getFolderList, setState: setCategoryList });
  }, []);

  console.log(folder);
  console.log(`category : ${categoryList}`);

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Header user={user} isSticky={false} />
      <AddLink />
      <Folder folderInfo={folder} categoryList={categoryList} />
      <Footer />
    </div>
  );
};

export default FoldPage;
