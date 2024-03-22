import { styled } from "styled-components";
import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import card4 from "../../assets/cards/card4.png";
import { COLORS } from "../../constants/colors";

interface propTypes {
  height?: number | null;
}
export const CardFrame = ({ num, reversed, height }) => {
  const card = CARDS[`card${num}`];
  return (
    <Section>
      <SectionFrame reversed={reversed}>
        {reversed ? (
          <>
            <Description>
              {card.headline}
              <SectionCardsMobile>
                <img src={card.imgUrl} alt={`card${num}Img`} />
              </SectionCardsMobile>
              {card.description}
            </Description>
            <SectionCards>
              <img src={card.imgUrl} alt={`card${num}Img`} />
            </SectionCards>
          </>
        ) : (
          <>
            <SectionCards>
              <img src={card.imgUrl} alt={`card${num}Img`} />
            </SectionCards>
            <Description>
              {card.headline}
              <SectionCardsMobile>
                <img src={card.imgUrl} alt={`card${num}Img`} />
              </SectionCardsMobile>
              {card.description}
            </Description>
          </>
        )}
      </SectionFrame>
    </Section>
  );
};

const Section = styled.section<propTypes>`
  width: 100%;
  height: ${({ height }) => height ?? 550}px;
  display: flex;
  background-color: ${COLORS.White};

  @media (max-width: 1124px) {
    height: 445px;
  }
  @media (max-width: 774px) {
    height: auto;
  }
`;

const SectionFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 157px;

  @media (max-width: 1124px) {
    height: 315px;
    gap: 50px;
  }
  @media (max-width: 774px) {
    flex-direction: column;
    height: auto;
  }
`;

const SectionCards = styled.div`
  width: 550px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1124px) {
    width: 384px;
    height: 315px;
  }
  @media (max-width: 774px) {
    width: 384px;
    height: 315px;
    display: none;
  }

  & > img {
    width: 100%;
  }
`;

const SectionCardsMobile = styled(SectionCards)`
  display: none;

  @media (max-width: 774px) {
    display: block;
  }
`;

const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h3 {
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 10px;
  }

  @media (max-width: 774px) {
    width: 100%;
    padding: 40px 32px;
    gap: 20px;

    & > h3 {
      font-size: 24px;
      margin-bottom: 0px;
    }
    & > h3 > br {
      display: none;
    }
  }
`;

const StrongText = styled.span`
  background: linear-gradient(${({ color }) => color});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CARDS = {
  card1: {
    headline: (
      <h3>
        <StrongText color={"96deg, #fe8a8a 3%, #a4ceff 74.97%"}>
          원하는 링크
        </StrongText>
        를 <br />
        저장하세요
      </h3>
    ),
    imgUrl: card1,
    description: (
      <p>
        나중에 읽고 싶은 글, 다시 보고 싶은 영상,
        <br />
        사고 싶은 옷, 기억하고 싶은 모든 것을
        <br />한 공간에 저장하세요.
      </p>
    ),
  },
  card2: {
    headline: (
      <h3>
        링크를 폴더로 <br />
        <StrongText color={"277deg, #6fbaff, #ffd88b"}>관리</StrongText>
        하세요
      </h3>
    ),
    imgUrl: card2,
    description: (
      <p>
        나만의 폴더를 무제한으로 만들고
        <br />
        다양하게 활용할 수 있습니다.
      </p>
    ),
  },
  card3: {
    headline: (
      <h3>
        저장한 링크를 <br />
        <StrongText color={"99deg, #6d7ccd 27%, rgba(82, 136, 133, 0.22) 52%"}>
          공유
        </StrongText>
        해 보세요.
      </h3>
    ),
    imgUrl: card3,
    description: (
      <p>
        여러 링크를 폴더에 담고 공유할 수 있습니다.
        <br />
        가족,친구,동료들에게 쉽고 빠르게 링크를
        <br />
        공유해 보세요.
      </p>
    ),
  },
  card4: {
    headline: (
      <h3>
        저장한 링크를 <br />
        <StrongText color={"271deg, #fe578f -79.84%, #68e8f9 107.18%"}>
          검색
        </StrongText>
        해 보세요.
      </h3>
    ),
    imgUrl: card4,
    description: <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>,
  },
};
