import logo from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/profileImg.svg";
import React from "react";
import styled from "styled-components";

const NavigationBar = (props) => {
  const { userEmail } = props;
  return (
    <S.NavigationBarContainer>
      <S.Logo src={logo} alt="logo" />
      <S.ProfileContainer>
        <S.ProfileImg src={profileImg} alt="profileImg" />
        <S.EmailText>{userEmail}</S.EmailText>
      </S.ProfileContainer>
    </S.NavigationBarContainer>
  );
};

export default NavigationBar;

const S = {
  NavigationBarContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 18px;
    background: var(--Linkbrary-bg, #f0f6ff);

    @media (min-width: 768px) {
      padding: 33px 33px;
    }

    @media (min-width: 1024px) {
      padding: 33px 200px;
    }
  `,

  ProfileContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  Logo: styled.img`
    width: 150px;
  `,
  ProfileImg: styled.img`
    width: 40px;
  `,
  EmailText: styled.span`
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  `,
};
