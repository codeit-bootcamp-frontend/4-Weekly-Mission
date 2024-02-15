import React from 'react';
import SharedHeader from '../components/sharedPageComponents/SharedHeader';
import SharedContents from '../components/sharedPageComponents/SharedContents';
import { folderDataAPI } from '../api/BootcampAPI';
import '../styles/shared.css';
import { useFolderData } from '../hooks/useFolderData';

export default function SharedPage() {
  const { folder, cardData } = useFolderData(folderDataAPI);

  return (
    <>
      <SharedHeader folder={folder}></SharedHeader>
      <SharedContents links={cardData}></SharedContents>
    </>
  );
}
