import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';

function SharedProfile() {
  const [user, setUser] = useState({});
  const sharedFetchData = async () => {
    try {
      const response = await axiosInstance.get('sample/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    sharedFetchData();
  }, []);
  return (
    <>
      {user === null ? (
        <div className="headerButton">
          <button>로그인</button>
        </div>
      ) : (
        <div id="profileArea">
          <img id="profileImage" src={user.profileImageSource} alt="프로필 이미지" />
          <p id="profileEmail">{user.email}</p>
        </div>
      )}
    </>
  );
}

function FolderProfile() {
  const [user, setUser] = useState([]);
  const folderFetchData = async () => {
    try {
      const response = await axiosInstance.get('users/1');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    folderFetchData();
  }, []);
  return (
    <>
      {user.data == null ? (
        <div className="headerButton">
          <button>로그인</button>
        </div>
      ) : (
        <div id="profileArea">
          <img id="profileImage" src={user.data[0].image_source} alt="프로필 이미지" />
          <p id="profileEmail">{user.data[0].email}</p>
        </div>
      )}
    </>
  );
}

export { SharedProfile, FolderProfile };
