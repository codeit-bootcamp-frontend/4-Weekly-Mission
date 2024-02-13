import React, { useEffect, useState } from 'react';

const Information = () => {
  const [myInfo, setMyInfo] = useState(0);

  useEffect(() => {
    fetch('https://bootcamp-api.codeit.kr/api/sample/user')
      .then((response) => response.json())
      .then((data) => {
        setMyInfo(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  if (!myInfo) {
    return <button>로그인</button>;
  }

  return (
    <div className="nav__info">
      <img
        className="info--image"
        src={myInfo.profileImageSource}
        alt="ProfileImg"
      />
      <span className="info--email">{myInfo.email}</span>
    </div>
  );
};

export default Information;
