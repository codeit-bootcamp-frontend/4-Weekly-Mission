import React, { useState, useEffect } from 'react';
import './Section.css';
import { axiosInstance } from '../../utils/axiosInstance';

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

export default FolderInfo;
