import React from "react";
import styled from "styled-components";

import kakaoImg from "../../assets/svg/share_kakao.svg";
import facebookImg from "../../assets/svg/share_facebook.svg";
import linkImg from "../../assets/svg/share_link.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  img {
    width: 42px;
  }

  span {
    font-size: 13px;
  }
`;

const SHARE_LIST = [
  {
    name: "카카오톡",
    img: kakaoImg,
    url: "https://www.kakaocorp.com/service/KakaoTalk",
  },
  {
    name: "페이스북",
    img: facebookImg,
    url: "https://www.facebook.com/",
  },
  {
    name: "링크복사",
    img: linkImg,
    onClick: () => {
      const currentURL = window.location.href;
      navigator.clipboard
        .writeText(currentURL)
        .then(() => alert("링크가 복사되었습니다."))
        .catch((error) =>
          console.error("링크 복사 중 오류가 발생했습니다.", error)
        );
    },
  },
];

function ShareLists() {
  const handleShare = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      {SHARE_LIST.map((list) => (
        <ListContainer
          key={list.name}
          onClick={list.onClick ? list.onClick : () => handleShare(list.url)}
        >
          <img src={list.img} alt="" />
          <span>{list.name}</span>
        </ListContainer>
      ))}
    </Container>
  );
}

export default ShareLists;
