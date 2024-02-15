import React from 'react';
import SharedHeader from '../components/sharedPageComponents/SharedHeader';
import SharedContents from '../components/sharedPageComponents/SharedContents';
import { folderDataAPI } from '../api/BootcampAPI';
import '../styles/shared.css';
import { useFolderData } from '../hooks/useFolderData';
import { MainHeader } from '../components/common/MainHeader';
import { useOutletContext } from 'react-router-dom';

export default function SharedPage() {
  const { folder, cardData } = useFolderData(folderDataAPI);
  const { userProfile } = useOutletContext();

  return (
    <>
      <MainHeader userProfile={userProfile} navFixed={true}></MainHeader>
      <SharedHeader folder={folder}></SharedHeader>
      <SharedContents links={cardData}></SharedContents>
    </>
  );
}
