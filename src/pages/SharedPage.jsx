import { useState, useEffect } from 'react';
import { getFolder } from '../apis/api';

import Gnb from '../components/Gnb';
import Header from '../Header';
import Folder from '../Folder';
import Footer from '../components/Footer';

const SharedPage = () => {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      
      setFolders(folder);
    };

    fetchFolder();
  }, []);

  return (
    <>
      <Gnb />
      <Header items={folders} />
      <Folder items={folders} />
      <Footer/>
    </>
  )
}

export default SharedPage;