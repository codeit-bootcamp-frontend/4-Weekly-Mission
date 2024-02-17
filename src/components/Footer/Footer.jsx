import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <S.FooterContainer></S.FooterContainer>;
};

export default Footer;

const S = {
  FooterContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 13px 16px;
    align-items: flex-start;
    background: #111322;
    height: 100px;
  `,
};
