import React from 'react';
import SharedHeader from '../components/sharedPageComponents/SharedHeader';
import SharedContents from '../components/sharedPageComponents/SharedContents';
import { folderDataAPI } from '../api/BootcampAPI';
import '../styles/shared.css';
import { useAPIData } from '../hooks/useAPIData';
import { MainHeader } from '../components/common/MainHeader';
import { userSampleDataAPI } from '../api/BootcampAPI';
export default function SharedPage() {
  const { data: folder } = useAPIData(folderDataAPI);
  return (
    <>
      <MainHeader
        userDataAPIFunc={userSampleDataAPI}
        navFixed={true}
      ></MainHeader>
      {folder && (
        <>
          <SharedHeader folder={folder}></SharedHeader>
          <SharedContents links={folder.cardData}></SharedContents>
        </>
      )}
    </>
  );
}
