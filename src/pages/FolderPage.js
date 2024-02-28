import { useState, useEffect } from 'react';

import { getFolderList, getFolderUser, getSharedFolder } from '../api/BaseUrl';
import AddLink from '../components/AddLink';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoldPage = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [categoryList, setCategoryList] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getFolderUser, setUser);
    handleLoad(getSharedFolder, setFolder);
    handleLoad(getFolderList, setCategoryList);
  }, []);

  return (
    <div>
      <Header userInfo={user?.data[0]} isSticky={false} />
      <AddLink />
      <Folder folderInfo={folder} categoryList={categoryList} />
      <Footer />
    </div>
  );
};

export default FoldPage;
