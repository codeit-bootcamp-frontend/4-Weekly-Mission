import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section.css';

export default function Section() {
  return (
    <section id="sectionShared">
      <div className="title">
        <FolderInfo />
      </div>
    </section>
  );
}

function FolderInfo() {
  const [folderData, setFolderData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/folder');
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
