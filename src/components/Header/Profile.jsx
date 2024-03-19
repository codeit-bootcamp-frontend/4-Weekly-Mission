import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});
  const sharedFetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/user');
      if (response.status === 200) {
        setUser(response.data);
      }
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

function Profile() {
  const [user, setUser] = useState([]);
  const folderFetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/users/1');
      if (response.status === 200) {
        setUser(response.data);
      }
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

export default Profile;
