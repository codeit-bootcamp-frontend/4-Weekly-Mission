import React from "react";
import { styled } from "styled-components";
import HeaderElement from "components/common/HeaderElement";
import { Headline } from "components/home/Headline";
import { CardFrame } from "./../components/home/CardFrame";
import cards_img from "assets/cards/cards_img.png";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <HeaderElement></HeaderElement>
      <HeadlineContainer>
        <Headline />
        <CardsContainer>
          <CardImg src={cards_img} alt={cards_img} />
        </CardsContainer>
      </HeadlineContainer>
      <CardFrame></CardFrame>
    </>
  );
};

const HeadlineContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f6ff;
`;

const CardsContainer = styled.div`
  width: 1200px;
  height: 590px;
  overflow-y: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  margin-top: 50px;
  border-radius: 25px;
`;
