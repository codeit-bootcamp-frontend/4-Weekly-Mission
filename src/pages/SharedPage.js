import { useState, useEffect } from 'react';

import { getSharedFolder, getSharedUser } from '../api/BaseUrl';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/info';

const SharedPage = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getSharedUser, setUser);
    handleLoad(getSharedFolder, setFolder);
  }, []);

  return (
    <div>
      <Header userInfo={user} />
      <Info folderInfo={folder} />
      <Folder folderInfo={folder} />
      <Footer />
    </div>
  );
};

export default SharedPage;
