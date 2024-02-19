import styled from "styled-components";
import React from "react";

const Header = (props) => {
  const { profileImageSrc, name } = props;
  return (
    <S.Header>
      <S.ProfileImg src={profileImageSrc} alt="avatarImg" />
      <S.NickNameTextStyle>@{name}</S.NickNameTextStyle>
      <S.FavoriteTextStyle>⭐️ 즐겨찾기</S.FavoriteTextStyle>
    </S.Header>
  );
};

export default Header;

const S = {
  Header: styled.header`
    display: flex;
    width: 100%;
    padding: 10px 0px 40px 0px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: var(--Linkbrary-bg, #f0f6ff);
  `,

  ProfileImg: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `,
  NickNameTextStyle: styled.h1`
    color: var(--text-color-light-mode, #000);
    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  FavoriteTextStyle: styled.h1`
    color: #000;
    text-align: center;

    /* Linkbrary/h2-semibold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  `,
};
