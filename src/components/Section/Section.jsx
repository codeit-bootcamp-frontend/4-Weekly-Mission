import React, { useState, useEffect } from 'react';
import './Section.css';
import { axiosInstance } from '../../utils/axiosInstance';

export default function Section({ style }) {
  return (
    <section className={style}>
      <div className="title">{style === 'sectionShared' ? <FolderInfo /> : <LinkBar />}</div>
    </section>
  );
}

function FolderInfo() {
  const [folderData, setFolderData] = useState();
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('sample/folder');
      setFolderData(response.data.folder);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFolderData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {folderData && folderData.owner && (
        <div className="titleContent">
          <img className="titleLogo" src={folderData.owner.profileImageSource} alt="코드잇 로고" />
          <p>{folderData.owner.name}</p>
        </div>
      )}
      {folderData && <p className="bookmark">{folderData.name}</p>}
    </>
  );
}

function LinkBar() {
  return (
    <div id="linkAddBar">
      <div id="linkAddBarText">
        <img src={`${process.env.PUBLIC_URL}/images/linkIcon.svg`} alt="링크 추가 아이콘" />
        <p>링크를 추가해 보세요</p>
      </div>
      <button id="linkAddButton">추가하기</button>
    </div>
  );
}
