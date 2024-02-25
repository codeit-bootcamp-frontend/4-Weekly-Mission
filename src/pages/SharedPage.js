import { useState, useEffect } from 'react';

import { getUser, getFolder } from '../api/BaseUrl';
import Folder from '../components/Folder';
import Footer from '../components/footer';
import Header from '../components/header';
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
    handleLoad(getUser, setUser);
    handleLoad(getFolder, setFolder);
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
