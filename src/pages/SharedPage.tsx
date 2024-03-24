import { useState, useEffect } from 'react';
import React from 'react';

import { getSharedFolder, getSharedUser } from '../api/BaseUrl';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/info';

interface Props {
  getState: () => Promise<any>;
  setState: (state: object) => void;
}

const SharedPage: React.FC = () => {
  const [user, setUser] = useState<object | null>(null);
  const [folder, setFolder] = useState<object | null>(null);

  const handleLoad = async ({ getState, setState }: Props) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad({ getState: getSharedUser, setState: setUser });
    handleLoad({ getState: getSharedFolder, setState: setFolder });
  }, []);

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Header user={user} isSticky={true} />
      <Info folderInfo={folder} />
      <Folder folderInfo={folder} categoryList={undefined} />
      <Footer />
    </div>
  );
};

export default SharedPage;
