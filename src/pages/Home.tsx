import styled from "styled-components";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import { Headline } from "../components/home/Headline";
import { CardFrame } from "../components/home/CardFrame";
import cards_img from "../assets/cards/cards_img.png";
import { COLORS } from "../constants/colors";

export const Home = () => {
  return (
    <>
      <HeaderElement $positionval="" />
      <HeadlineContainer>
        <Headline />
        <CardsContainer>
          <img src={cards_img} alt={cards_img} />
        </CardsContainer>
      </HeadlineContainer>
      <CardFrame num={1} height={620} reversed />
      <CardFrame num={2} height={null} reversed={false} />
      <CardFrame num={3} height={null} reversed />
      <CardFrame num={4} height={null} reversed={false} />
      <FooterElement />
    </>
  );
};

const HeadlineContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.Grey_100};
`;

const CardsContainer = styled.div`
  width: 1118px;
  height: 590px;
  overflow-y: hidden;

  & > img {
    width: 100%;
    margin-top: 50px;
    border-radius: 25px;
  }

  @media (max-width: 1124px) {
    width: 698px;
    height: 343px;
  }
  @media (max-width: 774px) {
    width: 325px;
    height: 160px;
  }
`;