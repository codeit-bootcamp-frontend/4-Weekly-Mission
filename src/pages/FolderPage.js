import React from 'react';
import { FolderHeader } from '../components/folderPageComponents/FolderHeader';
import { MainHeader } from '../components/common/MainHeader';
import { useOutletContext } from 'react-router-dom';
import { FolderContents } from '../components/folderPageComponents/FolderContents';

export default function FolderPage() {
  const { userProfile } = useOutletContext();
  return (
    <>
      <MainHeader userProfile={userProfile}></MainHeader>
      <FolderHeader></FolderHeader>
      <FolderContents></FolderContents>
    </>
  );
}
