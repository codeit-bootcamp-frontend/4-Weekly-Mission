import { useState, useEffect } from 'react';

import { getFolderList } from '../apis/api';

import Gnb from '../components/Gnb';
import AddLink from '../AddLink';
import Folder from '../Folder';
import Footer from '../components/Footer';

const FolderPage = () => {
  const [folderLists, setFolderLists] = useState([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderLists(data);
    };

    fetchFolderList();
  }, []);

  return (
    <>
      <Gnb className='gnb_ly'/>
      <AddLink />
      <Folder folderLists={folderLists}/>
      <Footer/>
    </>
  )
}

export default FolderPage;