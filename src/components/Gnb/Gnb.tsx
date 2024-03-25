import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSharedUser, getFolderUser } from "../../apis/Api";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import "./Gnb.css";

function Gnb() {
  const location = useLocation();
  const [userData, setUserData] = useState({ email: "", img: "" });
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  const isSharedPage = location.pathname === "/shared";

  useEffect(() => {
    const getUserData = async () => {
      try {
        let user;
        if (isSharedPage) {
          user = await getSharedUser();
          setUserData({ email: user.email, img: user.profileImageSource });
        } else {
          user = await getFolderUser();
          const { email, image_source: img } = user.data[0];
          setUserData({ email, img });
        }
        setIsUserDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [location.pathname]);

  return (
    <GnbContainer isSharedPage={isSharedPage}>
      <div className="Gnb">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="profileBox">
          {isUserDataLoaded ? (
            <>
              <img
                className="profileImg"
                src={userData.img}
                alt="프로필 이미지"
              />
              <p className="profileEmail">{userData.email}</p>
            </>
          ) : (
            <button className="gnbBtn">로그인</button>
          )}
        </div>
      </div>
    </GnbContainer>
  );
}

export default Gnb;

const GnbContainer = styled.div<{ isSharedPage: boolean }>`
  ${({ isSharedPage }) =>
    isSharedPage &&
    `
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`;
