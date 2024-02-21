import React from 'react';
import SharedHeader from '../components/sharedPageComponents/SharedHeader';
import SharedContents from '../components/sharedPageComponents/SharedContents';
import { folderDataAPI } from '../api/BootcampAPI';
import '../styles/shared.css';
import { useAPIData } from '../hooks/useAPIData';
import { MainHeader } from '../components/common/MainHeader';
import { useOutletContext } from 'react-router-dom';
export default function SharedPage() {
  const { data: folder } = useAPIData(folderDataAPI);
  const { userProfile } = useOutletContext();
  return (
    <>
      <MainHeader userProfile={userProfile} navFixed={true}></MainHeader>
      {folder && (
        <>
          <SharedHeader folder={folder}></SharedHeader>
          <SharedContents links={folder.cardData}></SharedContents>
        </>
      )}
    </>
  );
}
