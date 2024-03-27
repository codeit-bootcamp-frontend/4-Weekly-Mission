import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { styled } from "styled-components";
import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import card4 from "../../assets/cards/card4.png";
import { COLORS } from "../../constants/colors";
export const CardFrame = ({ num, reversed, height }) => {
    const card = CARDS[`card${num}`];
    return (_jsx(Section, { children: _jsx(SectionFrame, { reversed: reversed, children: reversed ? (_jsxs(_Fragment, { children: [_jsxs(Description, { children: [card.headline, _jsx(SectionCardsMobile, { children: _jsx("img", { src: card.imgUrl, alt: `card${num}Img` }) }), card.description] }), _jsx(SectionCards, { children: _jsx("img", { src: card.imgUrl, alt: `card${num}Img` }) })] })) : (_jsxs(_Fragment, { children: [_jsx(SectionCards, { children: _jsx("img", { src: card.imgUrl, alt: `card${num}Img` }) }), _jsxs(Description, { children: [card.headline, _jsx(SectionCardsMobile, { children: _jsx("img", { src: card.imgUrl, alt: `card${num}Img` }) }), card.description] })] })) }) }));
};
const Section = styled.section `
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
const SectionFrame = styled.div `
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
const SectionCards = styled.div `
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
const SectionCardsMobile = styled(SectionCards) `
  display: none;

  @media (max-width: 774px) {
    display: block;
  }
`;
const Description = styled.div `
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
const StrongText = styled.span `
  background: linear-gradient(${({ color }) => color});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const CARDS = {
    card1: {
        headline: (_jsxs("h3", { children: [_jsx(StrongText, { color: "96deg, #fe8a8a 3%, #a4ceff 74.97%", children: "\uC6D0\uD558\uB294 \uB9C1\uD06C" }), "\uB97C ", _jsx("br", {}), "\uC800\uC7A5\uD558\uC138\uC694"] })),
        imgUrl: card1,
        description: (_jsxs("p", { children: ["\uB098\uC911\uC5D0 \uC77D\uACE0 \uC2F6\uC740 \uAE00, \uB2E4\uC2DC \uBCF4\uACE0 \uC2F6\uC740 \uC601\uC0C1,", _jsx("br", {}), "\uC0AC\uACE0 \uC2F6\uC740 \uC637, \uAE30\uC5B5\uD558\uACE0 \uC2F6\uC740 \uBAA8\uB4E0 \uAC83\uC744", _jsx("br", {}), "\uD55C \uACF5\uAC04\uC5D0 \uC800\uC7A5\uD558\uC138\uC694."] })),
    },
    card2: {
        headline: (_jsxs("h3", { children: ["\uB9C1\uD06C\uB97C \uD3F4\uB354\uB85C ", _jsx("br", {}), _jsx(StrongText, { color: "277deg, #6fbaff, #ffd88b", children: "\uAD00\uB9AC" }), "\uD558\uC138\uC694"] })),
        imgUrl: card2,
        description: (_jsxs("p", { children: ["\uB098\uB9CC\uC758 \uD3F4\uB354\uB97C \uBB34\uC81C\uD55C\uC73C\uB85C \uB9CC\uB4E4\uACE0", _jsx("br", {}), "\uB2E4\uC591\uD558\uAC8C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] })),
    },
    card3: {
        headline: (_jsxs("h3", { children: ["\uC800\uC7A5\uD55C \uB9C1\uD06C\uB97C ", _jsx("br", {}), _jsx(StrongText, { color: "99deg, #6d7ccd 27%, rgba(82, 136, 133, 0.22) 52%", children: "\uACF5\uC720" }), "\uD574 \uBCF4\uC138\uC694."] })),
        imgUrl: card3,
        description: (_jsxs("p", { children: ["\uC5EC\uB7EC \uB9C1\uD06C\uB97C \uD3F4\uB354\uC5D0 \uB2F4\uACE0 \uACF5\uC720\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", _jsx("br", {}), "\uAC00\uC871,\uCE5C\uAD6C,\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC27D\uACE0 \uBE60\uB974\uAC8C \uB9C1\uD06C\uB97C", _jsx("br", {}), "\uACF5\uC720\uD574 \uBCF4\uC138\uC694."] })),
    },
    card4: {
        headline: (_jsxs("h3", { children: ["\uC800\uC7A5\uD55C \uB9C1\uD06C\uB97C ", _jsx("br", {}), _jsx(StrongText, { color: "271deg, #fe578f -79.84%, #68e8f9 107.18%", children: "\uAC80\uC0C9" }), "\uD574 \uBCF4\uC138\uC694."] })),
        imgUrl: card4,
        description: _jsx("p", { children: "\uC911\uC694\uD55C \uC815\uBCF4\uB4E4\uC744 \uAC80\uC0C9\uC73C\uB85C \uC27D\uAC8C \uCC3E\uC544\uBCF4\uC138\uC694." }),
    },
};
