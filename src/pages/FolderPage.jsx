import { useState, useEffect } from 'react';
import { getFolder } from '../apis/api';

import Gnb from '../components/Gnb';
import Header from '../Header';
import Folder from '../Folder';
import Footer from '../components/Footer';

const FolderPage = () => {
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
      <Gnb className='gnb_ly'/>
      <Header items={folders} />
      <Folder items={folders} />
      <Footer/>
    </>
  )
}

export default FolderPage;