import React, { useEffect, useState } from 'react';
import { FolderHeader } from '../components/folderPageComponents/FolderHeader';
import { MainHeader } from '../components/common/MainHeader';
import { useOutletContext } from 'react-router-dom';
import { FolderContents } from '../components/folderPageComponents/FolderContents';

export default function FolderPage() {
  const { userProfile } = useOutletContext();
  const [clickPoint, setClickPoint] = useState(null);

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
    <>
      <MainHeader userProfile={userProfile}></MainHeader>
      <FolderHeader></FolderHeader>
      <FolderContents clickPoint={clickPoint}></FolderContents>
    </>
  );
}
