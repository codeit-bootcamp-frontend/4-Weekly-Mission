import React, { useEffect, useState } from 'react';
import { FolderHeader } from '../components/folderPageComponents/FolderHeader';
import { MainHeader } from '../components/common/MainHeader';
import { useOutletContext } from 'react-router-dom';
import { FolderContents } from '../components/folderPageComponents/FolderContents';
import { FolderPageContext } from '../context/FolderPageContext';
import { userSampleDataAPI } from '../api/BootcampAPI';
import { useAPIData } from '../hooks/useAPIData';
import { categoryDataAPI, categoryFolderDataAPI } from '../api/BootcampAPI';

export default function FolderPage() {
  const { handleModalStatus, handleModalContent } = useOutletContext();
  const [clickPoint, setClickPoint] = useState(null);
  const { data: category } = useAPIData(categoryDataAPI);
  const { data: folder, handleData: setFolder } = useAPIData(
    categoryFolderDataAPI,
    '0',
  );

  useEffect(() => {
    const handleClickPoint = (e) => {
      setClickPoint(e.target);
    };
    document.addEventListener('click', handleClickPoint);
    return () => {
      document.removeEventListener('click', handleClickPoint);
    };
  }, []);

  return (
    <FolderPageContext.Provider
      value={{
        clickPoint,
        handleModalStatus,
        handleModalContent,
        category,
        folder,
        setFolder,
      }}
    >
      <MainHeader userDataAPIFunc={userSampleDataAPI}></MainHeader>
      <FolderHeader></FolderHeader>
      <FolderContents></FolderContents>
    </FolderPageContext.Provider>
  );
}
