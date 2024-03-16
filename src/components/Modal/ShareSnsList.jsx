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
  },
  {
    name: "페이스북",
    img: facebookImg,
  },
  {
    name: "링크복사",
    img: linkImg,
  },
];

function ShareLists() {
  return (
    <Container>
      {SHARE_LIST.map((list) => (
        <ListContainer key={list.name}>
          <img src={list.img} alt="" />
          <span>{list.name}</span>
        </ListContainer>
      ))}
    </Container>
  );
}

export default ShareLists;
