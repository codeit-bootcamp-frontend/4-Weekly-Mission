import React, { useEffect, useState } from 'react';
import '../styles/profile.css';

function Profile() {
  const [owner, setOwner] = useState({
    ownerImg: '',
    ownerName: '',
    folderName: '',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        const result = await response.json();
        setOwner({
          ownerImg: result.folder.owner.profileImageSource,
          ownerName: result.folder.owner.name,
          folderName: result.folder.name,
        });
      } catch (e) {
        console.log('폴더 오너 데이터 fetch오류', e);
      }
    };
    getData();
  }, []);

  return (
    <div className="profile">
      <div className="profile__folderOwner">
        <img
          className="folderOwner--img"
          src={owner.ownerImg}
          alt={owner.ownerName}
        ></img>
        <span className="folderOwner--name">@{owner.ownerName}</span>
      </div>
      <div className="profile__folderName">{owner.folderName}</div>
    </div>
  );
}
export default Profile;
